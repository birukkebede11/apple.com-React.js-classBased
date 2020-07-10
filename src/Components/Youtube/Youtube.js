import React, {Component} from 'react';


//https://www.googleapis.com/youtube/v3/search?key=AIzaSyBKNveVpH6bsHyKC-iKrcVAeZ3zwlwzRPw&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=2

class Youtube extends Component {

	constructor(){
		super();
		this.state = {
			youTubeVideos: []
		}
	}

	componentDidMount(){
		fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCW5JQsiZXFXfNBol-lYr7eRGXckUYmhmQ&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6")
			.then(response => response.json())
			.then((data) => {
				const youTubeVideos = data.items;
				this.setState((state) => {
			        return {
			          youTubeVideos: youTubeVideos,
			        };
			      }
				);
			})
	}
	

	render () {

		// console.log(this.state.youTubeVideos);
		return (
			<section className="youtubeVideosWrapper">
				<div className="allVideosWrapper">
					<div className="container">
						<div className="row justify-content-center text-center"> 
							<div className="col-12">
								<div className="title-wraper">
									Latest Videos <br/><br/>
								</div>
							</div> 
								{
									this.state.youTubeVideos.map((singleVideo, i) => {
										let vidId = singleVideo.id.videoId; 
										let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
										let videoWrapper =
										<div key={i} className="col-sm-12 col-md-6 col-lg-4">
											<div className="singleVideoWrapper">
												<div className="videoThumbnail">
													<a href={vidLink} target="_blank">
														<img src={singleVideo.snippet.thumbnails.high.url} />
													</a>
												</div>
												<div className="videoInfoWrapper">
													<div className="videoTitle"><a href={vidLink} target="_blank">{singleVideo.snippet.title}</a></div>			
													<div className="videoDesc">{singleVideo.snippet.description}</div>
												</div>
											</div>
										</div>;
										return videoWrapper; 
									})
								}

								{this.videoWrapper}

						</div>
					</div>
				</div>
			</section>

		);
	}
}

export default Youtube;
