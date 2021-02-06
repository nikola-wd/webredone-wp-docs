---
id: scroll-to-section
title: Scroll to section
---

## HTML

```html
<a href="#[SOME_ID_HERE]">scroll to section</a>
```

## SmoothScroll class definition

```js
class SmoothScroll {
  constructor() {
    this.anchors = document.querySelectorAll('[href^="#"]');
    this.init();
  }

  scrollTo(trigger) {
    const yOffset = trigger.dataset.scrollOffset
      ? +trigger.dataset.scrollOffset
      : -80;
    const selector = trigger.getAttribute('href');
    if (!selector) return;

    const toEl = document.querySelector(selector);
    const y = toEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  init() {
    for (let i = 0; i < this.anchors.length; i++) {
      const anchor = this.anchors[i];
      const anchorTarget = anchor.href;
      const scrollTargetSec = document.getElementById(
        `${anchor.href.split('#')[1]}`
      );
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        // if href="#something" not only href="#"
        if (anchorTarget.length > 1 && scrollTargetSec) {
          this.scrollTo(anchor);
        }
      });
    }
  }
}

const scrollToWithoutTrigger = (toElement) => {
  const yOffset = -300;
  const y =
    toElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

export { scrollToWithoutTrigger };

export default SmoothScroll;
```

## SmoothScroll init with

```js
new SmoothScroll();
```
