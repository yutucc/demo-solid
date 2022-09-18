/*
 * @Author: wuqinfa
 * @Date: 2022-09-08 15:52:44
 * @LastEditors: wuqinfa
 * @Description: 简单粗暴，不用考虑什么设计原则，直接开干
 * 
 * 归纳每种 key 会出现的所有数据结构
 *    详细说明请见以下 caseB 函数的注释
 */
import { InputsAndFieldsKeyEnum, InputsAndFields } from '@/interface/block';

import { fabric1, fabric2, fabric3 } from './fabric';

/*
caseA
  数据结构如下：
    "SUBSTACK": [
      2,
      "2dxV$n*C1TXVr@DuTZ)["
    ]
*/
export const caseA = (
  target: InputsAndFields,
  other: InputsAndFields,
  targetBlockIds: string[],
  otherBlockIds: string[],
  targetKey: string,
  otherKey: string,
) => {
  if (
    !(
      targetKey.includes(InputsAndFieldsKeyEnum.SUBSTACK) ||
      targetKey.includes(InputsAndFieldsKeyEnum.CONDITION)
    )
  ) {
    return false;
  }

  if (fabric1(target, other, targetBlockIds, otherBlockIds, targetKey, otherKey)) {
    return true;
  }

  return false;
};

/*
caseB
  数据结构如下：
    "SOUND_MENU": [
      1,
      "G0d:L|{mE4[K2YNg(3Y#"
    ]
    "SOUND_MENU": [
      "owl",
      null
    ]
  PS：
    这里特殊说明一下，按理来说第一种情况可以直接归类到 caseA 函数中也是没问题的
    但这种会导致 SOUND_MENU 这种类型的 key 出现在两个 case 中
    后面这里的内容肯定会越来越多，如果刚好在某些情况下，某种类型的 key 有多种数据结构，而不同数据结构的处理散落在不同的 case 时
    有可能会出错，并且那是就不好定位了
    所以这里 case 的分类是对 key 会出现的所有数据结构的归纳
*/
export const caseB = (
  target: InputsAndFields,
  other: InputsAndFields,
  targetBlockIds: string[],
  otherBlockIds: string[],
  targetKey: string,
  otherKey: string,
) => {
  if (
    !(
      targetKey.includes(InputsAndFieldsKeyEnum.SOUND_MENU) ||
      targetKey.includes(InputsAndFieldsKeyEnum.DISTANCETOMENU) ||
      targetKey === InputsAndFieldsKeyEnum.TO ||
      targetKey.includes(InputsAndFieldsKeyEnum.TOUCHINGOBJECTMENU)
    )
  ) {
    return false;
  }

  if (
    fabric1(target, other, targetBlockIds, otherBlockIds, targetKey, otherKey) ||
    fabric2(target, other, targetBlockIds, otherBlockIds, targetKey, otherKey)
  ) {
    return true;
  }

  return false;
};

/*
caseC
  数据结构如下：
    "TIMES": [
      1,
      [
          6,
          "8"
      ]
    ]
*/
export const caseC = (
  target: InputsAndFields,
  other: InputsAndFields,
  targetBlockIds: string[],
  otherBlockIds: string[],
  targetKey: string,
  otherKey: string,
) => {
  // debugger

  if (
    !(
      targetKey.includes(InputsAndFieldsKeyEnum.TIMES) ||
      targetKey.includes(InputsAndFieldsKeyEnum.MESSAGE) ||
      targetKey.includes(InputsAndFieldsKeyEnum.SECS) ||
      targetKey === InputsAndFieldsKeyEnum.X ||
      targetKey === InputsAndFieldsKeyEnum.Y ||
      targetKey.includes(InputsAndFieldsKeyEnum.DEGREES) ||
      targetKey.includes(InputsAndFieldsKeyEnum.STEPS) ||
      targetKey.includes(InputsAndFieldsKeyEnum.DURATION)
    )
  ) {
    return false;
  }

  // debugger

  if (fabric3(target, other, targetBlockIds, otherBlockIds, targetKey, otherKey)) {
    return true;
  }

  return false;
};

/*
caseD
  数据结构如下：
    "STYLE": [
        "left-right",
        null
    ]
*/
export const caseD = (
  target: InputsAndFields,
  other: InputsAndFields,
  targetBlockIds: string[],
  otherBlockIds: string[],
  targetKey: string,
  otherKey: string,
) => {
  if (!targetKey.includes(InputsAndFieldsKeyEnum.STYLE)) {
    return false;
  }

  if (fabric2(target, other, targetBlockIds, otherBlockIds, targetKey, otherKey)) {
    return true;
  }

  return false;
};
