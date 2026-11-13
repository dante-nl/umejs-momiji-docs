---
title: 'Customising the site name and description'
sidebar_order: 30
---

# Customising the site name and description

You may want to change the site name and description. By default, the name is just set to `an umejs-momiji theme`. The default description is just a reference how it is built using umejs. Both can easily be changed using the configuration.

The site name is used primarily on the top bar (the name next to the logo on the top) as well as in the footer. The site description is very rarely used in the site description field for the [Open Graph protocol](https://ogp.me/). Most of the time, the content of the page is used or the `description` key from the frontmatter.

Insight your umejs configuration object, simply define them there:

```js
const umeConfig = ume({
    config: {
        siteTitle: 'My Website',
        siteDescription: 'Made with love <3',
    },

    // ...
})
```