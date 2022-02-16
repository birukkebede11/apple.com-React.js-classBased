import React, { Component } from "react";

import Apple from "../../images/icons/apple-tv-logo.png";
import Banker from "../../images/home/banker.png";
import Watch from "../../images/icons/watch-series5-logo.png";
import LastThree from "../lastThree/LastThree";

class Fifth extends Component {
	render() {
		return (
			<LastThree
				myClassName="AppleTV-Watch"
				logoPic={Apple}
				logoAlt="apple-tv-logo"
				bankerLogo={Banker}
				bankerAlt="banker"
				watchMore="Watch now on the Apple TV App"
				watchLogo={Watch}
				watchAlt="watch logo"
				rightDescriptionOne="With the Always-On Retina display."
				rightDescriptionTwo="You’ve never seen a watch like this."
				rightLinkOne="Learn more"
				rightLinkTwo="Buy"
			/>
		);
	}
}

export default Fifth;
