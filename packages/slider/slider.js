import MaterialElement from '../../material-element';
import { MDCSlider } from "@material/slider";


const style = `@-webkit-keyframes mdc-slider-emphasize{0%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(.85);transform:scale(.85)}to{-webkit-transform:scale(.571);transform:scale(.571)}}@keyframes mdc-slider-emphasize{0%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(.85);transform:scale(.85)}to{-webkit-transform:scale(.571);transform:scale(.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;-ms-touch-action:pan-x;touch-action:pan-x;-webkit-tap-highlight-color:transparent}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#ff4081;background-color:var(--mdc-theme-secondary,#ff4081)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{background-color:rgba(255,64,129,.26)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container:after,.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker:after{background-color:#ff4081;background-color:var(--mdc-theme-secondary,#ff4081)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#ff4081;fill:var(--mdc-theme-secondary,#ff4081);stroke:#ff4081;stroke:var(--mdc-theme-secondary,#ff4081)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring,.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#ff4081;background-color:var(--mdc-theme-secondary,#ff4081)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container{background-color:hsla(0,0%,60%,.26)}.mdc-slider--disabled .mdc-slider__track-marker-container:after,.mdc-slider--disabled .mdc-slider__track-marker:after{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a;stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component,#fff)}.mdc-slider--theme-dark.mdc-slider--disabled .mdc-slider__track,.mdc-theme--dark .mdc-slider--disabled .mdc-slider__track{background-color:#787878}.mdc-slider--theme-dark.mdc-slider--disabled .mdc-slider__track-container,.mdc-theme--dark .mdc-slider--disabled .mdc-slider__track-container{background-color:hsla(0,0%,47%,.26)}.mdc-slider--theme-dark.mdc-slider--disabled .mdc-slider__track-marker-container:after,.mdc-slider--theme-dark.mdc-slider--disabled .mdc-slider__track-marker:after,.mdc-theme--dark .mdc-slider--disabled .mdc-slider__track-marker-container:after,.mdc-theme--dark .mdc-slider--disabled .mdc-slider__track-marker:after{background-color:#787878}.mdc-slider--theme-dark.mdc-slider--disabled .mdc-slider__thumb,.mdc-theme--dark .mdc-slider--disabled .mdc-slider__thumb{fill:#787878;stroke:#787878;stroke:#333;stroke:var(--mdc-slider-bg-color-behind-component,#333)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track{position:absolute;width:100%;height:100%;-webkit-transform-origin:left top;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{-webkit-transform-origin:right top;transform-origin:right top}.mdc-slider__track-marker-container{display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container:after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{-webkit-box-flex:1;-ms-flex:1;flex:1}.mdc-slider__track-marker:after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child:after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;-webkit-transform:scale(.571);transform:scale(.571);-webkit-transition:fill .1s ease-out,stroke .1s ease-out,-webkit-transform .1s ease-out;transition:fill .1s ease-out,stroke .1s ease-out,-webkit-transform .1s ease-out;transition:transform .1s ease-out,fill .1s ease-out,stroke .1s ease-out;transition:transform .1s ease-out,fill .1s ease-out,stroke .1s ease-out,-webkit-transform .1s ease-out;stroke-width:3.5}.mdc-slider__focus-ring{width:21px;height:21px;-webkit-transition:opacity .26667s ease-out,background-color .26667s ease-out,-webkit-transform .26667s ease-out;transition:opacity .26667s ease-out,background-color .26667s ease-out,-webkit-transform .26667s ease-out;transition:transform .26667s ease-out,opacity .26667s ease-out,background-color .26667s ease-out;transition:transform .26667s ease-out,opacity .26667s ease-out,background-color .26667s ease-out,-webkit-transform .26667s ease-out;border-radius:50%;opacity:0}.mdc-slider__pin{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;-webkit-transform:rotate(-45deg) scale(0) translate(0);transform:rotate(-45deg) scale(0) translate(0);-webkit-transition:-webkit-transform .1s ease-out;transition:-webkit-transform .1s ease-out;transition:transform .1s ease-out;transition:transform .1s ease-out,-webkit-transform .1s ease-out;border-radius:50% 50% 50% 0;z-index:1}.mdc-slider__pin-value-marker{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;font-weight:400;letter-spacing:.08em;line-height:1.25rem;text-decoration:inherit;text-transform:inherit;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{-webkit-transform:scaleX(1);transform:scaleX(1)}.mdc-slider--focus .mdc-slider__thumb{-webkit-animation:mdc-slider-emphasize .26667s linear;animation:mdc-slider-emphasize .26667s linear}.mdc-slider--focus .mdc-slider__focus-ring{-webkit-transform:scale3d(1.55,1.55,1.55);transform:scale3d(1.55,1.55,1.55);opacity:.25}.mdc-slider--disabled{cursor:auto}.mdc-slider--in-transit .mdc-slider__thumb{-webkit-transition-delay:.14s;transition-delay:.14s}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{-webkit-transition:-webkit-transform 80ms ease;transition:-webkit-transform 80ms ease;transition:transform 80ms ease;transition:transform 80ms ease,-webkit-transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{-webkit-transform:scale(0.57143);transform:scale(0.57143)}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{-webkit-transform:rotate(-45deg) scale(1) translate(19px,-20px);transform:rotate(-45deg) scale(1) translate(19px,-20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{-webkit-animation:none;animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}`;

