import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	state = {
		time: Date.now(),
		count: 1
	};

	// gets called when this route is navigated to
	componentDidMount() {
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named { user }.</p>


				<p>
					<button onClick={() => {
            this.sbar.show('hey Sup!');
          }}>Click Me</button>
					{' '}
					Clicked {count} times.
				</p>
        <one-linear-progress progress={count * 0.1}></one-linear-progress>
        <one-radio checked name="rgrp"></one-radio>
        <one-radio checked name="rgrp"></one-radio>
        <one-radio disabled name="rgrp"></one-radio>
			</div>
		);
	}
}
