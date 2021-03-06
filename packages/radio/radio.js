import MaterialElement from '../../material-element';
import {MDCRadio} from '@material/radio';

const style=`@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:1}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:1}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:1}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:1}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-radio{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent;display:inline-block;position:relative;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:40px;height:40px;padding:10px;cursor:pointer;will-change:opacity,transform,border-color,background-color,color}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.54);border-color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))}.mdc-radio--theme-dark .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-theme--dark .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:hsla(0,0%,100%,.7);border-color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#ff4081;border-color:var(--mdc-theme-secondary,#ff4081)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{background-color:#ff4081;background-color:var(--mdc-theme-secondary,#ff4081)}.mdc-radio .mdc-radio__background:before{background-color:#ff4081}@supports not (-ms-ime-align:auto){.mdc-radio .mdc-radio__background:before{background-color:var(--mdc-theme-secondary,#ff4081)}}.mdc-radio:after,.mdc-radio:before{position:absolute;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;pointer-events:none;content:"";background-color:rgba(255,64,129,.14);opacity:0}@supports (background-color:color(green a(10%))){.mdc-radio:after,.mdc-radio:before{background-color:color(var(--mdc-theme-secondary,#ff4081) a(14%))}}.mdc-radio:not(.mdc-ripple-upgraded):active:after,.mdc-radio:not(.mdc-ripple-upgraded):focus:before,.mdc-radio:not(.mdc-ripple-upgraded):hover:before{-webkit-transition-duration:85ms;transition-duration:85ms;opacity:.6}.mdc-radio.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-radio.mdc-ripple-upgraded--background-active-fill:before{-webkit-transition-duration:.12s;transition-duration:.12s;opacity:1}.mdc-radio.mdc-ripple-upgraded:after{opacity:0}.mdc-radio.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards;animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards}.mdc-radio.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-animation:83ms mdc-ripple-fg-opacity-out;animation:83ms mdc-ripple-fg-opacity-out;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-radio:after,.mdc-radio:before{top:0%;left:0%;width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded:before{top:0%;left:0%;width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded--unbounded:before,.mdc-radio.mdc-ripple-upgraded:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-radio.mdc-ripple-upgraded--unbounded:before{top:var(--mdc-ripple-top,25%);left:var(--mdc-ripple-left,25%);width:var(--mdc-ripple-fg-size,50%);height:var(--mdc-ripple-fg-size,50%)}.mdc-radio.mdc-ripple-upgraded:after{top:0;left:0;width:var(--mdc-ripple-fg-size,50%);height:var(--mdc-ripple-fg-size,50%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__background:before{content:none}.mdc-radio__background{display:inline-block;position:absolute;left:10px;-webkit-box-sizing:border-box;box-sizing:border-box;width:50%;height:50%}.mdc-radio__background:before{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:opacity .12s cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform .12s cubic-bezier(.4,0,.6,1) 0ms;transition:opacity .12s cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform .12s cubic-bezier(.4,0,.6,1) 0ms;transition:opacity .12s cubic-bezier(.4,0,.6,1) 0ms,transform .12s cubic-bezier(.4,0,.6,1) 0ms;transition:opacity .12s cubic-bezier(.4,0,.6,1) 0ms,transform .12s cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform .12s cubic-bezier(.4,0,.6,1) 0ms;opacity:0;pointer-events:none;content:""}.mdc-radio__background:before,.mdc-radio__outer-circle{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%}.mdc-radio__outer-circle{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:border-color .12s cubic-bezier(.4,0,.6,1) 0ms;transition:border-color .12s cubic-bezier(.4,0,.6,1) 0ms;border-width:2px;border-style:solid}.mdc-radio__inner-circle{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:background-color .12s cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform .12s cubic-bezier(.4,0,.6,1) 0ms;transition:background-color .12s cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform .12s cubic-bezier(.4,0,.6,1) 0ms;transition:transform .12s cubic-bezier(.4,0,.6,1) 0ms,background-color .12s cubic-bezier(.4,0,.6,1) 0ms;transition:transform .12s cubic-bezier(.4,0,.6,1) 0ms,background-color .12s cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform .12s cubic-bezier(.4,0,.6,1) 0ms;border-radius:50%}.mdc-radio__inner-circle,.mdc-radio__native-control{position:absolute;top:0;left:0;width:100%;height:100%}.mdc-radio__native-control{margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{-webkit-transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .12s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .12s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms,transform .12s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms,transform .12s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .12s cubic-bezier(0,0,.2,1) 0ms}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{-webkit-transition:border-color .12s cubic-bezier(0,0,.2,1) 0ms;transition:border-color .12s cubic-bezier(0,0,.2,1) 0ms}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{-webkit-transition:background-color .12s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .12s cubic-bezier(0,0,.2,1) 0ms;transition:background-color .12s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .12s cubic-bezier(0,0,.2,1) 0ms;transition:transform .12s cubic-bezier(0,0,.2,1) 0ms,background-color .12s cubic-bezier(0,0,.2,1) 0ms;transition:transform .12s cubic-bezier(0,0,.2,1) 0ms,background-color .12s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .12s cubic-bezier(0,0,.2,1) 0ms}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{-webkit-transform:scale(.5);transform:scale(.5);-webkit-transition:background-color .12s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .12s cubic-bezier(0,0,.2,1) 0ms;transition:background-color .12s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .12s cubic-bezier(0,0,.2,1) 0ms;transition:transform .12s cubic-bezier(0,0,.2,1) 0ms,background-color .12s cubic-bezier(0,0,.2,1) 0ms;transition:transform .12s cubic-bezier(0,0,.2,1) 0ms,background-color .12s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .12s cubic-bezier(0,0,.2,1) 0ms}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.26)}.mdc-radio--theme-dark .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio--theme-dark [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle,.mdc-theme--dark .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,.mdc-theme--dark [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:hsla(0,0%,100%,.3)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle{background-color:rgba(0,0,0,.26)}.mdc-radio--theme-dark .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio--theme-dark [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-theme--dark .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mdc-theme--dark [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle{background-color:hsla(0,0%,100%,.3)}.mdc-radio__native-control:focus+.mdc-radio__background:before{-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .12s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .12s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms,transform .12s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .12s cubic-bezier(0,0,.2,1) 0ms,transform .12s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .12s cubic-bezier(0,0,.2,1) 0ms;opacity:.26}`;

