import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <one-button disabled unelevated ripple onOneClick={(e)=> {
          console.log('hi');
        }}>Button!</one-button>
        <p>This is the Home component.</p>
      </div>
    );
  }
}
