import { MDCRipple } from "@material/ripple";
import {setAttribute, getMaterialClass} from './utils';

export default class MaterialElement extends HTMLElement{

  constructor() {
    super();

    // This will again be used to add apt classname to the component
    this.componentName_ = "";

    // The final class name given to the dom
    this.classText_ = "";

    this.nativeAttributes_ = [];

    // Attach Shadow dom
    this.attachShadow({mode: 'open'});
  }

  // Build the className
  buildClassName_() {
    this.classText_ = "mdc-" + this.componentName_;
    this.nativeAttributes_ = [];
    const attrs = this.getAttributeNames();
    const observedAttributes = this.mdcProps || [];
    for (let attrKey in attrs) {
      if (attrs.hasOwnProperty(attrKey)) {
        const attr = attrs[attrKey];
        if (observedAttributes.includes(attr)) {
          this.classText_ += ` ${getMaterialClass(this.componentName_, attr)}`;
        } else {
          this.nativeAttributes_.push(`${attr}='${this.getAttribute(attr)}'`);
        }
      }
    }
  }

  bypassDOMEvents_(node, eventsList) {
    eventsList.forEach((event) => {
      this.addEventListener(event, (e) => {
        e.preventDefault();
      });

      node.addEventListener(event, (e) => {
        this.dispatchEvent(new Event('one' + event), e);
      });
    });
  }

  buildDom_(classes) {
    return `<div class='${classes}'><slot></slot></div>`;
  }

  renderDom_() {
    this.buildClassName_();
    const classes = this.classText_;
    this.shadowRoot.innerHTML = this.buildDom_({classes});
    this.componentRebuilt_ && this.componentRebuilt_();
  }

  connectedCallback() {
    this.renderDom_();
  }

  attributeChangedCallback(attrName, oldVal, newVal){
    if (this.mdcProps.includes(attrName)) {
      if (this.hasAttribute(attrName)) {
        this.control &&
            this.control.classList.add(`${getMaterialClass(this.componentName_, attrName)}`);
      } else {
        this.control &&
            this.control.classList.remove(`${getMaterialClass(this.componentName_, attrName)}`);
      }
    } else {
      this.control && setAttribute(this.control, {attrName, attrVal: newVal});
    }
  }

  attachRipple(element) {
    if (this.hasAttribute('ripple')) {
      MDCRipple.attachTo(this.control);
    }
  }
}