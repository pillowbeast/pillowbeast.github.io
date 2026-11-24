# pillowbeast.github.io

Personal site for [pillowbeast.github.io](https://pillowbeast.github.io/), built with [Hugo](https://gohugo.io/) and the [hugo-pillow](https://github.com/pillowbeast/hugo-pillow) theme.

## Codebase

| Path | What it is |
| --- | --- |
| `content/` | Markdown pages. Each folder is a section the theme knows how to render. |
| `content/blog/` | Blog posts. |
| `content/project/` | Projects. |
| `content/recipe/` | Recipes. |
| `content/book/` | Books. |
| `content/retro/` | Retrospectives. |
| `content/notes/` | Notes. |
| `content/about/` | About page. |
| `hugo.toml` | Site config: title, base URL, colors, contact details, and social links. |
| `themes/hugo-pillow/` | Theme, checked out as a [git submodule](https://github.com/pillowbeast/hugo-pillow). Layouts, shortcodes, CSS, and JavaScript live here. |
| `.github/workflows/deploy.yml` | Builds the site with Hugo and publishes `public/` to the `gh-pages` branch. |
| `.github/workflows/update_submodules.yml` | Updates the theme submodule. |

Page markup uses the theme’s shortcodes (`gallery`, `recipe`, `spotify`, and others). Those templates are in `themes/hugo-pillow/layouts/shortcodes/`.

## Local development

You need:

- [Git](https://git-scm.com/)
- [Hugo](https://gohugo.io/installation/) 0.88.0 or newer (the extended build is not required)

Clone the repo with the theme submodule, then start the dev server from the repo root:

```bash
git clone --recurse-submodules https://github.com/pillowbeast/pillowbeast.github.io.git
cd pillowbeast.github.io
hugo server
```

If you already cloned without submodules:

```bash
git submodule update --init
hugo server
## hugo server --debug
```

Hugo serves the site at `http://localhost:1313` and rebuilds when you change content or the theme.

## Publishing theme changes

This repo pins the theme to one specific commit of `hugo-pillow`. Pushing to the theme repo alone does not change the live site; the pin has to be moved here and pushed.

First push the theme commit to GitHub (the deploy job clones the theme from there). Then use one of the two options below.

### Option 1: from GitHub

In the repo's Actions tab, open **Update Submodules** and click **Run workflow**. It moves the pin to the latest theme commit, pushes that to `main`, and starts the deploy. If the theme is already up to date it does nothing.

Afterwards, bring your local checkout in line:

```bash
git pull
git submodule update
```

### Option 2: locally

From the root of this repo:

```bash
git submodule update --remote themes/hugo-pillow   # check out the latest theme commit
git add themes/hugo-pillow                         # stage only the new pin
git commit -m "Update: Theme"
git push
```

The push to `main` starts `deploy.yml`, which rebuilds the site and publishes it.

Either way, the change is live a minute or two later; progress is visible in the Actions tab.

To check which theme commit is pinned and which is checked out:

```bash
git ls-tree HEAD themes/hugo-pillow        # pinned
git -C themes/hugo-pillow log --oneline -1 # checked out
```
