import React from "react";
import { Input } from "antd";
const { Search } = Input;
function SearchInput(props) {
	const { width } = props;
	return (
		<div>
			{" "}
			<Search
				placeholder="Search by submission Id, Market"
				onSearch={value => console.log(value)}
				style={{ width: width }}
			/>
		</div>
	);
}
export default SearchInput;
