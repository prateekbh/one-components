import { MDCRipple } from "@material/ripple";
import {setAttribute, getMaterialClass} from './utils';

export default class MaterialElement extends HTMLElement{

  constructor(componentName_) {
    super();

    // This will again be used to add apt classname to the component
    this.componentName_ = componentName_;

    // The final class name given to the dom
    this.classText_ = "";

    this.nativeAttributes_ = [];

    this.properties = {};

    // Attach Shadow dom
    this.attachShadow({mode: 'open'});
  }

  /**
   * Builds the class names based on the mdcProps of the element.
   */
  buildClassName_() {
    this.classText_ = "mdc-" + this.componentName_;
    this.nativeAttributes_ = [];
    const attrs = this.getAttributeNames();
    const observedAttributes = this.mdcProps;
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

  /**
   * Dispatches the the events in the eventsList to the document with a namespace
   * of `mdc-` so that user knows which event is coming from source and which is coming from
   * shadow dom container.
   * e.g. mdc-click.
   * @param {Node} node
   * @param {Array} eventsList
   */
  bypassDOMEvents_(node, eventsList) {
    eventsList.forEach((event) => {
      node.addEventListener(event, (e) => {
        this.dispatchEvent(new Event('mdc' + event), e);
      });
    });
  }

  buildDom_(classes) {
    return `<div class='${classes}'><slot></slot></div>`;
  }

  /**
   * Render the entire dom to the document.
   */
  renderDom_() {
    this.buildClassName_();
    const classes = this.classText_;
    this.shadowRoot.innerHTML = this.buildDom_({classes});
  }

  /**
   * Called everytime when one of the observed attributes is changed.
   */
  attributeChangedCallback(attrName, oldVal, newVal){
    if (this.mdcProps.includes(attrName)) {
      if (this.hasAttribute(attrName)) {
        this.control &&
            this.control.classList.add(`${getMaterialClass(this.componentName_, attrName)}`);
      } else {
        this.control &&
            this.control.classList.remove(`${getMaterialClass(this.componentName_, attrName)}`);
      }
    } else if (attrName == 'ripple' && this.hasAttribute('ripple') && oldVal === null) {
      this.attachRipple();
    } else {
      this.control && setAttribute(this.control, {attrName, attrVal: newVal});
    }
  }

  /**
   * Attaches ripple to `this.control`.
   */
  attachRipple() {
    if (this.hasAttribute('ripple') && this.control) {
      MDCRipple.attachTo(this.control);
    }
  }

  get mdcProps() {
    return [];
  }

  /**
   * Runs through the mdcProps and call the setters on the changed ones.
   */
  updateProperties_() {
    const observedAttributes = this.mdcProps;
    for(const prop in this.properties) {
      if (!observedAttributes.includes(prop) && this.MDComponent) {
        this.MDComponent[prop] = this.properties[prop];
      }
    }
  }
}