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

---

## Code Examples

Below is a code example of `HTML` using BEM.

### HTML *(BEM)*

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