const DISCRETE_SLIDER_MARKUP = '<div class="mdc-slider__pin"><span class="mdc-slider__pin-value-marker" ></span></div>';

class OneSlider extends MaterialElement {
  // Attributes inside this array will be check for boolean value true
  // and will be converted to mdc classes
  static get mdcProps_() {
    return ["indeterminate", "reversed", "discrete"]
  }

  static get observedAttributes() {
    return [...OneSlider.mdcProps_, 'max', 'min', 'value', 'step', 'disabled'];
  }

  constructor(){
    super('slider');
  }

  connectedCallback(){
    /* build the DOM */
    this.renderDom_();
    this.control = this.shadowRoot.querySelector('.mdc-slider');
    this.MDComponent = new MDCSlider(this.control);
    this.bypassDOMEvents_(this.control, ['click']);
    this.addListeners();
    this.updateProperties_();
  }

  get observedAttributes() {
    return OneSlider.observedAttributes;
  }

  get mdcProps() {
    return OneSlider.mdcProps_;
  }

  set min(value) {
    this.properties.min = parseInt(value);
    this.updateProperties_('min');
  }

  get min() {
    return this.MDComponent.min;
  }

  set max(value) {
    this.properties.max = parseInt(value);
    this.updateProperties_('max');
  }

  get max() {
    return this.MDComponent.max;
  }

  set step(value) {
    this.properties.step = parseInt(value);
    this.updateProperties_('step');
  }

  get step() {
    return this.MDComponent.step;
  }

  set disabled(value) {
    this.properties.disabled =  value;
    this.updateProperties_('disabled');
  }

  get disabled() {
    return this.MDComponent.disabled;
  }

  set value(value) {
    this.properties.value = parseInt(value);
    this.updateProperties_('value');
  }

  get value() {
    return this.MDComponent.value;
  }

  addListeners() {
    this.MDComponent.listen('MDCSlider:input', (e) => {
      this.dispatchEvent(new Event('mdcsliderinput'), e);
    });

    this.MDComponent.listen('MDCSlider:change', (e) => {
      this.dispatchEvent(new Event('mdcsliderchange'), e);
    });
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch(attrName){
      case 'max':
        this.max = newVal;
      break;
      case 'min':
        this.min = newVal;
      break;
      case 'value':
        this.value = newVal;
      break;
      case 'disabled':
        this.disabled = this.hasAttribute('disabled');
      break;
      case 'step':
        this.step = newVal;
      break;
      case 'discrete':
        if (this.hasAttribute('discrete') && oldVal === null) {
          const thumbContainer = this.shadowRoot.querySelector('.mdc-slider__thumb-container');
          if (thumbContainer) {
            thumbContainer.insertAdjacentHTML('afterbegin', DISCRETE_SLIDER_MARKUP);
            /* this attribute addition needs component to be rebuilt */
            this.connectedCallback();
          }
        }
      break;
      default:
        super.attributeChangedCallback(attrName, oldVal, newVal);
    }
  }

  buildDom_({classes}) {
    return `
      <style>${style}</style>
      <div
          role="slider" class='${classes}' ${this.nativeAttributes_.join(' ')} aria-label="Select Value">
        <div class="mdc-slider__track-container">
          <div class="mdc-slider__track"></div>
        </div>
        <div class="mdc-slider__thumb-container">
          ${this.hasAttribute('discrete') ? `${DISCRETE_SLIDER_MARKUP}` : ''}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875" ></circle>
          </svg>
          <div class="mdc-slider__focus-ring" ></div>
        </div>
      </div>`;
  }

}

customElements.define('one-slider', OneSlider);