---
title: 'Customising the colours'
---

# Customising the colours

umejs-momiji allows for changing up the colours via the CSS variables! You can change them using for both light mode and dark mode.

## How to change them

It's quite simple! Inside your umejs config object, add a new object called `config`. This is a variable that is sent to themes, helpers, builders and parsers. For example, to change the colours for the primary and accent colours (the main ones to be customised in v1.0), you can do it like this:

```js
const umeConfig = ume({
    themes: ['@dantenl/umejs-momiji'],
    config: {
        colors: {
            light: {
                primary: '#0055ff',
                accent: '#0033aa',
            },
            dark: {
                primary: '#3388ff',
                accent: '#66aaff',
            },
        },
    },

    // ... rest of umejs config
});
```

## Available variables

Here's a list of variables, what they do and their defaults.

```css
:root[data-theme='light'] {
    --text: #1d0c0e; /* text colour */
    --background: #fefbfb; /* background colour */
    --primary: #f1414d; /* primary accent colour; things like link colours */
    --secondary: #e8878e; /* secondary accent colour, unused */
    --accent: #e95d67; /* tertiary accent colour; things like the colour of links when hovered*/

    /* colours for the callouts, background is automatically determined from these basics */
    --callout-note: #0969da;
    --callout-tip: #1a7f37;
    --callout-important: #8250df;
    --callout-warning: #9a6700;
    --callout-caution: #cf222e;

    /* surface is used in search box and light/dark toggle button */
    --surface: color-mix(in srgb, var(--background) 92%, var(--text) 8%);
    --surface-hover: color-mix(in srgb, var(--background) 85%, var(--text) 15%);

    /* border is used for all border colours, e.g. sidebar and code blocks */
    --border: color-mix(in srgb, var(--text) 14%, transparent);
    --border-strong: color-mix(in srgb, var(--text) 28%, transparent);

    /* muted text; used in for example blockquotes and todo items */
    --muted: color-mix(in srgb, var(--text) 62%, var(--background));

    /* shadow; used in the search box mainly */
    --shadow-sm: 0 1px 2px color-mix(in srgb, var(--text) 8%, transparent);
    --shadow-md: 0 4px 12px color-mix(in srgb, var(--text) 10%, transparent);
}

/* dark mode: same basic variables, different values */
:root[data-theme='dark'] {
    --text: #f3e2e4;
    --background: #040101;
    --primary: #be0e1a;
    --secondary: #78171d;
    --accent: #a2161f;

    --callout-note: #58a6ff;
    --callout-tip: #3fb950;
    --callout-important: #a371f7;
    --callout-warning: #d29922;
    --callout-caution: #f85149;

    --surface: color-mix(in srgb, var(--background) 88%, var(--text) 12%);
    --surface-hover: color-mix(in srgb, var(--background) 80%, var(--text) 20%);

    --border: color-mix(in srgb, var(--text) 16%, transparent);
    --border-strong: color-mix(in srgb, var(--text) 30%, transparent);

    --muted: color-mix(in srgb, var(--text) 55%, var(--background));

    --shadow-sm: 0 1px 2px color-mix(in srgb, black 40%, transparent);
    --shadow-md: 0 4px 12px color-mix(in srgb, black 50%, transparent);
}
```
