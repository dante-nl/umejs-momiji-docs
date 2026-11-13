import express from 'express';
import { default as ume } from '@dantenl/umejs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 9420;

const umeConfig = ume({
    contentDir: path.join(__dirname, 'v1', 'content'),

    themes: ['@dantenl/umejs-momiji'],
    config: {
        siteTitle: 'umejs-momiji',
        siteDescription: 'Documentation for umejs-momiji, a theme for umejs',
        topbarLinks: [],
        colors: {},
        favicon: '/_ume/assets/favicon.ico',
        logo: '/_ume/assets/umejs-momiji-logo-full.png',
    },
    mode: 'development',
    assetsDir: path.join(__dirname, 'assets'),
});

for (const dir of umeConfig.ctx.assetsDirs) {
    app.use('/_ume/assets', express.static(dir, { maxAge: '1y', immutable: true, etag: true }));
}

app.use('/{*slug}', umeConfig);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
