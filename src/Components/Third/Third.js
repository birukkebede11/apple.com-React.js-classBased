import React, { Component } from "react";
import FirstThree from "../firstThree/FirstThree";

class Third extends Component {
	render() {
		return (
			<FirstThree
				myClassName="iPhone-11-Pro"
				title="iPhone 11 Pro"
				description="Pro cameras. Pro display. Pro performance."
				price="From $24.95/mo. or $599 with trade‑in."
				orderOrBuy="Buy"
			/>
		);
	}
}

export default Third;
