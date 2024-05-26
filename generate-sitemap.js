import * as fs from 'fs';
import { create } from 'xmlbuilder2';
var domain = 'www.benjamiz.com';
var protocol = 'https://'; // Use 'http://' if your site doesn't support HTTPS
var paths = [
    '/',
    '/about',
    '/experience',
    '/works',
    '/works/article/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve',
    // Add more paths here
];
var root = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });
paths.forEach(function (path) {
    var urlElement = root.ele('url');
    urlElement.ele('loc').txt("".concat(protocol).concat(domain).concat(path));
    urlElement.ele('lastmod').txt(new Date().toISOString().split('T')[0]);
    urlElement.ele('priority').txt('1.00');
});
var xml = root.end({ prettyPrint: true });
fs.writeFileSync('public/sitemap.xml', xml);
console.log('Sitemap generated!');
