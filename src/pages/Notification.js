import React, { Component } from "react";
import { Row, Col, Layout, Affix } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import SearchInput from "../component/common/SearchInput";
import SelectOption from "../component/common/SelectOption";
import TabOption from "../component/common/TabOption";
class Notification extends Component {
	state = {
		tags: []
	};
	handleChange = value => {
		if (
			this.state.tags.find(tag => tag.toLowerCase() === value.toLowerCase())
		) {
			return;
		}
		this.setState({ tags: [...this.state.tags, value] }, () => {
			console.log("your new Tag is.. ", this.state.tags);
		});
	};

	removeTag = i => {
		const newTag = [...this.state.tags];
		newTag.splice(i, 1);
		this.setState({ tags: newTag });
	};

	render() {
		const { tags } = this.state;
		return (
			<div>
				<div className="top"></div>
				<div className="side"></div>
				<div className="container">
					<Layout className="main-container">
						<Row className="notification-head mt-50 ">
							<Col md={12}>
								<Row>
									<div>
										<h3 className="notification-title">Notification(14)</h3>
									</div>
									<div>
										<p className="caption">Based on Performance</p>
									</div>
								</Row>
							</Col>
							<Col md={12}>
								<SettingOutlined className="setting" />
							</Col>
						</Row>
						<Row className="mt-30 mt-20">
							<Col md={6}>
								<SearchInput width={300} />
							</Col>
							<Col md={6}>
								<SelectOption
									width={300}
									defaultVal="Reason Type"
									handleChange={value => this.handleChange(value)}
								/>
							</Col>
							<Col md={5}>
								<SelectOption width={200} defaultVal="Priority Status" />
							</Col>
						</Row>
						<Row>
							<Col offset={4}>
								<p className="filter-title">Advanced Filter</p>
							</Col>
						</Row>
						<Row className="mt-30 mt-20">
							<Col md={24}>
								<div className="input-tags">
									<h3 className="tag-title"> Applied FIlters |</h3>
									<div className="tag-container">
										<ul className="tags">
											{tags.map((tag, i) => {
												return (
													<li key={tag} className="tag">
														<span>
															{tag}{" "}
															<span
																className="remove-tag"
																onClick={i => this.removeTag(i)}
															>
																X
															</span>
														</span>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
							</Col>
						</Row>
						<Row className="mt-30 mt-20">
							<Col>
								<TabOption />
							</Col>
						</Row>
					</Layout>
				</div>
			</div>
		);
	}
}
export default Notification;
