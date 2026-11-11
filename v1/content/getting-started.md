---
title: 'Getting started'
sidebar_order: 2
---

# Getting started

> [!NOTE]
> This tutorial has been made with umejs version `1.4.1` in mind. It may work for newer versions, but for full details on setting up umejs, you should check [their docs](https://ume.dantenl.com).

> [!NOTE]
> This tutorial assumes some basic level of familiarity with Node.js and JavaScript and that you've already got Node installed on your system.

## Creating a new node project

To get started, let's initialise a new project! Inside your projects directory, create a new project, e.g.:

```sh
mkdir documentation-site
cd documentation-site
npm init -y
```

This will give us a file structure like the following:

```
.
└── projects/
    └── documentation-site/
        └── package.json
```

Next, you'll need to choose if you want to write your project as ES module, TypeScript, or CommonJS. We're not going to go into detail on TypeScript in this guide, but generally speaking the code from the ES Module should be transferrable.

This basically boils down to preference. Most modern projects these days are written using TypeScript or ESM. Older Node projects tend to be written in CommonJS. It doesn't matter too much though. The main difference is the way to import stuff. In CommonJS, you use `require()` and in ESM/TS, you use the `import` statement. umejs and umejs-red-maple work great with both!

If you want to use ES, open your favourite text editor and open `package.json`. Change the line where it says `module` to your preference.

```json
{
    "name": "project",
    "version": "1.0.0",
    "main": "index.js",
    // ...
    "type": "module",
    // ^ For ESM/TS
    "type": "commonjs"
    // ^ For CommonJS
}
```

Next, let's install all we need! We'll need Express v5, umejs and of course umejs-red-maple! We can do this by simply running `npm install` like so:

```
npm i express@5 @dantenl/umejs @dantenl/umejs-red-maple
```

## Initialising umejs

To get started with umejs, we need to create our `index.js` file. This file should look something like this:

```js
// index.js

// For ESM:
// Comment this out if you're on CommonJS!
import express from 'express';
import { default as ume } from '@dantenl/umejs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// For CommonJS:
// Comment this out if you're on ESM/TS!
const express = require('express');
const ume = require('@dantenl/umejs');
const path = require('path');
```

From now on, we'll assume you have this in your `index.js` file and we won't include it anymore.

Next, we'll need to actually create an umejs instance:

```js
// --- Initialise Express ---
const app = express();
const PORT = 3000;

// --- Initialise umejs ---
const umeConfig = ume({
    contentDir: path.join(__dirname, 'content'),
    themes: ['@dantenl/umejs-red-maple'],
    // ! ^crucial^ !
});

// --- Set up the umejs middleware ---
app.use('/docs/{*slug}', umeConfig);

// --- Get the server running ---
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

Next, ensure you have a file structure like this:

```
.
└── projects/
    └── documentation-site/
        ├── content/
        │   └── index.md
        ├── package.json
        └── index.js
```

This will require creating a directory named `content`. This is where you will place the Markdown files from which your page gets built.

It's now possible to start your project! Simply do `node index.js` or `npm start` if you set that up and your site should be available at [localhost:3000/docs/](http://localhost:3000/docs/)!
