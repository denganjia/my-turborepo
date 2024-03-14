import type { ComputedRef, Ref } from "vue";
import "./index.scss";
import { TableInstance } from "element-plus";

export * from "./types";
export type ProTableInstance = {
  element: Ref<TableInstance>,
  tableData: ComputedRef<any[]>,
  pageable: Ref<{
    pageNum: number;
    pageSize: number;
    total: number;
  }>,
  searchParam: Ref<{ [key: string]: any }>,
  searchInitParam: Ref<{ [key: string]: any }>,
  getTableList: () => Promise<void>,
  search: () => void,
  reset: () => void,
  handleSizeChange: (val: number) => void,
  handleCurrentChange: (val: number) => void,
  clearSelection: () => void,
  enumMap: Ref<Map<string, { [key: string]: any }[]>>,
  isSelected: Ref<boolean>,
  selectedList: Ref<{ [key: string]: any }[]>,
  selectedListIds: ComputedRef<string[]>,
}
export { default as ElProTable } from "./index.vue"