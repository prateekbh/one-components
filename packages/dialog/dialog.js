import MaterialElement from '../../material-element';
import {MDCDialog} from '@material/dialog';
import style from "@material/dialog/dist/mdc.dialog.min.css";

class OneDialog extends MaterialElement {
  constructor(){
    super();
    // This will again be used to add apt classname to the component
    this.componentName_ = 'dialog'
  }

  connectedCallback(){
    this.renderDom_();
    this.control = this.shadowRoot.querySelector('.mdc-dialog');
    this.MDComponent = new MDCDialog(this.control);
    this.updateProperties_();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal);
  }

  buildDom_({classes}) {
    return `<style>${style}</style>
            <aside role="alertdialog" ${this.nativeAttributes_.join(' ')}>
              <div className="mdc-dialog__surface"><slot></slot></div>
              <div className="mdc-dialog__backdrop" />
            </aside>`;
  }
}

class OneDialogHeader extends MaterialElement {
  constructor(){
    super();
    // This will again be used to add apt classname to the component
    this.componentName_ = 'dialog__header'
  }

  connectedCallback(){
    this.renderDom_();
    this.updateProperties_();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal);
  }

  buildDom_({classes}) {
    return `<header ${this.nativeAttributes_.join(' ')}>
              <h2 className="mdc-dialog__header__title"><slot></slot></h2>
            </header>`;
  }
}

class OneDialogBody extends MaterialElement {
  constructor(){
    super();
    // This will again be used to add apt classname to the component
    this.componentName_ = 'dialog__body'
  }

  connectedCallback(){
    this.renderDom_();
    this.updateProperties_();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal);
  }

  buildDom_({classes}) {
    return `<section ${this.nativeAttributes_.join(' ')}><slot></slot></section>`;
  }
}


customElements.define('one-dialog', OneDialog);
customElements.define('one-dialog-header', OneDialogHeader);
customElements.define('one-dialog-body', OneDialogBody);