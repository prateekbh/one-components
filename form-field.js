import MaterialElement from './material-element';

const style = `.mdc-form-field{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:400;letter-spacing:.04em;line-height:1.25rem;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87));display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;vertical-align:middle}.mdc-form-field--theme-dark,.mdc-theme--dark .mdc-form-field{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-form-field>label{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;margin-right:auto;padding-left:4px}.mdc-form-field--align-end>label,.mdc-form-field[dir=rtl]>label,[dir=rtl] .mdc-form-field>label{margin-left:auto;padding-right:4px}.mdc-form-field--align-end>label{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.mdc-form-field--align-end[dir=rtl]>label,[dir=rtl] .mdc-form-field--align-end>label{margin-right:auto;padding-left:4px}`;

class OneFormField extends MaterialElement {

  constructor(){
    super('form-field');
  }

  connectedCallback(){
    this.renderDom_();
    this.control = this.shadowRoot.querySelector('.mdc-form-field');
  }

  buildDom_({classes}) {
    return `<style>${style}</style><div class='${classes}' ${this.nativeAttributes_.join(' ')}><slot></slot></div>`
  }

}

customElements.define('one-form-field', OneFormField);