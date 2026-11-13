---
title: 'Showcasing your logo'
---

# Showcasing your logo

With Momiji you can easily showcase your custom logo! You can do this by setting a favicon in the configuration and by setting a logo in the config.

## Logo in the top bar

You can add something like the following to define a logo. The path is relative for the visitor, not your file structure. E.g. if you stored something in the `/public/` directory, that doesn't mean you would link the path to the `/public/` directory here. This means you can place something in the [assetsDir](https://ume.dantenl.com/v1/config/assets-dir) and it can be easily served.

```js
// from the assets directory
const umeConfig = ume({
    config: {
        logo: '/_ume/assets/logo.png'
    }
    // ...
})
```

It doesn't have to be a path to an image though! You can also just showcase something like a character or an emoji! 

```js
// using text
const umeConfig = ume({
    config: {
        logo: '◆'
    }
    // ...
})
```

You would also be able to put any other HTML string in here as well, so you could use a FontAwesome icon or a different SVG here as well. Anything that's not an image will automatically be coloured according to your accent colour as well.

## Favicon

A favicon has to be a path relative to the user visiting, not your file structure, similar to images in the top bar. Again, this means you can put something [assetsDir](https://ume.dantenl.com/v1/config/assets-dir) and let it be served by umejs.

To do this, your config would look something like this:

```js
const umeConfig = ume({
    config: {
        favicon: '/_ume/assets/favicon.ico'
    }
    // ...
})
```
