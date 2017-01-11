import React, {Component} from 'react';
import Swiper from 'swiper';


export default class Banner extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bannerItems: [1,2,3]
		}
	}

	componentDidMount() {
		new Swiper('.swiper-container');
	}

	render() {
		return (
			<div className="banner">
				<div className="swiper-container">
					<div className="swiper-wrapper">
				        {
				        	this.state.bannerItems.map((item, index) => {
				        		return <div className="swiper-slide" key={index}><img src="app/images/banner.png" /></div>
				        	})
				        }
				    </div>
				</div>
			</div>
		);
	}
}