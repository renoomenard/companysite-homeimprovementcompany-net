README_UPLOAD.txt — The Home Improvement Company Static Site
=============================================================

POST COUNT CONFIRMATION
  Total published blog posts converted: 168

URL STRUCTURE CONFIRMATION
  Homepage:         https://homeimprovementcompany.net/
  Blog archive:     https://homeimprovementcompany.net/blog/
  Blog posts:       https://homeimprovementcompany.net/[post-slug]/
  Privacy Policy:   https://homeimprovementcompany.net/privacy-policy/
  Terms:            https://homeimprovementcompany.net/terms-conditions/
  Shipping/Returns: https://homeimprovementcompany.net/shipping-returns/

SITEMAP CONFIRMATION
  sitemap.xml is included in the root and covers:
  - Homepage
  - Blog archive
  - All 168 blog post URLs
  - All 3 legal pages

FOLDER STRUCTURE
  /index.html               → Homepage
  /style.css                → Homepage-specific styles
  /sitemap.xml              → XML sitemap
  /robots.txt               → Search engine directives
  /CNAME                    → GitHub Pages custom domain
  /assets/
      style.css             → Shared stylesheet
      site.js               → Shared JavaScript
      hero.jpg              → Hero image
  /blog/
      index.html            → Blog archive (all 168 posts with search)
      blog.css              → Blog/post styles
  /[post-slug]/
      index.html            → One folder per post (clean URLs)
  /privacy-policy/index.html
  /terms-conditions/index.html
  /shipping-returns/index.html

UPLOAD INSTRUCTIONS — GITHUB PAGES
  1. Create a new GitHub repository named "homeimprovementcompany.net"
     (or your username.github.io for a root pages site)
  2. Upload all contents of this folder to the REPOSITORY ROOT
     (not into a subfolder — index.html must be at the root)
  3. In repository Settings > Pages:
     - Source: Deploy from a branch
     - Branch: main (or master), folder: / (root)
  4. Add your custom domain "homeimprovementcompany.net" in the Custom Domain field
  5. Enable "Enforce HTTPS" once the domain has propagated
  6. DNS: Point your domain's A records to GitHub Pages IPs:
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
     Or use a CNAME record pointing to [username].github.io

UPLOAD INSTRUCTIONS — CLOUDFLARE PAGES
  1. Log in to Cloudflare Dashboard > Pages > Create a project
  2. Connect to Git or use Direct Upload
  3. For Direct Upload: upload the ZIP of this folder
  4. Set the build output directory to / (root)
  5. Add your custom domain in the Pages project settings

UPLOAD INSTRUCTIONS — VERCEL
  1. Install Vercel CLI: npm i -g vercel
  2. From this folder, run: vercel --prod
  3. Follow prompts to link to your Vercel account
  4. Add your custom domain in the Vercel project dashboard

GOOGLE ANALYTICS
  Google Analytics is already configured with the tracking ID G-8G2S370VWF
  on all pages. To change the tracking ID, search and replace G-8G2S370VWF
  with your new Measurement ID across all HTML files.

NOTES
  - All URLs use clean folder-based structure (no .html extensions)
  - Internal links are relative (/ prefixed) and will work on any domain
  - The hero image is stored at /assets/hero.jpg
  - No server-side code, databases, or PHP required
