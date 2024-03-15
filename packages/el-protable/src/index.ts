import type { UnwrapRef } from "vue";
import "./index.scss";
import { TableInstance } from "element-plus";

export * from "./types";
export type ProTableInstance = {
  element: UnwrapRef<TableInstance>,
  tableData: UnwrapRef<any[]>,
  pageable: UnwrapRef<{
    pageNum: number;
    pageSize: number;
    total: number;
  }>,
  searchParam: UnwrapRef<{ [key: string]: any }>,
  searchInitParam: UnwrapRef<{ [key: string]: any }>,
  getTableList: () => Promise<void>,
  search: () => void,
  reset: () => void,
  handleSizeChange: (val: number) => void,
  handleCurrentChange: (val: number) => void,
  clearSelection: () => void,
  enumMap: UnwrapRef<Map<string, { [key: string]: any }[]>>,
  isSelected: UnwrapRef<boolean>,
  selectedList: UnwrapRef<{ [key: string]: any }[]>,
  selectedListIds: UnwrapRef<string[]>,
}
export { default as ElProTable } from "./index.vue"