---
_TEMPLATE: 'index'
title: 'Welcome'
sidebar_order: 0
---

# Welcome to umejs-momiji!

Customisable documentation theme for use with umejs.

umejs-momiji, or just momiji is a theme to create beautiful documentation sites easily with umejs!

momiji is:

- **easily installed**
- **easily customised**
- **easily deployed**

If you're curious what it looks like: **this documentation site has been built with umejs-momiji**!

## Installation

To use umejs, you need [umejs](https://ume.dantenl.com), [Express](https://www.npmjs.com/package/express) and [Node.js](https://nodejs.org/en). It should also be compatible with [bun](https://bun.sh/), though not officialy tested.

The theme can be easily installed from the npm registry:

```
npm i @dantenl/umejs-momiji
```

Inside your umejs configuration object, simply add `@dantenl/umejs-momiji` to your themes array:

```js
const umeConfig = ume({
    themes: ['@dantenl/umejs-momiji'],

    contentDir: path.join(__dirname, 'blog'),
});
```

Simply start up your project, and if you won't have a `templatePath` set, your theme will be ready to use!

For more details, please visit the [Getting started](/getting-started) page.

## About

umejs-momiji is a theme made by the same developer behind umejs: dante_nl. This theme has not been made as _the_ definitive theme for umejs, rather as an example where others can build upon, while also increasing the accessibility to umejs, as making all this yourself might be a bit daunting to some.

I don't intend to give this theme any preferential treatment over any themes that follow after this. As much knowledge as possible is on the [dev branch](https://github.com/dante-nl/umejs/tree/dev) for umejs. However, the documentation can be a bit behind whenever I work on a new release. **Documentation updates and umejs updates will release on the same day though!** If you're a theme developer, or interested in becoming one, just send me a DM on Discord (@dante_nl) or send me an e-mail: `dante at dantenl dot com` (spelled like this to prevent dumb bots from spamming me)

Also, if you're curious about the name: I wanted a theme with a red accent colour. Originally it was called umejs-red-maple, but I changed it during development because I learnt the Japanese word for the maple leafs because of a manga I read so I decided to change it to umejs-momiji to reflect that!