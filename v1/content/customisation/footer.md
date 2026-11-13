---
title: 'Customising the footer'
sidebar_order: 50
---

# Customising the footer

The footer of the page is the text at the bottom. By default, they show something like `© {year} <your site name>` and how this site was built using umejs and umejs-momiji. However, this may not fully suit your branding. Therefore, it can easily be modified!

## How it works

The footer is rendered using a [partial](https://ume.dantenl.com/v1/config/partials-dir). These are basically a little strings to tell umejs to import content from a different file, either one defined by a theme, or from the user. If a theme tries to call a partial, but that same name has been defined by the user, the one made by the user takes priority. This mechanic allows you to create a custom footer!


## How to define a custom footer

To define a custom footer, you need to create a directory in which to store the new HTML file. This can be set using the `partialsDir` option in the umejs configuration. Inside this directory, create file named `footer.ume.html`. This means your file tree would look something like this:

```
.
├── content/
│   └── index.md
├── partials/
│   └── footer.ume.html
├── package.json
└── index.js  
```

Inside your umejs config, you will want to define it as well with something like this:

```js
const umeConfig = ume({
    partialsDir: path.join(__dirname, 'partials')
})
```

> [!TIP]
> To copy this exact code, you also need to import `path` as well. For full details on how to do that, please check the [Getting started](http://localhost:9420/getting-started) page!

To then change your footer, simply modify the `footer.ume.html` file, to something like this for example:

```html
<footer class="footer">
    <p>&copy; \{year} \{siteTitle}</p>
    <p>
        made using
        <a href="https://ume.dantenl.com" target="_blank" rel="noopener noreferrer">umejs</a>
        using umejs-momiji as theme
    </p>
    <p>don't eat your computer mouse.</p>
</footer>

```