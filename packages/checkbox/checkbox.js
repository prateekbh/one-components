import MaterialElement from '../../material-element';
import {MDCCheckbox} from '@material/checkbox';
import style from "@material/checkbox/dist/mdc.checkbox.min.css";

class OneCheckbox extends MaterialElement {
  // Attributes inside this array will be check for boolean value true
  // and will be converted to mdc classes
  static get observedAttributes() {
    return ['disabled', 'checked', 'indeterminate'];
  }

  constructor(){
    super('checkbox');
  }

  connectedCallback(){
    this.renderDom_();
    this.control = this.shadowRoot.querySelector('.mdc-checkbox');
    this.MDComponent = new MDCCheckbox(this.control);
    this.bypassDOMEvents_(this.control, ['click', 'change']);
    this.updateProperties_();
  }

  set checked(value) {
    this.properties.checked = value;
    this.updateProperties_('checked');
  }

  get checked() {
    return this.MDComponent.checked;
  }

  set indeterminate(value) {
    this.properties.indeterminate = this.hasAttribute('indeterminate');
    this.updateProperties_('indeterminate');
  }

  get indeterminate() {
    return this.MDComponent.indeterminate;
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch(attrName){
      case 'checked':
        this.checked = this.hasAttribute('checked');
      break;
      case 'indeterminate':
        this.indeterminate = newVal;
      break;
      default:
        super.attributeChangedCallback(attrName, oldVal, newVal);
    }
  }

  buildDom_({classes}) {
    return `<style>${style}</style>
        <div class="${classes}">
          <input type="checkbox" class="mdc-checkbox__native-control" ${this.nativeAttributes_.join(' ')}/>
          <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark"
                viewBox="0 0 24 24">
              <path class="mdc-checkbox__checkmark__path"
                    fill="none"
                    stroke="white"
                    d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
            </svg>
            <div class="mdc-checkbox__mixedmark"></div>
          </div>
        </div>`;
  }
}

customElements.define('one-checkbox', OneCheckbox);

