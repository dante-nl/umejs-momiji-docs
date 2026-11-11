---
title: 'Customising the sidebar'
---

# Customising the sidebar

The sidebar is a crucial list for any documentation website. It shows all the different articles that the site has to offer.

red-maple automatically builds one for you, but it may not be exactly how you want it. It may be the wrong order or perhaps it includes too many pages. However, do not fret, as the sidebar can easily be modified!

> [!TIP]
> To rebuild the sidebar, simply stop the server and start it up again! All changes will then be reflected.

## How does it work?

By default, the theme takes a look at your file structure and then puts all Markdown files and folders in a tree, sorts it alphabetically and then displays it back as a sidebar. However, it also reads the contents of each file it tries to read each file for any preferences you may have.

## How to change the behaviour?

Quit easy! Let's go over some things you may be interested in changing!

### The article names

Easy! Inside of each Markdown file, simply define a `title`! This will be read when the sidebar is being built and will then be reflected inside the sidebar. Instead of taking the file name, it will just take your title.

Here's an example of how that may look like:

```md
---
# /content/cheese.md
title: 'How to eat cheese'
---

# Cheese eating: how does one partake?

1. open mouth
2. put cheese in
3. chew.
```

### Hiding a page

Some pages aren't that convenient to have in your sidebar. Such as the `404.md` file which can be used when a user visits a non-existant page within your documentation site. To do so, simply add the `sidebar_exclude` value to your frontmatter like so:

```md
---
# /content/404.md
sidebar_exclude: true
---

# 404. ):
```

### Changing the order

Changing the order, just like everything else so far, is done via the frontmatter variables. The higher the number, the later it will appear inside the sidebar. The lower the number, the higher it will appear in your sidebar.

It can be changed like so:

```md
---
sidebar_order: 999
# a high number like this will likely place it at the bottom!
---

Lorem ipsum dolor sit amet.
```

### Modifying a category

It's a tad bit more complicated, but very doable. Every folder can have an `index.md`. From there, its parent folder can be modified using the same frontmatter that was used to change the title in the previous section.

From the `index.md`, you can change:

- the title of the folder
- the position in the sidebar
- whether or not to show the `index.md` itself in the sidebar

On this documentation site, the `index.md` files generally stayed empty. They were only used to customise the categories.

Here's an example `index.md` in a file structure like the following:

```
.
├── content/
│   ├── index.md
│   └── cheeses/
│       ├── french/
│       │   └── index.md
│       └── dutch/
│           └── index.md
├── package.json
└── index.js
```

We'll take a look at `/content/cheeses/dutch/index.md`:

```md
---
title: 'Dutch 🇳🇱'
# the title of the index file as well as the category
sidebar_order: 0
# where this is placed on the sidebar; the higher the number, the lower it is placed
sidebar_exclude: false
# whether or not to show the index file in the sidebar
---

# Dutch cheeses.
```

> [!TIP]
> When using `sidebar_exclude` to hide an `index.md` file from the sidebar, please note that if there are no other files in the folder, the entire folder will be hidden!
