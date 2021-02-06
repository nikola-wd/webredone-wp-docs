(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return r})),t.d(e,"toc",(function(){return i})),t.d(e,"default",(function(){return d}));var a=t(3),o=t(7),c=(t(0),t(104)),s={id:"doc4",title:"Tabs"},r={unversionedId:"doc4",id:"doc4",isDocsHomePage:!1,title:"Tabs",description:"HTML",source:"@site/docs/doc4.md",slug:"/doc4",permalink:"/webredone-wp-docs/docs/doc4",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc4.md",version:"current",sidebar:"someSidebar",previous:{title:"This is Document Number 3",permalink:"/webredone-wp-docs/docs/doc3"},next:{title:"Powered by MDX",permalink:"/webredone-wp-docs/docs/mdx"}},i=[{value:"HTML",id:"html",children:[]},{value:"SCSS",id:"scss",children:[]},{value:"Tabs.js",id:"tabsjs",children:[]}],l={toc:i};function d(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"html"},"HTML"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},'<div class="tabs-wrap">\n  \x3c!-- Tabs ctrls --\x3e\n  <div class="nav-tab nav">\n    <button type="button" class="tab-anchor activeTab" data-href="panel-0">\n      Linear Economy\n    </button>\n    <button type="button" class="tab-anchor " data-href="panel-1">\n      Circular Economy\n    </button>\n  </div>\n  \x3c!-- nav-tab --\x3e\n\n  \x3c!--\n  <div class="nav-tab nav dropdown">\n    <span class="dropdown-close"></span>\n    <button type="button" class="dropdown-toggle">\n      Enterprise Analytics\n    </button>\n    <div class="dropdown-menu">\n      <button type="button" class="tab-anchor dropdown-item activeTab" data-href="panel-0">\n        Linear Economy\n      </button>\n      <button type="button" class="tab-anchor dropdown-item " data-href="panel-1">\n        Circular Economy\n      </button>\n    </div>{* dd-menu *}\n  </div>{* dropdown *}\n\n  --\x3e\n\n  \x3c!-- Tab panel --\x3e\n  <div class="tab-content">\n    <div class="tab-panel activeTab enter" data-id="panel-0">\n      <div class="tab-panel__content">[CONTENT FOR TAB 1]</div>\n      \x3c!-- content --\x3e\n    </div>\n    \x3c!-- panel --\x3e\n    <div class="tab-panel" data-id="panel-1">\n      <div class="tab-panel__content">[CONTENT FOR TAB 2]</div>\n      \x3c!-- panel-content--\x3e\n    </div>\n    \x3c!-- panel --\x3e\n  </div>\n  \x3c!-- tab-content --\x3e\n</div>\n\x3c!-- tabs-wrap --\x3e\n')),Object(c.b)("h2",{id:"scss"},"SCSS"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scss"},"// TABS\n.tabs-wrap {\n  .nav-tab {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n\n    button {\n      display: inline-flex;\n      text-decoration: none;\n      padding: 10px 15px;\n      font-size: 13px;\n      background: transparent;\n      color: $c-brand--d;\n      border-radius: 50px;\n      outline: none !important;\n      font-weight: 500;\n      cursor: pointer;\n      border: 1px solid transparent;\n      transition: all 0.3s ease-in-out;\n\n      &:hover,\n      &.activeTab {\n        background-color: $c-brand--d;\n        color: #fff;\n      }\n\n      &:not(.activeTab):hover {\n        border-color: $c-brand--d;\n        color: $c-brand--d;\n        background-color: transparent;\n      }\n    }\n  }\n\n  .tab-content {\n    position: relative;\n    margin-top: 10px;\n    min-height: 200px;\n    box-shadow: 0 0 4px rgba(#222, 0.4);\n    transition: height 0.5s linear;\n    overflow: hidden;\n  }\n\n  .tab-panel {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    pointer-events: none;\n    opacity: 0;\n    transition: all 0.3s ease-in-out;\n\n    &.exit {\n      opacity: 0;\n    }\n\n    &.enter {\n      opacity: 1;\n    }\n\n    &__content {\n      position: relative;\n      padding: 20px;\n    }\n\n    &.activeTab {\n      opacity: 1;\n      pointer-events: all;\n      color: white;\n      border-color: $c-brand;\n    }\n  }\n}\n\n@keyframes enter {\n  0% {\n    transform: translateX(-100%);\n  }\n  80% {\n    transform: translateX(0%);\n  }\n}\n\n@keyframes exit {\n  0% {\n    opacity: 1;\n    transform: translateX(0%);\n  }\n  79% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n")),Object(c.b)("h2",{id:"tabsjs"},"Tabs.js"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"class Tabs {\n  constructor(selector) {\n    if (document.querySelectorAll(selector).length) {\n      this.allTabs = document.querySelectorAll(selector);\n      // this.calcHeight = this.calcHeight.bind(this)\n      this.init();\n    }\n  }\n\n  removeAllActiveTabs(activeTabs) {\n    for (let i = 0; i < activeTabs.length; i++) {\n      const prevActiveTab = activeTabs[i];\n      prevActiveTab.classList.remove('activeTab');\n      if (prevActiveTab.classList.contains('tab-panel')) {\n        prevActiveTab.classList.remove('enter');\n      }\n    }\n  }\n\n  onTabClick(event, anchor, parent) {\n    let activeTabs = parent.querySelectorAll('.activeTab');\n\n    // remove previous active classes\n    this.removeAllActiveTabs(activeTabs);\n\n    anchor.classList.add('activeTab');\n    const panelID = anchor.dataset.href;\n    const panel = parent.querySelector(`[data-id=\"${panelID}\"]`);\n\n    for (let i = 0; i < activeTabs.length; i++) {\n      if (activeTabs[i] !== panel) activeTabs[i].classList.add('exit');\n    }\n\n    panel.classList.remove('exit');\n    panel.classList.add('activeTab', 'enter');\n  }\n\n  calcHeight(tab, anchor, onLoad = false) {\n    let tabContent = tab.querySelector('.tab-content'),\n      panel,\n      panelContent;\n    if (onLoad) {\n      panel = tab.querySelector('.tab-panel.activeTab');\n    } else {\n      const panelID = anchor.dataset.href;\n      panel = tab.querySelector(`[data-id=\"${panelID}\"]`);\n    }\n    panelContent = panel.querySelector('.tab-panel__content');\n    tabContent.style.height =\n      panelContent.getBoundingClientRect().height + 'px';\n  }\n\n  init() {\n    this.allTabs.forEach((tabs) => {\n      const allAnchors = [...tabs.querySelectorAll('.tab-anchor')];\n      allAnchors.forEach((anchor) => {\n        this.calcHeight(tabs, anchor, true);\n        anchor.addEventListener('click', (e) => {\n          e.preventDefault();\n          this.calcHeight(tabs, anchor);\n          this.onTabClick(e, anchor, tabs);\n        });\n      });\n    });\n  }\n}\n\nexport default Tabs;\n")))}d.isMDXComponent=!0}}]);