import React from "react";
import { Select } from "antd";

const { Option } = Select;
function SelectOption(props) {
	const { handleChange, width, defaultVal } = props;
	return (
		<div>
			<Select
				defaultValue={defaultVal}
				style={{ width: width }}
				onChange={value => handleChange(value)}
			>
				<Option value="Reason Type">Reason Type</Option>
				<Option value="High">High</Option>
				<Option value="Medium">Medium</Option>
				<Option value="Low">Low</Option>
			</Select>
		</div>
	);
}

export default SelectOption;
