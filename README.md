## Comparison of popular web frameworks ability to delivery 1 line of centered text

Requirements:

- Must deliver my one page site via the framework
- Must deliver a valid manifest file
- Must be able to host static files
- Must score 100 on accessibility and SEO on Lighthouse

Assessment Criteria:

- Amount of setup needed (Steps)
- Number of node packages needed
- Total page weight of the one page
- Lighthouse Score for performance

# Sapper (Svelte)

Steps:

- One line setup command
- - npx degit "sveltejs/sapper-template#webpack"
- 

- Minimal config needed (SEO, GZip included)
- Simple static file handling
- Simple route handling
- 20KB to deliver the one line
- PWA by default (although not sure what it's doing)
- No special manifest handling
- Limited large real world usage
- No large company maintainer

# Gatsby (React)

- Couple of plugins needed / recommended (SEO, Manifest)
- Simple static file handling
- Simple route handling
- Manifest building plugin recommended (auto-generates icons)

# NextJS (React)


# NuxtJS (Vue)


# Quasar (Vue)


# Angular


