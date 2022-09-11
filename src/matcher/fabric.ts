/*
 * @Author: wuqinfa
 * @Date: 2022-09-08 15:55:20
 * @LastEditors: wuqinfa
 * @Description: 归纳每种数据结构的判同条件
 */
import { InputsAndFields } from '@/interface/block';

/*
fabric1(模板，后续新增 case 可以按这个模板来)
  数据结构如下：
  判同条件：
*/
// export const fabric1 = (target: InputsAndFields, other: InputsAndFields, targetBlockIds: string[], otherBlockIds: string[], targetKey: string, otherKey: string) => {
//   if (

//   ) {
//     return true;
//   }

//   return false;
// }

/*
fabric1
  数据结构如下：
    "SUBSTACK": [
      2,
      "2dxV$n*C1TXVr@DuTZ)["
    ]
  判同条件：
    数组 [1] 表示子积木的 blockId，只要在积木数组中（targetBlockIds、otherBlockIds）就相同
*/
export const fabric1 = (
  target: InputsAndFields,
  other: InputsAndFields,
  targetBlockIds: string[],
  otherBlockIds: string[],
  targetKey: string,
  otherKey: string,
) => {
  if (targetBlockIds.includes(target[targetKey][1]) && otherBlockIds.includes(other[otherKey][1])) {
    return true;
  }

  return false;
};

/*
fabric2
  数据结构如下：
    "SOUND_MENU": [
      "owl",
      null
    ]
  判同条件：
    数组 [0] 值全等
*/
export const fabric2 = (
  target: InputsAndFields,
  other: InputsAndFields,
  targetBlockIds: string[],
  otherBlockIds: string[],
  targetKey: string,
  otherKey: string,
) => {
  if (target[targetKey][0] === other[otherKey][0]) {
    return true;
  }

  return false;
};

/*
fabric3
  数据结构如下：
   "TIMES": [
      1,
      [
          6,
          "8"
      ]
    ]
  判同条件：
    数组 [1][1] 值全等
*/
export const fabric3 = (
  target: InputsAndFields,
  other: InputsAndFields,
  targetBlockIds: string[],
  otherBlockIds: string[],
  targetKey: string,
  otherKey: string,
) => {
  if (target[targetKey][1][1] === other[otherKey][1][1]) {
    return true;
  }

  return false;
};
