import React, { Component } from "react";
import LastThree from "../lastThree/LastThree";

class Fourth extends Component {
	render() {
		return (
			<LastThree
				myClassName="iPhone11-COVID-19"
				title="iPhone 11"
				description="Just the right amount of everything."
				price="From $18.70/mo. or $499 with trade‑in."
				sup="1"
				linkOne="Learn more"
				linkTwo="Apply now"
				white="white"
				rightTitle="Get the latest CDC response to COVID-19."
				rightLinkOne="Watch the PSA"
			/>
		);
	}
}

export default Fourth;
