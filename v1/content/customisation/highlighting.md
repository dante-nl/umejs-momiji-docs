---
title: 'Highlighting'
sidebar_order: 999
---

# Highlighting

With umejs-mojmiji, it is possible to change which theme is used by highlight.js for your code blocks. Any theme from the [demo page](https://highlightjs.org/demo) should work. Only syntax highlighting is applied currently.

You can either set one definitive theme for both light and dark, or change it individually. The ones used by Momiji are `github-min` and `github-dark-min`.

Here's how to change it inside your umejs config:

```js
const umeConfig = ume({
    config: {
        highlightTheme: 'github-min',
        // ^ same theme for both light and dark mode
        highlightTheme: {
            light: 'github-min',
            dark: 'github-dark',
        }
        // ^ different themes for light and dark
    },
    // ...
})
```