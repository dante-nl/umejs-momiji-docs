import express from 'express';
import { default as ume } from '@dantenl/umejs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 9420;

const umeConfig = ume({
    contentDir: path.join(__dirname, 'v1', 'content'),

    themes: ['@dantenl/umejs-red-maple'],
    config: {
        siteTitle: 'umejs-red-maple',
        siteDescription: 'Documentation for umejs-red-maple, a theme for umejs',
        topbarLinks: [],
        colors: {},
    },
    mode: 'development',
});

// for (const dir of umeConfig.ctx.assetsDirs) {
//     app.use('/_ume/assets', express.static(dir, { maxAge: '1y', immutable: true, etag: true }));
// }

app.use('/{*slug}', umeConfig);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
