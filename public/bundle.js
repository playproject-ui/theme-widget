
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
'use strict';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "html {\n    font-size: 65%;\n}\nbody {\n    font-size: 1.6rem;\n    color: #333;\n    background-color: #f2f2f2;\n}\n.style_btn__1GBAn {\n    border: none;\n    border-radius: 24px;\n    padding: 8px 24px;\n    font-size: 1.6rem;\n    color: var(--button-default-color);\n    background-color: var(--button-default-bg);\n    transition: background-color 0.25s, color 0.25s ease-in-out;\n}\n\n.style_btn__1GBAn:hover {\n    color: var(--button-default-color);\n    background-color: rgba(0, 166, 255, 1);\n}";
var style = {"btn":"style_btn__1GBAn"};
styleInject(css_248z$1);

function button() {
    const el = `<button class=${style.btn}>click me</button>`;
    return el
}

var css_248z = ":root {\n    --button-default-color: #ffffff;\n    --button-default-bg: #000000;\n}";
styleInject(css_248z);

function app() {
    const name = 'John Doe';
    const head = `<h1>Hello ${name}!</h1>`;
    const btn1 = button();
    const el = `<div>
        ${head}
        ${btn1}
    </div>`;

    return el
}


document.body.innerHTML = app();