const radioArray = [];

class OneRadio extends MaterialElement {

  constructor(){
    super('radio');
  }

  connectedCallback(){
    this.renderDom_();
    this.control = this.shadowRoot.querySelector('.mdc-radio__native-control');
    this.MDComponent = new MDCRadio(this.shadowRoot.querySelector('.mdc-radio'))
    this.bypassDOMEvents_(this.control, ['click', 'change']);
    this.updateProperties_();
    radioArray.push(this);
  }

  set checked(value) {
    this.properties.checked = value;
    this.updateProperties_('checked');
  }

  get checked() {
    radioArray.forEach(radio => {
      if(radio !== this) {
        radio.checked = false;
      }
    });
    return this.MDComponent.checked;
  }

  set value(value) {
    this.properties.value = value;
    this.updateProperties_('value');
  }

  get value() {
    return this.MDComponent.value;
  }

  set disabled(value) {
    this.properties.disabled = value;
    this.updateProperties_('disabled');
  }

  get disabled() {
    return this.MDComponent.disabled;
  }

  buildDom_({classes}) {
    return `<style>${style}</style>
        <div class="${classes}">
          <input class="mdc-radio__native-control" type="radio" ${this.nativeAttributes_.join(' ')}/>
          <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle" ></div>
            <div class="mdc-radio__inner-circle" ></div>
          </div>
        </div>`;
  }
}

customElements.define('one-radio', OneRadio);

