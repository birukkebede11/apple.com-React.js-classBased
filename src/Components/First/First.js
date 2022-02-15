import React from "react";
import FirstThree from "../firstThree/FirstThree";

class First extends React.Component {
	render() {
		return (
			<FirstThree
				myClassName="iPad-Pro"
				new="New"
				black="black"
				title="iPad Pro"
				description=""
				price=""
				orderOrBuy="Order"
				ipodPrice="iPad Pro available starting 3.25"
				magicKeyboard="Magic Keyboard coming in May"
			/>
		);
	}
}

export default First;
