import { h, Component } from 'preact';
import style from './style';
import '../../../../button';
export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <mdc-button unelevated>Button!</mdc-button>
        <p>This is the Home component.</p>
      </div>
    );
  }
}
