import MaterialElement from './material-element';
import {MDCCheckbox} from '@material/checkbox';

const style=``;

class OneCheckbox extends MaterialElement {
  // Attributes inside this array will be check for boolean value true
  // and will be converted to mdc classes
  static get observedAttributes() {
    return ['raised', 'unelevated'];
  }
  constructor(){
    super();
    this.componentName_ = 'checkbox';
  }

  connectedCallback(){
    super.connectedCallback();
    this.MDComponent = new MDCCheckbox(this.shadowRoot);
    this.bypassDOMEvents_(this.shadowRoot.querySelector('.mdc-checkbox__native-control'),
        ['click', 'change']);
  }

  get observedAttributes() {
    return OneCheckbox.observedAttributes;
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

