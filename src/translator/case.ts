/*
 * @Author: wuqinfa
 * @Date: 2022-09-09 16:54:09
 * @LastEditors: wuqinfa
 * @Description: 考虑 SOLID 设计原则后的做法
 * 
 * 归纳每种 key 会出现的所有数据结构，并且翻译每种数据结构中内容的值（积木 id or 内容值）
 */
import isString from 'lodash.isstring';

import { InputsAndFieldsKeyEnum } from '@/interface/block';
import { Translation, Content } from '@/interface/translator';

import { fabric1, fabric2, fabric3 } from '@/translator/fabric';

type CaseResult = Translation | undefined;

/*
caseA
  数据结构如下：
    "SUBSTACK": [
      2,
      "2dxV$n*C1TXVr@DuTZ)["
    ]
*/
export const caseA = (key: InputsAndFieldsKeyEnum, value: any): CaseResult => {
  if (
    !(
      key.includes(InputsAndFieldsKeyEnum.SUBSTACK) ||
      key.includes(InputsAndFieldsKeyEnum.CONDITION)
    )
  ) {
    return undefined;
  }

  const content: Content = fabric1(value);

  if (content === undefined) {
    return undefined;
  }

  return {
    key: key,
    blockId: content as string,
    value: null,
  };
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
*/
export const caseB = (key: InputsAndFieldsKeyEnum, value: any): CaseResult => {
  if (
    !(
      key.includes(InputsAndFieldsKeyEnum.SOUND_MENU) ||
      key.includes(InputsAndFieldsKeyEnum.DISTANCETOMENU) ||
      key === InputsAndFieldsKeyEnum.TO ||
      key.includes(InputsAndFieldsKeyEnum.TOUCHINGOBJECTMENU)
    )
  ) {
    return undefined;
  }

  const content1: Content = fabric1(value);
  const content2: Content = fabric2(value);

  if (content1 === undefined && content2 === undefined) {
    return undefined;
  }

  if (isString(content1)) {
    return {
      key: key,
      blockId: content1 as string,
      value: null,
    };
  }

  if (isString(content2)) {
    return {
      key: key,
      blockId: null,
      value: content2,
    };
  }

  throw new Error(`caseB 出错  key: ${key}  value: ${JSON.stringify(value)}`);
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
export const caseC = (key: InputsAndFieldsKeyEnum, value: any): CaseResult => {
  if (
    !(
      key.includes(InputsAndFieldsKeyEnum.TIMES) ||
      key.includes(InputsAndFieldsKeyEnum.MESSAGE) ||
      key.includes(InputsAndFieldsKeyEnum.SECS) ||
      key === InputsAndFieldsKeyEnum.X ||
      key === InputsAndFieldsKeyEnum.Y ||
      key.includes(InputsAndFieldsKeyEnum.DEGREES) ||
      key.includes(InputsAndFieldsKeyEnum.STEPS) ||
      key.includes(InputsAndFieldsKeyEnum.DURATION)
    )
  ) {
    return undefined;
  }

  const content: Content = fabric3(value);

  if (content === undefined) {
    return undefined;
  }

  return {
    key: key,
    blockId: null,
    value: content,
  };
};

/*
caseD
  数据结构如下：
    "STYLE": [
        "left-right",
        null
    ]
*/
export const caseD = (key: InputsAndFieldsKeyEnum, value: any): CaseResult => {
  if (!key.includes(InputsAndFieldsKeyEnum.STYLE)) {
    return undefined;
  }

  const content: Content = fabric2(value);

  if (content === undefined) {
    return undefined;
  }

  return {
    key: key,
    blockId: null,
    value: content,
  };
};
