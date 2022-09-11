/*
 * @Author: wuqinfa
 * @Date: 2022-09-09 16:56:10
 * @LastEditors: wuqinfa
 * @Description:
 */
import { InputsAndFieldsKeyEnum } from '@/interface/block';

/*
  src/translator/fabric.ts
  数据结构的语义化解析出来的内容
    如果是 undefined 表示解析失败，没有解析出内容出来
    除 undefined 的其它类型，表示解析出对应内容，有可能是“值”，也可能是“blockId”
*/
export type Content = string | number | undefined;

export interface Translation {
  key: InputsAndFieldsKeyEnum;
  blockId: string | null;
  value: string | number | null;
}
