---
id: doc4
title: Tabs
---

## HTML

```html
<div class="tabs-wrap">
  <!-- Tabs ctrls -->
  <div class="nav-tab nav">
    <button type="button" class="tab-anchor activeTab" data-href="panel-0">
      [TAB 1 TOGGLE LABEL]
    </button>
    <button type="button" class="tab-anchor " data-href="panel-1">
      [TAB 2 TOGGLE LABEL]
    </button>
  </div>
  <!-- nav-tab -->

  <!--
  <div class="nav-tab nav dropdown">
    <span class="dropdown-close"></span>
    <button type="button" class="dropdown-toggle">
      [TAB 1 TOGGLE LABEL]
    </button>
    <div class="dropdown-menu">
      <button type="button" class="tab-anchor dropdown-item activeTab" data-href="panel-0">
         [TAB 1 TOGGLE LABEL]
      </button>
      <button type="button" class="tab-anchor dropdown-item " data-href="panel-1">
        [TAB 2 TOGGLE LABEL]
      </button>
    </div>{* dd-menu *}
  </div>{* dropdown *}

  -->

  <!-- Tab panel -->
  <div class="tab-content">
    <div class="tab-panel activeTab enter" data-id="panel-0">
      <div class="tab-panel__content">[CONTENT FOR TAB 1]</div>
      <!-- content -->
    </div>
    <!-- panel -->
    <div class="tab-panel" data-id="panel-1">
      <div class="tab-panel__content">[CONTENT FOR TAB 2]</div>
      <!-- panel-content-->
    </div>
    <!-- panel -->
  </div>
  <!-- tab-content -->
</div>
<!-- tabs-wrap -->
```

## SCSS

```scss
// TABS
.tabs-wrap {
  .nav-tab {
    list-style: none;
    margin: 0;
    padding: 0;

    button {
      display: inline-flex;
      text-decoration: none;
      padding: 10px 15px;
      font-size: 13px;
      background: transparent;
      color: $c-brand--d;
      border-radius: 50px;
      outline: none !important;
      font-weight: 500;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.3s ease-in-out;

      &:hover,
      &.activeTab {
        background-color: $c-brand--d;
        color: #fff;
      }

      &:not(.activeTab):hover {
        border-color: $c-brand--d;
        color: $c-brand--d;
        background-color: transparent;
      }
    }
  }

  .tab-content {
    position: relative;
    margin-top: 10px;
    min-height: 200px;
    box-shadow: 0 0 4px rgba(#222, 0.4);
    transition: height 0.5s linear;
    overflow: hidden;
  }

  .tab-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
    opacity: 0;
    transition: all 0.3s ease-in-out;

    &.exit {
      opacity: 0;
    }

    &.enter {
      opacity: 1;
    }

    &__content {
      position: relative;
      padding: 20px;
    }

    &.activeTab {
      opacity: 1;
      pointer-events: all;
      color: white;
      border-color: $c-brand;
    }
  }
}

@keyframes enter {
  0% {
    transform: translateX(-100%);
  }
  80% {
    transform: translateX(0%);
  }
}

@keyframes exit {
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  79% {
    opacity: 1;
  }
  80% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
```

## Tabs.js

```js
class Tabs {
  constructor(selector) {
    if (document.querySelectorAll(selector).length) {
      this.allTabs = document.querySelectorAll(selector);
      // this.calcHeight = this.calcHeight.bind(this)
      this.init();
    }
  }

  removeAllActiveTabs(activeTabs) {
    for (let i = 0; i < activeTabs.length; i++) {
      const prevActiveTab = activeTabs[i];
      prevActiveTab.classList.remove('activeTab');
      if (prevActiveTab.classList.contains('tab-panel')) {
        prevActiveTab.classList.remove('enter');
      }
    }
  }

  onTabClick(event, anchor, parent) {
    let activeTabs = parent.querySelectorAll('.activeTab');

    // remove previous active classes
    this.removeAllActiveTabs(activeTabs);

    anchor.classList.add('activeTab');
    const panelID = anchor.dataset.href;
    const panel = parent.querySelector(`[data-id="${panelID}"]`);

    for (let i = 0; i < activeTabs.length; i++) {
      if (activeTabs[i] !== panel) activeTabs[i].classList.add('exit');
    }

    panel.classList.remove('exit');
    panel.classList.add('activeTab', 'enter');
  }

  calcHeight(tab, anchor, onLoad = false) {
    let tabContent = tab.querySelector('.tab-content'),
      panel,
      panelContent;
    if (onLoad) {
      panel = tab.querySelector('.tab-panel.activeTab');
    } else {
      const panelID = anchor.dataset.href;
      panel = tab.querySelector(`[data-id="${panelID}"]`);
    }
    panelContent = panel.querySelector('.tab-panel__content');
    tabContent.style.height =
      panelContent.getBoundingClientRect().height + 'px';
  }

  init() {
    this.allTabs.forEach((tabs) => {
      const allAnchors = [...tabs.querySelectorAll('.tab-anchor')];
      allAnchors.forEach((anchor) => {
        this.calcHeight(tabs, anchor, true);
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          this.calcHeight(tabs, anchor);
          this.onTabClick(e, anchor, tabs);
        });
      });
    });
  }
}

export default Tabs;
```
