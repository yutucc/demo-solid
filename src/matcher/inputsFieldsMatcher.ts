/*
 * @Author: wuqinfa
 * @Date: 2022-08-16 14:57:40
 * @LastEditors: wuqinfa
 * @Description:
 */
import isEqual from 'lodash.isequal';
import isEmpty from 'lodash.isempty';

import { InputsAndFields, InputsAndFieldsKeyEnum } from '@/interface/block';

import Translator from '@/translator';

// import { caseA, caseB, caseC, caseD } from './case';

export default (
  target: InputsAndFields,
  other: InputsAndFields,
  targetBlockIds: string[],
  otherBlockIds: string[],
) => {
  const targetKeys = Object.keys(target);
  const otherKeys = Object.keys(other);
  let matchNum = 0;

  if (isEmpty(target) && isEmpty(other)) {
    return true;
  }

  // FIXME: 这里我的判断是inputs、fields 中的 key，顺序应该都要一致
  if (!isEqual(targetKeys, otherKeys)) {
    return false;
  }

  // debugger

  targetKeys.forEach((targetKey, index) => {
    const otherKey = otherKeys[index];

    // debugger;

    const targetTranslator = new Translator(targetKey as InputsAndFieldsKeyEnum, target[targetKey]);
    const otherTranslator = new Translator(otherKey as InputsAndFieldsKeyEnum, other[otherKey]);

    const targetTran = targetTranslator.get();
    const otherTran = otherTranslator.get();

    if (
      targetBlockIds.includes(targetTran.blockId as string) &&
      otherBlockIds.includes(otherTran.blockId as string)
    ) {
      matchNum += 1;
      return;
    }
    if (targetTran.value && otherTran.value && targetTran.value === otherTran.value) {
      matchNum += 1;
      return;
    }

    // if (caseA(target, other, targetBlockIds, otherBlockIds, targetKey, otherKey)) {
    //   matchNum += 1;
    //   return;
    // }
    // if (caseB(target, other, targetBlockIds, otherBlockIds, targetKey, otherKey)) {
    //   matchNum += 1;
    //   return;
    // }
    // if (caseC(target, other, targetBlockIds, otherBlockIds, targetKey, otherKey)) {
    //   matchNum += 1;
    //   return;
    // }
    // if (caseD(target, other, targetBlockIds, otherBlockIds, targetKey, otherKey)) {
    //   matchNum += 1;
    //   return;
    // }
  });

  // debugger

  // inputs fields 中的所有元素都要匹配上才算匹配
  if (matchNum === targetKeys.length) {
    return true;
  }

  return false;
};
