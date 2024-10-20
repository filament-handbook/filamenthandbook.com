# Boilerplate for static pages using TailwindCSS and AlpineJS

A boilerplate to create a simple static HTML page (e.g. a landing page) ready to use with all the TailwindCSS and AlpineJS superpowers.

## What is included

- TailwindCSS installed as PostCSS plugin 
- [TailwindCSS Forms Plugin](https://github.com/tailwindlabs/tailwindcss-forms) - basic reset for form styles that makes form elements easy to override with utilities 
- AlpineJS
- Basic HTML template

## Usage

To get started, press the "Use this template" button at the top of this repo to create a new repo with the contents of this repository.

Add your content on `/public/index.html`.

Add CSS in `/src/styles.css` and scripts in `/src/scripts/scripts.js`.

### Developing

To create the CSS classes in `/public/css/styles.css` and the scripts on `/public/js` diretory run:

```bash
npm run dev
```

To watch for changes while editing the page run:

```bash
npm run watch
```

### Building CSS and Scripts for deploy

To build and minify CSS and JS scripts on `/public` directory for deploy run:

```bash
npm run build
```

## What should be deployed

The files on `/public` directory are the files that should be deployed.
