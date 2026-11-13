---
title: "Index page"
---

# Index page

You may have noticed a fancy [index page](/) when you visited the documentation site. Its header is in the accent colour and the first line of text is a bit bigger than on other pages. That's because that site uses a *slightly* different template from the others! 

Said template has been designed to stand out from the other pages, while not being too different either. Just, slightly different.

## Implementation

To use the index template, simply define it via the frontmatter. It doesn't have to be used on the index page specifically, it can be used on any page you want. Here's an example on how to implement it:

```md
---
_TEMPLATE: 'index'
title: 'Welcome to my site!'
---

# Hey there!

This text is a bit bigger than others.

This is normal sized text.
```

You can try it out by copy pasting this in a new markdown file on your site!