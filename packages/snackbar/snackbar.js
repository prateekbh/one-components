import MaterialElement from '../../material-element';
import { MDCSnackbar } from "@material/snackbar";


const style = `.mdc-snackbar{display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;bottom:0;left:50%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:24px;padding-left:24px;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%);-webkit-transition:-webkit-transform .25s cubic-bezier(.4,0,1,1) 0ms;transition:-webkit-transform .25s cubic-bezier(.4,0,1,1) 0ms;transition:transform .25s cubic-bezier(.4,0,1,1) 0ms;transition:transform .25s cubic-bezier(.4,0,1,1) 0ms,-webkit-transform .25s cubic-bezier(.4,0,1,1) 0ms;background-color:#323232;pointer-events:none;will-change:transform}.mdc-snackbar--theme-dark .mdc-snackbar,.mdc-theme--dark .mdc-snackbar{background-color:#fafafa}@media (max-width:599px){.mdc-snackbar{left:0;width:100%;-webkit-transform:translateY(100%);transform:translateY(100%)}}@media (min-width:600px){.mdc-snackbar{min-width:288px;max-width:568px;border-radius:2px}}@media (min-width:600px){.mdc-snackbar--align-start{left:24px;right:auto;bottom:24px;-webkit-transform:translateY(200%);transform:translateY(200%)}.mdc-snackbar--align-start[dir=rtl],[dir=rtl] .mdc-snackbar--align-start{left:auto;right:24px}}@media (max-width:599px){.mdc-snackbar--align-start{bottom:0;left:0;width:100%;-webkit-transform:translateY(100%);transform:translateY(100%)}}.mdc-snackbar--active{-webkit-transform:translate(0);transform:translate(0);-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.2,1) 0ms;transition:-webkit-transform .25s cubic-bezier(0,0,.2,1) 0ms;transition:transform .25s cubic-bezier(0,0,.2,1) 0ms;transition:transform .25s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .25s cubic-bezier(0,0,.2,1) 0ms;pointer-events:auto}.mdc-snackbar--active:not(.mdc-snackbar--align-start){-webkit-transform:translate(-50%);transform:translate(-50%)}@media (max-width:599px){.mdc-snackbar--active:not(.mdc-snackbar--align-start){bottom:0;left:0;width:100%;-webkit-transform:translate(0);transform:translate(0)}}.mdc-snackbar__action-wrapper{padding-left:24px;padding-right:0}.mdc-snackbar__action-wrapper[dir=rtl],[dir=rtl] .mdc-snackbar__action-wrapper{padding-left:0;padding-right:24px}.mdc-snackbar--action-on-bottom{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.mdc-snackbar--action-on-bottom .mdc-snackbar__text{margin-right:inherit}.mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper{margin:-12px 0 8px auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper[dir=rtl],.mdc-snackbar__text,[dir=rtl] .mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper{margin-left:0;margin-right:auto}.mdc-snackbar__text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:400;letter-spacing:.04em;line-height:1.25rem;text-decoration:inherit;text-transform:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:48px;-webkit-transition:opacity .3s cubic-bezier(.4,0,1,1) 0ms;transition:opacity .3s cubic-bezier(.4,0,1,1) 0ms;opacity:0;color:#fff}.mdc-snackbar[dir=rtl] .mdc-snackbar__text,[dir=rtl] .mdc-snackbar .mdc-snackbar__text{margin-left:auto;margin-right:0}.mdc-snackbar--theme-dark .mdc-snackbar__text,.mdc-theme--dark .mdc-snackbar__text{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))}@media (min-width:600px){.mdc-snackbar__text{padding-left:0;padding-right:24px}.mdc-snackbar__text[dir=rtl],[dir=rtl] .mdc-snackbar__text{padding-left:24px;padding-right:0}}.mdc-snackbar--multiline .mdc-snackbar__text{height:80px}.mdc-snackbar--multiline.mdc-snackbar--action-on-bottom .mdc-snackbar__text{margin:0}.mdc-snackbar__action-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:500;letter-spacing:.04em;line-height:2.25rem;text-decoration:none;text-transform:uppercase;color:#ff4081;color:var(--mdc-theme-secondary,#ff4081);padding:0;-webkit-transition:opacity .3s cubic-bezier(.4,0,1,1) 0ms;transition:opacity .3s cubic-bezier(.4,0,1,1) 0ms;border:none;outline:none;background-color:transparent;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;visibility:hidden}.mdc-snackbar--theme-dark .mdc-snackbar__action-button,.mdc-theme--dark .mdc-snackbar__action-button{color:#3f51b5;color:var(--mdc-theme-primary,#3f51b5)}.mdc-snackbar__action-button:hover{cursor:pointer}.mdc-snackbar__action-button::-moz-focus-inner{border:0}.mdc-snackbar__action-button:not([aria-hidden]){visibility:inherit}.mdc-snackbar--active .mdc-snackbar__action-button:not([aria-hidden]),.mdc-snackbar--active .mdc-snackbar__text{-webkit-transition:opacity .3s cubic-bezier(.4,0,1,1) 0ms;transition:opacity .3s cubic-bezier(.4,0,1,1) 0ms;opacity:1}`;

class OneSnackbar extends MaterialElement {
  constructor(){
    super('snackbar');
  }

  connectedCallback(){
    this.renderDom_();
    this.control = this.shadowRoot.querySelector('.mdc-snackbar');
    this.MDComponent = new MDCSnackbar(this.control);
    this.updateProperties_();
  }

  set dismissesOnAction(value) {
    this.properties.dismissesOnAction = value;
    this.updateProperties_('dismissesOnAction');
  }

  get dismissesOnAction() {
    return this.MDComponent.dismissesOnAction;
  }

  show(data) {
    this.MDComponent.show(data);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch(attrName){
      case 'dismissesOnAction':
        this.dismissesOnAction = newVal;
      break;
      default:
        super.attributeChangedCallback(attrName, oldVal, newVal);
    }
  }

  buildDom_({classes}) {
    return `
      <style>${style}</style>
      <div
          aria-live="assertive"
          aria-atomic="true"
          aria-hidden="true"
          class='${classes}' ${this.nativeAttributes_.join(' ')}>
        <div class="mdc-snackbar__text"></div>
        <div class="mdc-snackbar__action-wrapper">
          <button type="button" class="mdc-snackbar__action-button"></button>
        </div>
      </div>`;
  }

}

customElements.define('one-snackbar', OneSnackbar);