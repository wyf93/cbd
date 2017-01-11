import React, {Component} from 'react';

import './fixedbar.less';

export default class FixedBar extends Component {

	render() {
		console.log(this.props.activeIndex)
		return (
			<div className="fixedbar clearfix">
				<div className={this.props.activeIndex == 1? "fixedbar-item active":"fixedbar-item"}>
					<i className="fixedbar-icon icon1"></i>
					<div>首页</div>
				</div>
				<div className={this.props.activeIndex == 2? "fixedbar-item active":"fixedbar-item"}>
					<i className="fixedbar-icon icon2"></i>
					<div>商城</div>
				</div>
				<div className={this.props.activeIndex == 3? "fixedbar-item active":"fixedbar-item"}>
					<i className="fixedbar-icon icon3"></i>
					<div>理财</div>
				</div>
				<div className={this.props.activeIndex == 4? "fixedbar-item active":"fixedbar-item"}>
					<i className="fixedbar-icon icon4"></i>
					<div>更多</div>
				</div>
				<div className={this.props.activeIndex == 5? "fixedbar-item active":"fixedbar-item"}>
					<i className="fixedbar-icon icon5"></i>
					<div>我的</div>
				</div>
			</div>
		);
	}
}