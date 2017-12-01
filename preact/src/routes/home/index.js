import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {

	showSnack() {
		this.setState({
			count: this.state.count+1
		});
		this.snackbar.show({
			message: `Hello Snack ${this.state.count}`,
		});
	}

	toggleSliderDisabled() {
		this.setState({
			sliderDisabled: !this.state.sliderDisabled
		});
	}

	setSliderVal() {
		this.setState({
			sliderVal: this.slider.value
		});
	}

	constructor() {
		super();
		this.state = {
			cboxChecked: true,
			count: 0,
			sliderDisabled: false,
			sliderVal: 15
		};
		this.showSnack = this.showSnack.bind(this);
		this.toggleSliderDisabled = this.toggleSliderDisabled.bind(this);
		this.setSliderVal = this.setSliderVal.bind(this);
	}

	render() {
		return (
			<div class={style.home}>
				<div class={style.container}>
					<one-button unelevated ripple ononeclick={this.showSnack}>Show snack!</one-button>
				</div>

				<div class={style.container}>
					<one-form-field>
						<one-checkbox ononechange={this.toggleSliderDisabled} />
						<label>Check me2!</label>
					</one-form-field>

				</div>

				<div class={style.container}>
					<one-slider min={10} max={120} value={this.state.sliderVal} discrete disabled={this.state.sliderDisabled}
						ref={slider => {this.slider=slider;}}
						onMDCSliderInput={this.setSliderVal} />
				</div>

				<div class={style.container}>
					<one-snackbar ref={snackbar => {this.snackbar=snackbar;}} />
				</div>


				<div class={style.container}>
					Slider value {this.state.sliderVal}
				</div>
			</div>
		);
	}
}
