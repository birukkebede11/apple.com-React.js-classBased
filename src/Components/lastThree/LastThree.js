import React, { Component } from "react";

class LastThree extends Component {
	render() {
		return (
			<section className={this.props.myClassName}>
				<div className="container-fluid">
					<div className="row">
						<div className="left-side-wrapper col-sm-12 col-md-6">
							<div className="left-side-container">
								{this.props.logoPic && (
									<div className="top-logo-wrapper">
										<div className="logo-wrapper">
											<img src={this.props.logoPic} alt={this.props.logoAlt} />
										</div>
									</div>
								)}
								{this.props.bankerLogo && (
									<div className="tvshow-logo-wraper">
										<img
											src={this.props.bankerLogo}
											alt={this.props.bankerAlt}
										/>
									</div>
								)}
								{this.props.watchMore && (
									<div className="watch-more-wrapper">
										<a href="#">{this.props.watchMore}</a>
									</div>
								)}
								{this.props.title && (
									<div className="title-wraper">{this.props.title}</div>
								)}
								{this.props.description && (
									<div
										className={`description-wraper ${this.props.whiteDescription}`}>
										{this.props.description}
									</div>
								)}
								{this.props.price && (
									<div className="price-wrapper">
										{this.props.price}
										<sup>{this.props.sup}</sup>
									</div>
								)}
								{this.props.linkOne && (
									<div className="links-wrapper">
										<ul>
											<li>
												<a href="">
													{this.props.linkOne}
													<sup>{this.props.sup2}</sup>
												</a>
											</li>
											<li>
												<a href="">{this.props.linkTwo}</a>
											</li>
										</ul>
									</div>
								)}
							</div>
						</div>
						<div className="right-side-wrapper col-sm-12 col-md-6">
							<div className="right-side-container">
								{this.props.watchLogo && (
									<div class="top-logo-wrapper">
										<div class="logo-wrapper">
											<img
												src={this.props.watchLogo}
												alt={this.props.watchAlt}
											/>
										</div>
									</div>
								)}
								<div className={`title-wraper ${this.props.white}`}>
									{this.props.rightTitle}
								</div>

								<div class="description-wraper">
									{this.props.rightDescriptionOne}
									{this.props.rightDescriptionTwo && <br />}
									{this.props.rightDescriptionTwo}
								</div>

								<div className={`links-wrapper ${this.props.white}`}>
									<ul>
										<li>
											<a href="">{this.props.rightLinkOne}</a>
										</li>
										{this.props.rightLinkTwo && (
											<li>
												<a href="">{this.props.rightLinkTwo}</a>
											</li>
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default LastThree;
