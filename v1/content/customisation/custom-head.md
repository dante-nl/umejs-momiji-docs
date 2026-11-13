---
title: 'Custom HTML head additions'
sidebar_order: 55
---

# Custom HTML head additions

You can easily add content to your HTML's `<head>` with Momiji, without having to replace the entirety with a custom implementation. This is great for things like:

* Custom CSS styling
* Extra JS code

## How it works

The extra HTML is rendered using a partial. These are basically a little strings to tell umejs to import content from a different file, either one defined by a theme, or from the user. If a theme tries to call a partial, but that same name has been defined by the user, the one made by the user takes priority. 

By (ab)using this, it allows Momiji to create a partial named `customHead.ume.html`, which is an empty file. This empty file is imported in the `<head>` using umejs. But, if this file were to suddenly be created by the user, umejs picks that file instead to include. This will override Momiji's `customHead.ume.html` and then suddenly the `<head>` looks a bit different!

## How to add your custom `<head>` content

To define extra content for your header, you need to create a directory in which to store the new HTML file. This can be set using the `partialsDir` option in the umejs configuration. Inside this directory, create file named `customHead.ume.html`. This means your file tree would look something like this:

```
.
├── content/
│   └── index.md
├── partials/
│   └── customHead.ume.html
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

To then change your footer, simply modify the `customHead.ume.html` file, to something like the following. This will add extra CSS to your page to change the background colour of everyhing to #007aff, a shade of blue.

```html
<!-- partials/customHead.ume.html -->
<style>
    * {
        background: #007aff !important;
    }
</style>
```