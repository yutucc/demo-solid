/*
 * @Author: wuqinfa
 * @Date: 2022-09-09 16:18:39
 * @LastEditors: wuqinfa
 * @Description:
 */
import isArray from 'lodash.isarray';

import { Content } from '@/interface/translator';

/*
fabric1
  数据结构如下：
    "SUBSTACK": [
      2,
      "2dxV$n*C1TXVr@DuTZ)["
    ]
*/
export const fabric1 = (value: any): Content => {
  if (!isArray(value)) {
    return undefined;
  }

  const content = value[1];

  return content?.length === 20 ? value[1] : undefined;
};

/*
fabric2
  数据结构如下：
    "SOUND_MENU": [
      "owl",
      null
    ]
*/
export const fabric2 = (value: any): Content => {
  if (!isArray(value)) {
    return undefined;
  }

  return value[0];
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
*/
export const fabric3 = (value: any): Content => {
  if (!isArray(value) || !isArray(value[1])) {
    return undefined;
  }

  return value[1][1];
};
