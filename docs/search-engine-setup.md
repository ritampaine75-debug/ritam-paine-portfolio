# Search engine setup — Google Search Console & Bing Webmaster Tools

This document walks through verifying ownership and monitoring indexing for the Ritam Paine
portfolio. The site itself is already technically ready:

- semantic HTML5 and a single `H1` per page
- unique `<title>` + meta description per page
- canonical URLs
- Open Graph + Twitter card metadata
- `robots.txt` (allow all, points to the sitemap)
- `sitemap.xml` (regenerated on every `npm run build`)
- JSON-LD structured data: `Person`, `WebSite`, `WebPage`, `BreadcrumbList`, `Article`,
  and `SoftwareApplication` / `Project` where genuinely applicable
- clean URLs and strong internal linking (home → projects → project page → article → related project)

No search tool can guarantee a #1 ranking. The goal of this setup is to make the site easy to
crawl, correctly understood and honestly indexed.

---

## 1. Google Search Console

1. **Add the domain**
   - Go to <https://search.google.com/search-console> and sign in with a Google account.
   - Choose **Domain** and type your domain (e.g. `ritampaine75-debug.github.io`) — this covers
     every sub-path including the portfolio.
   - If you prefer the **URL prefix** method, use
     `https://ritampaine75-debug.github.io/ritam-paine-portfolio/`.

2. **Verify ownership**
   - Domain method: add the required DNS `TXT` record at your DNS provider and click Verify.
   - URL-prefix method: upload the `google*.html` file or paste the meta tag into
     `index.html` `<head>` temporarily, then verify.
   - Verification via the GitHub Pages repo works too if you can add the file to the repository.

3. **Submit the sitemap**
   - Open **Sitemaps** in the sidebar.
   - Submit: `https://ritampaine75-debug.github.io/ritam-paine-portfolio/sitemap.xml`
   - Wait for the status to show *Success*.

4. **Request indexing**
   - Use the **URL Inspection** tool on key pages: the homepage, `/projects`,
     `/about-ritam-paine` and a couple of project pages.
   - Click **Request indexing** for each. Requests are polite asks, not guarantees.

5. **Monitor indexing**
   - **Pages** report shows how many pages Google has indexed and any coverage issues.

6. **Fix crawl issues**
   - Work through **Page indexing** and **Sitemaps** errors as they appear.
   - If a page is marked *Crawled – currently not indexed*, improve its content quality and
     strengthen internal links to it, then re-request indexing.

7. **Monitor search queries**
   - **Performance** report shows queries, clicks and impressions for terms like
     *Ritam Paine*, *Ritam Paine web developer*, *Ritam Paine GitHub*, *Ritam Paine portfolio*.

8. **Improve pages from real data**
   - Let actual search behaviour guide updates. Expand pages that earn impressions but few clicks
     with genuinely useful content. Never add thin pages just to target a keyword.

---

## 2. Bing Webmaster Tools

1. **Add the site**
   - Go to <https://www.bing.com/webmasters> and sign in (you can import from Google Search
     Console in one click).

2. **Verify ownership**
   - Choose one of the provided methods (XML file upload, meta tag, DNS, or import from GSC).

3. **Submit the sitemap**
   - In **Sitemaps**, submit:
     `https://ritampaine75-debug.github.io/ritam-paine-portfolio/sitemap.xml`

4. **Request indexing**
   - Use **URL Submission** for the homepage and key pages.

5. **Monitor indexing**
   - Review the **Index** and **Crawl** reports in the left navigation.

6. **Fix crawl issues**
   - Address any blocked or error URLs the reports surface.

7. **Monitor queries**
   - Use **Search performance / Keywords** to track how the site is found on Bing.

8. **Improve with real data**
   - Apply the same honest content strategy as with Google: keep pages genuinely useful and
     internally linked, and iterate based on real performance.

---

## When you add a custom domain

1. Change `SITE_URL` in `src/data/site.js` to `https://your-domain.example` and rebuild.
   Canonical URLs, Open Graph URLs, `robots.txt` and `sitemap.xml` update automatically.
2. Add the domain as a **new property** in Search Console and Bing Webmaster Tools and verify it.
3. Re-submit the sitemap at the new domain.
4. Keep the old property for a while and set up redirects from the old URL if you migrate.

---

## Good habits that help indexing

- Publish project pages and articles with unique, original content (the blog is already
  structured this way).
- Keep every internal link meaningful: article → related project, project → related article.
- Update `lastmod` naturally when content genuinely changes (the sitemap regenerates per build).
- Avoid duplicate pages: `/projects` is the archive; each `/projects/<slug>` page has unique copy.
- Never stuff keywords; write naturally for humans first.
