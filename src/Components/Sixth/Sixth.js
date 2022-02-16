import React, {Component} from 'react';

import Arcade from '../../images/icons/arcade.png'
import LastThree from '../lastThree/LastThree';

class Sixth extends Component {
	render(){
		return (
			<div>
				<LastThree
					myClassName="Arcade-AppleCard"
					logoPic={Arcade}
					logoAlt="arcade logo"
					whiteDescription="white"
					description="Agent 8 is a small hero on a big mission."
					linkOne="Play now"
					sup2="2"
					linkTwo="Learn about Apple Arcade"
					rightTitle="Apple Card Monthly Installments"
					rightDescriptionOne="Pay for your next iPhone over time, interest-free with Apple
									Card."
					rightLinkOne="Learn more"
					rightLinkTwo="Apply now"
				/>
			</div>
		);
	}
}

export default Sixth;