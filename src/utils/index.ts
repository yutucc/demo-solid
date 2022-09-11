/*
 * @Author: wuqinfa
 * @Date: 2022-08-12 17:46:58
 * @LastEditors: wuqinfa
 * @Description:
 */
export const getRootBlockIds = (blocks) => {
  const result: string[] = [];

  for (const key in blocks) {
    if (Object.hasOwnProperty.call(blocks, key)) {
      const block = blocks[key];

      if (!block.parent && !result.includes(key)) {
        result.push(key);
      }
    }
  }

  return result;
};

export const isBlockEqual = (target, other) => {
  return target.opcode && other.opcode && target.opcode === other.opcode;
};
