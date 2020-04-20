---
order: 2
title: HTML
label: HTML
status: draft
---

The [BEM](http://getbem.com) methodology is used for building components.
BEM stands for “Block, Element, Modifier”. This principle helps naming
components in consistent ways.

Blocks are the top-level component name. Elements are inside the component and
are prefixed with the component name. Modifiers can be used to allow different
styling of each component.

A pragmatic approach should be taken when writing the markup with BEM. Not everything
will need a specific class, *child combinator* and *adjacent sibling combinator* selectors
could be used to target the required elements.

---

## Code Examples

Below is a code example of `HTML` using BEM.

### Standard

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

### Pragmatic

```html
<nav class="navigation">
    <ul>
        <li class="navigation__item">
            <a href="#"></a>
        </li>
        <li class="navigation__item navigation__item--active">
            <a href="#"></a>
        </li>
        <li class="navigation__item">
            <a href="#"></a>
        </li>
    </ul>
</nav>
```
