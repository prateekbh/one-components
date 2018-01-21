import MaterialElement from '../../material-element';
import style from "@material/button/dist/mdc.button.css";

class OneButton extends MaterialElement {
  // Attributes inside this array will be check for boolean value true
  // and will be converted to mdc classes
  static get mdcProps_() {
    return ["dense", "raised", "compact", "unelevated", "stroked"]
  }

  static get observedAttributes() {
    return [...OneButton.mdcProps_, 'disabled', 'ripple'];
  }

  constructor(){
    super('button');
  }

  connectedCallback(){
    this.renderDom_();
    this.control = this.shadowRoot.querySelector('.mdc-button');
    super.attachRipple();
    this.bypassDOMEvents_(this.control, ['click']);
  }

  get mdcProps() {
    return OneButton.mdcProps_;
  }

  buildDom_({classes}) {
    return `<style>${style}</style><button class='${classes}' ${this.nativeAttributes_.join(' ')}><slot></slot></button>`
  }

}

customElements.define('one-button', OneButton, {extends: 'button'});