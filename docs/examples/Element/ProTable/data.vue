<template>
	<div class="table">
		<ElProTable :columns="columns" :data="data"></ElProTable>
	</div>
</template>

<script setup lang="ts">
import {ElProTable, ColumnProps } from "@suite-kit/el-protable";
import { dayjs } from "element-plus";

const data = Array(20)
	.fill(undefined)
	.map((_, index) => {
		return {
			name: `张三` + index,
			age: index + 1,
			gender: index % 2,
			createTime: dayjs(),
		};
	});

const columns: ColumnProps[] = [
	{ label: "姓名", prop: "name" },
	{ label: "年龄", prop: "age" },
	{
		label: "性别",
		prop: "gender",
		enum: [
			{ label: "男", value: 1 },
			{ label: "女", value: 0 },
		],
	},
	{
		label: "创建时间",
		prop: "createTime",
		render({ row }) {
			return dayjs(row.createTime).format("YYYY-MM-DD HH:mm:ss");
		},
	},
];
</script>
