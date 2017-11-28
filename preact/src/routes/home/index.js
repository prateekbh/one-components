import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			cboxChecked: true,
			count: 0,
		};
	}
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<one-button unelevated ripple ononeclick={()=>{
					this.cb.checked = false;
					this.setState({
						count: this.state.count+1
					});
					this.cb2.show({
						message: `Hello Snack ${this.state.count}`,
						actionText: 'Undo',
						actionHandler: function () {
							console.log('my cool function');
						}
					});
				}}>Button!</one-button>
				<div>
					<one-checkbox ref={cb=>{this.cb=cb;}} checked={this.state.cboxChecked}
					ononechange={() => {
						console.log('changed');
					}}></one-checkbox> Check me!
				</div>

				<div>
					<one-checkbox disabled></one-checkbox> Check me2!
				</div>
				<p>This is the Home component.</p>

				<one-linear-progress progress={0.1} reversed></one-linear-progress>

				<one-slider min={0} max={100} value={15}></one-slider>

				<one-slider min={0} max={100} value={15} discrete></one-slider>

				<one-snackbar ref={cb2=>{this.cb2=cb2;}}></one-snackbar>
			</div>
		);
	}
}
