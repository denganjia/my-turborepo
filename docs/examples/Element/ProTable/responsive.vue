<template>
  <div class="table">
    <ElProTable :columns="columns" :request-api="getDataApi"></ElProTable>
  </div>
</template>

<script setup lang="ts">
import { ElProTable,ColumnProps } from "@suite-kit/el-protable";
import { getDataApi } from "../../../fetch";
import { dayjs } from "element-plus";

const columns: ColumnProps[] = [
  { label: "姓名", prop: "name", search: { el: "text" } },
  { label: "年龄", prop: "age" },
  {
    label: "性别",
    prop: "gender",
    enum: [
      { label: "男", value: 1 },
      { label: "女", value: 0 },
    ],
    search: { el: "select" },
  },
  {
    label: "创建时间",
    prop: "createTime",
    render({ row }) {
      return dayjs(row.createTime).format("YYYY-MM-DD HH:mm:ss");
    },
    search: {
      el: "date-picker",
      props: { type: "datetimerange" },
      // 设置响应式列
      span: 2,
      // 设置表单项排序
      order: 1,
    },
  },
];
</script>
