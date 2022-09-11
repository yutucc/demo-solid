/*
 * @Author: wuqinfa
 * @Date: 2022-08-18 15:59:21
 * @LastEditors: wuqinfa
 * @Description:
 */

// 工程文件（作品文件）的数据格式
export interface Project {
  readonly targets: any[];
  readonly monitors: any[];
  readonly extensions: any[];
  readonly meta: any;
}
