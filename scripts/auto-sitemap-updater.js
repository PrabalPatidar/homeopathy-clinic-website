#!/usr/bin/env node
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";
import { generateSitemap } from "../src/utils/sitemapGenerator.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");
const backupsDir = path.join(projectRoot, "public", "_sitemap_backups");

function sha1(content) {
    return crypto.createHash("sha1").update(content).digest("hex");
}

function ensureDirs() {
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
    if (!fs.existsSync(backupsDir)) fs.mkdirSync(backupsDir, { recursive: true });
}

function healthCheck() {
    try {
        if (!fs.existsSync(sitemapPath)) {
            console.log("HEALTH: sitemap.xml missing");
            process.exitCode = 2;
            return;
        }
        const content = fs.readFileSync(sitemapPath, "utf8");
        if (!content.includes("<urlset") || content.length < 50) {
            console.log("HEALTH: sitemap.xml invalid or too small");
            process.exitCode = 3;
            return;
        }
        console.log("HEALTH: OK");
    } catch (e) {
        console.log("HEALTH: ERROR", e?.message || e);
        process.exitCode = 1;
    }
}

async function update() {
    ensureDirs();

    const baseUrl = process.env.SITEMAP_BASE_URL || "https://cabty.co.uk";
    const newXml = await generateSitemap({ baseUrl });

    let oldXml = "";
    if (fs.existsSync(sitemapPath)) {
        oldXml = fs.readFileSync(sitemapPath, "utf8");
    }

    const oldHash = sha1(oldXml);
    const newHash = sha1(newXml);

    if (oldHash === newHash) {
        console.log("ℹ️  Sitemap unchanged; no write needed.");
        return;
    }

    // Backup old
    if (oldXml) {
        const ts = new Date().toISOString().replace(/[:.]/g, "-");
        const backupFile = path.join(backupsDir, `sitemap-${ts}.xml`);
        fs.writeFileSync(backupFile, oldXml, "utf8");
        console.log(`🗂️  Backup saved: ${backupFile}`);
    }

    fs.writeFileSync(sitemapPath, newXml, "utf8");
    console.log(`✅ Sitemap updated: ${sitemapPath}`);
}

async function main() {
    const args = process.argv.slice(2);
    if (args.includes("--health-check")) return healthCheck();
    return update();
}

main();


