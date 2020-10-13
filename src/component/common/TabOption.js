import React from "react";
import { Tabs, Collapse } from "antd";
const { Panel } = Collapse;
const { TabPane } = Tabs;
function TabOption() {
	return (
		<div>
			<Tabs defaultActiveKey="1">
				<TabPane tab="My Notifications(2)" key="1">
					<Collapse defaultActiveKey={["1"]}>
						<Panel header="This is panel header 1" key="1">
							<p>para1</p>
						</Panel>
					</Collapse>
				</TabPane>
				<TabPane tab="Actioned Notifications" key="2">
					Tab 2
				</TabPane>
				<TabPane tab="All Notifications" key="3">
					Tab 3
				</TabPane>
			</Tabs>
		</div>
	);
}
export default TabOption;
