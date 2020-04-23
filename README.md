# Woodlands.co.uk Component Library

Web components for Woodlands.co.uk built using [Fractal](https://fractal.build).

---

To use the project locally you will need install [Node.js](https://nodejs.org).
Modules are then installed using `npm install`.

## Development

### Preview

The following command while compile all required assets and a local node server to preview
the component library. Follow the links in the command line output to view the website.

```cli
npm start
```

### Compile assets

When updating the SASS and JavaScript source files you will need to re-build them for the
component library to reflect the changes. This is done using;

```cli
npm run build
```

Alternatively, you can run the following which will dynamically build the files when they
are saved and automatically refresh the component library page you’re viewing.

```cli
npm run watch
```

---

## Deployment

The component library can be built and deployed to any static hosting. Built files are stored
in the `/build` folder and ignored by version control. You can build these files using;

```cli
npm run build
```

To deploy the project to GitHub pages hosted version, you can run the following;

```cli
npm run deploy
```

---

## Production

The component library should be included in your production development project using `npm` by
including the following in your `package.json`;


```js
"dependencies": {
    "woodlands-co-uk-components": "git+https://github.com/WoodlandsCoUk/components.git"
}
```

After the dependency is installed, the compiled production assets are ready to be
used directly in your project. You can copy the `public` directory in your build step.
The path to the files are;

```
node_modules/woodlands-co-uk-components/public
```
