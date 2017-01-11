import React, {Component} from 'react';

import Banner from './banner.js'
import FixedBar from '../common/fixedbar';

import './index.less';

export default class Index extends Component {

	render() {
		return (
			<div className="page fixedbar-through page-index">
				<div className="page-content">
					<Banner />
					<div className="operation clearfix">
						<div className="data-item">
							<i className="icon1"></i>累计成交额<span>15亿</span>
						</div>
						<div className="data-item">
							<i className="icon2"></i>运行天数<span>100天</span>
						</div>
					</div>
					<div className="subject-new">
						<div className="tit"><i>新手标</i>每个账户 限投一次</div>
						<div className="clearfix">
							<div>
								年化收益
								<div>15<span className="orange">%</span></div>
							</div>
							<div>
								投资期限
								<div>30<span>天</span></div>
							</div>
							<div>
								起投金额
								<div>100<span>元</span></div>
							</div>
						</div>
					</div>
				</div>
				<FixedBar activeIndex="1"/>
			</div>
		);
	}
}