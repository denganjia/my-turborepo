<script setup lang="ts">
// import ElProTable from "@suite-kit/el-protable";
import {
  ElProTable,
  ProTableInstance,
  ColumnProps,
} from "@suite-kit/el-protable";
import { ref } from "vue";

const departA = [
  { label: "部门1", value: 0 },
  { label: "部门2", value: 1 },
  { label: "部门3", value: 2 },
  { label: "部门4", value: 3 },
  { label: "部门5", value: 4 },
];
const departB = [
  { label: "部门A", value: 5 },
  { label: "部门B", value: 6 },
  { label: "部门C", value: 7 },
  { label: "部门D", value: 8 },
  { label: "部门E", value: 9 },
];
const table = ref<ProTableInstance>();
const departEnum = ref<typeof departA>([]);
const genderChange = (val: number) => {
  table.value!.searchParam["departId"] = null;
  if (val) {
    departEnum.value = departA;
  } else {
    departEnum.value = departB;
  }
};
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
    search: { el: "select", props: { onChange: genderChange } },
  },
  {
    label: "部门",
    prop: "departId",
    enum: departEnum,
    search: { el: "select-v2" },
    isShow: false,
  },
];
</script>

<template>
  <ElProTable :columns="columns" ref="table"></ElProTable>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
