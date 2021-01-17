import React from 'react'
import { Input, } from 'antd'
import { AudioOutlined } from '@ant-design/icons'

const { Search } = Input
const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: '#1890ff',
		}}
	/>
);

export default () => {
	const onSearch = value => {
		console.log('value', value);
	}
	return (
		<div style={{ marginBottom: 30, marginLeft: 20 }}>
			<Search
				style={{ width: 300, }}
				placeholder="input search text"
				enterButton="Search"
				size="large"
				suffix={suffix}
				onSearch={onSearch}
			/>
		</div>

	)
}





