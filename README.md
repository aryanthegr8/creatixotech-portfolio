# CreatixoTech portfolio

A Next.js portfolio for Aryan Mathur with Home, School Websites, Business Websites, Work, and Contact pages.

## Run locally

1. Install Node.js 20.9 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Edit

- Homepage: `app/page.tsx`
- Service, work and contact pages: their folders under `app/`
- Design and responsive styles: `app/globals.css`
- Site title and description: `app/layout.tsx`
- Favicon: `public/favicon.svg`

The Contact page includes Aryan’s email and WhatsApp number. Edit them in `app/contact/page.tsx`. Replace project placeholders with approved screenshots, exact contributions and links. The browser mockup on the homepage is illustrative, not a client screenshot.

## Deploy to Netlify

Push this folder to a GitHub repository, then import it in Netlify. The build command is `npm run build`. Leave the publish directory on Netlify's automatic Next.js setting. Each Git push will redeploy the site. Add your custom domain after the first deploy.

## Netlify contact form

The form uses Netlify Forms. `public/__forms.html` contains the static form definition Netlify detects, and `app/contact/contact-form.tsx` submits via AJAX to that static route. Keep field names identical in both files.

1. In your Netlify project, open Forms and enable form detection before deploying (redeploy after enabling it).
2. After deployment, check that `project-enquiry` appears in Forms.
3. Submit one test enquiry on the live Contact page and confirm it appears in the dashboard.
4. Configure email submission notifications to `er.aryanmathue19@gmail.com` in Netlify. Adding the address on the website does not enable notifications automatically.

Local development does not include Netlify’s form handler; submissions must be tested on Netlify. Submission errors preserve the entered data and offer email/WhatsApp alternatives. No secret keys or extra database are needed.
