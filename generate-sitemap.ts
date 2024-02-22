import * as fs from 'fs';
import { create } from 'xmlbuilder2';

const domain = 'www.benjamiz.com';
const protocol = 'https://';  // Use 'http://' if your site doesn't support HTTPS

const paths = [
    '/',
    '/about',
    '/experience',
    '/works',
    '/works/article/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve',
    // Add more paths here
];

const root = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

paths.forEach(path => {
    const urlElement = root.ele('url');
    urlElement.ele('loc').txt(`${protocol}${domain}${path}`);
    urlElement.ele('lastmod').txt(new Date().toISOString().split('T')[0]);
    urlElement.ele('priority').txt('1.00');
});

const xml = root.end({ prettyPrint: true });
fs.writeFileSync('static/sitemap.xml', xml);
console.log('Sitemap generated!');
