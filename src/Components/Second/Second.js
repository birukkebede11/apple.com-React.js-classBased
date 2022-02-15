import React from "react";
import Rating from "./Rating/Rating";
import FirstThree from "../firstThree/FirstThree";

class Second extends React.Component {
	render() {
		return (
			<>
				<FirstThree
					myClassName="Macbook"
					new="New"
					black="black"
					title="MacBook Air"
					description="Twice the speed. Twice the storage."
					grey="grey"
					price="From $999."
					orderOrBuy="Buy"
				/>

				<Rating />
			</>
		);
	}
}

export default Second;
