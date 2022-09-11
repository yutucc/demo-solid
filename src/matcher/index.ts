/*
 * @Author: wuqinfa
 * @Date: 2022-08-16 11:59:22
 * @LastEditors: wuqinfa
 * @Description:
 */
import isEmpty from 'lodash.isempty';

import { Block } from '@/interface/block';

import inputsFieldsMatcher from '@/matcher/inputsFieldsMatcher';

export default (target: Block, other: Block, targetBlockIds: string[], otherBlockIds: string[]) => {
  const {
    opcode: targetOpcode,
    next: targetNext,
    parent: targetParent,
    inputs: targetInputs,
    fields: targetFields,
  } = target || {};
  const {
    opcode: otherOpcode,
    next: otherNext,
    parent: otherParent,
    inputs: otherInputs,
    fields: otherFields,
  } = other || {};

  if (!targetOpcode || !otherOpcode) {
    throw new Error(
      `积木没有 opcode，target：${JSON.stringify(target)}，other：${JSON.stringify(other)}`,
    );
  }

  if (targetOpcode !== otherOpcode) {
    return false;
  }
  // debugger

  if ((targetNext === null && otherNext !== null) || (targetNext !== null && otherNext === null)) {
    return false;
  }

  if (
    (targetParent === null && otherParent !== null) ||
    (targetParent !== null && otherParent === null)
  ) {
    return false;
  }

  if (
    (isEmpty(targetInputs) && !isEmpty(otherInputs)) ||
    (!isEmpty(targetInputs) && isEmpty(otherInputs))
  ) {
    return false;
  }

  if (
    (isEmpty(targetFields) && !isEmpty(otherFields)) ||
    (!isEmpty(targetFields) && isEmpty(otherFields))
  ) {
    return false;
  }

  if (!inputsFieldsMatcher(targetInputs, otherInputs, targetBlockIds, otherBlockIds)) {
    return false;
  }

  if (!inputsFieldsMatcher(targetFields, otherFields, targetBlockIds, otherBlockIds)) {
    return false;
  }

  return true;
};
