import React, { Component } from "react";

class FirstThree extends Component {
	render() {
		return (
			<section className={this.props.myClassName}>
				<div className="container">
					{this.props.new && <div className="new-alert">{this.props.new}</div>}

					<div className={`title-wraper bold ${this.props.black}`}>
						{this.props.title}
					</div>

					{this.props.description && (
						<div className={`description-wrapper ${this.props.black}`}>
							{this.props.description}
						</div>
					)}

					{this.props.price && (
						<div className={`price-wrapper ${this.props.grey}`}>
							{this.props.price}
						</div>
					)}

					<div className="links-wrapper">
						<ul>
							<li>
								<a href="#">Learn more</a>
							</li>
							<li>
								<a href="#">{this.props.orderOrBuy}</a>
							</li>
						</ul>
					</div>

					{this.props.ipodPrice && (
						<div className="ipad-caption row">
							<div className="col-sm-12 col-md-6 text-md-right">
								{this.props.ipodPrice}
							</div>
							<div className="col-sm-12 col-md-6 text-md-left">
								{this.props.magicKeyboard}
							</div>
						</div>
					)}
				</div>
			</section>
		);
	}
}
export default FirstThree;
