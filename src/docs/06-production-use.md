---
order: 6
title: Production Use
status: draft
---
To use the **assets** within your Laravel or Lumen application, you should
require it as a dependency in your `package.json`.

```js
"dependencies": {
    "woodlands-co-uk-components":
        "git+https://github.com/WoodlandsCoUk/components.git"
}
```

After the dependency is installed, the compiled production assets are ready to be
used directly in your application. You can copy the `public` directory in your build step;

```js
mix.copyDirectory('node_modules/woodlands-co-uk-components/public', 'public/')
```

### Optional Configuration

To make use of caching you should compile the production assets
from the component library to your application’s public directory using Laravel Mix.

```js
mix.styles('node_modules/woodlands-co-uk-components/public/css/site.css', 'public/css/site.css')

mix.scripts('node_modules/woodlands-co-uk-components/public/js/manifest.js', 'public/js/manifest.js')
mix.scripts('node_modules/woodlands-co-uk-components/public/js/vendor.js', 'public/js/vendor.js')
mix.scripts('node_modules/woodlands-co-uk-components/public/js/site.js', 'public/js/site.js')
```
