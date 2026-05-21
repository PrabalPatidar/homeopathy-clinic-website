#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { generateSitemap } from "../src/utils/sitemapGenerator.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    try {
        const projectRoot = path.resolve(__dirname, "..");
        const publicDir = path.join(projectRoot, "public");
        const outFile = path.join(publicDir, "sitemap.xml");

        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
        }

        const baseUrl = process.env.SITEMAP_BASE_URL || "https://cabty.co.uk";
        const xml = await generateSitemap({ baseUrl });

        fs.writeFileSync(outFile, xml, "utf8");
        console.log(`✅ Sitemap generated: ${outFile}`);
    } catch (err) {
        console.error("❌ Failed to generate sitemap:", err?.message || err);
        process.exit(1);
    }
}

main();


