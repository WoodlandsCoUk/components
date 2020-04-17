---
order: 2
title: SCSS & CSS
label: SCSS & CSS
status: ready
---

[SCSS](https://sass-lang.com/documentation/syntax) is used to manage the component styles.

## BEM

The [BEM](http://getbem.com) methodology is used for building components.

#### HTML

```html
<div class="item">
    <h4 class="item__heading"></h4>
    <p class="item__content"></p>
</div>

<div class="item item--alt">
    <h4 class="item__heading"></h4>
    <p class="item__content"></p>
</div>
```

#### CSS

```css
.item {
    background: green;
}
.item--alt {
    background: red;
}
    .item__heading {
        font-size: 2rem;
    }
    .item__content {
        font-style: italic;
    }
```

## Tailwind

The [Tailwind](https://tailwindcss.com) framework is used for style configuration and SCSS implementation. Only the base is included
and the components must be built manually. The default Tailwind utilities and components are not compiled.
The configuration file can be found at `tailwind.config.js`.

## Icons

* [Simple Icons](https://simpleicons.org) are used for the social media icons.
* [Hamburgers](https://jonsuh.com/hamburgers/) is used for the navigation icon.
