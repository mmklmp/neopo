# NeonPotions

## ~
[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/templates/tree/main/astro-blog-starter-template)

<!-- dash-content-start -->
Create a blog with Astro and deploy it on Cloudflare Workers as a [static website](https://developers.cloudflare.com/workers/static-assets/).
<!-- dash-content-end -->


## A
Outside of this repo, you can start a new project with this template using [C3](https://developers.cloudflare.com/pages/get-started/c3/) (the `create-cloudflare` CLI):

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/astro-blog-starter-template
```


## B
Astro looks for `.astro` or `.md` files (in the `src/pages/` directory; Each page is exposed as a route based on its file name)
`src/components/`, (any Astro/React/Vue/Svelte/Preact components)
`src/content/` directory (contains "collections" of related Markdown and MDX documents) 
[Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/)
Any static assets, like images, can be placed in the `public/` directory.


## C
| Command                           | Action                                           |
| :-------------------------------- | :----------------------------------------------- |
| `npm install`                     | Installs dependencies                            |
| `npm run dev`                     | Starts local dev server at `localhost:4321`      |
| `npm run build`                   | Build your production site to `./dist/`          |
| `npm run preview`                 | Preview your build locally, before deploying     |
| `npm run astro ...`               | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`         | Get help using the Astro CLI                     |
| `npm run build && npm run deploy` | Deploy your production site to Cloudflare        |
| `npm wrangler tail`               | View real-time logs for all Workers              |

## D
[documentation](https://docs.astro.build),[Discord server](https://astro.build/chat).
