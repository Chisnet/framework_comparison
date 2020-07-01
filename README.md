# Framework Comparison

### A comparison of popular web frameworks ability to delivery 1 line of centered text

Requirements:

- Must deliver my one page site via the framework
- Must deliver a valid manifest file
- Must be able to host additional static files (favicon, etc.)
- Must score 100 on accessibility and SEO on Lighthouse

Assessment Criteria:

- Amount of setup needed (Steps)
- Number of node packages needed
- Total page weight of the one page
- Lighthouse Score for performance

Commands Used:

- Count prod packages
    - npm ls --parseable --prod | wc -l
- Count dev packages
    - npm ls --parseable --dev | wc -l

# Sapper (Svelte)

Steps:

- One line setup command
    - npx degit "sveltejs/sapper-template#webpack"
- Strip out extra pages/files in template (Easily done)
- Edit the template.html
- Edit the index page
- Edit global.css
- Edit the manifest
- Add icons
- Done!

Packages:

- 20 production
- 415 additional development

Page Weight:

- 12kb transferred
- 23.6kb total

Lighthouse:

- 100

Additional Notes:

- PWA by default (although not sure what it's doing)
- SSR out of the box

# Gatsby (React)

Steps:

- Install Gatsby CLI
    - npm install -g gatsby-cli
- One line setup command
    - gatsby new gatsby https://github.com/gatsbyjs/gatsby-starter-hello-world
- Add a layout
- Edit the index page
- Add global.css
- Add manifest
- Add icons
- Add Helmet to enable SEO (following recommendation)
    - npm install --save gatsby-plugin-react-helmet react-helmet
    - Add plugin to gatsby config
    - Add Helmet element to index page with basic data

Packages:

- 1890 production
- 2 additional development

Page Weight:

- 83.1kb transferred
- 242kb total

Lighthouse:

- 100

Additional Notes:

- TypeScript support out of the box
- Some package warnings when counting
- Helmet config took a bit of research, might be easier methods
- Production SEO config would probably also be more complex
- A heavier weight initial template (gatsby-site) is available by default which might save some time, but adds a lot of extra stuff
- Manifest building plugin recommended (auto-generates icons)
- SSR out of the box

# NextJS (React)

Steps:

- One line setup command
    - npx create-next-app
    - Choose "Default starter app"
- Remove tiny bit of extra API that's not needed (Super easy)
- Edit the index page
- Add _app.js (to allow global CSS)
- Add _document.js to allow editing base HTML template
- Add global.css
- Add icons
- Add manifest

Packages:

- 834 production
- 1 additional development

Page Weight:

- 65.3kb transferred
- 189kb total

Lighthouse:

- 99

Additional Notes:

- TypeScript support out of the box
- SSR out of the box