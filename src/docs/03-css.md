---
order: 3
title: SCSS & CSS
label: SCSS & CSS
status: draft
---

The style of the project is managed using [SCSS](https://sass-lang.com/documentation/syntax).
This allows each component to define its own styles and keep styles organised.

The [Tailwind](https://tailwindcss.com) framework is used for style configuration and SCSS implementation. Only the base is included
and the components must be built manually. The default Tailwind utilities and components are not compiled.
The configuration file can be found at `tailwind.config.js`.

Using the BEM methodology, selectors should be written using their component block, element and modifier.
Selector specificity should be kept to a minimum. `SCSS` allows nesting of selectors and can be used to keep
specficity low and make use of the BEM naming convention.

---

## Code Examples

Below are a few code examples of `SCSS` using Tailwind.

### SCSS *(with Tailwind)*

```scss
.item {
    @apply bg-brand-red;

    &--alt {
        @apply bg-brand-green;
    }

    &__heading {
        @apply text-2xl;
    }

    &__content {
        @apply italic;
    }
}
```

### CSS *(Compiled Output)*

```css
.item {
    background: #c30028;
}
.item--alt {
    background: #02532f;
}
    .item__heading {
        font-size: 1.5rem;
    }
    .item__content {
        font-style: italic;
    }
```

---

## Icons

* [Simple Icons](https://simpleicons.org) – social media icons.
* [Hamburgers](https://jonsuh.com/hamburgers/) – navigation icon.
