/*
 * @Author: wuqinfa
 * @Date: 2022-08-12 17:19:02
 * @LastEditors: wuqinfa
 * @Description:
 */
import isEmpty from 'lodash.isempty';
import isString from 'lodash.isstring';

import { Block, Blocks, InputsAndFieldsKeyEnum, InputsAndFields } from '@/interface/block';

import Translator from '@/translator';

class Rope {
  private blocks: Blocks;
  private rootBlockId: string;
  private blockIds: string[] = [];
  private connections: Block[] = [];

  constructor(blocks: Blocks, rootBlockId: string) {
    this.blocks = blocks;
    this.rootBlockId = rootBlockId;

    this.iterator(this.rootBlockId);
  }

  getBlockIds() {
    return this.blockIds;
  }

  getConnections() {
    return this.connections;
  }

  iterator(curBlockId: string) {
    const {
      next,
      inputs,
      fields,
    }: { next: string | null; inputs: InputsAndFields; fields: InputsAndFields } =
      this.blocks[curBlockId];

    this.blockIds.push(curBlockId);
    this.connections.push({
      ...this.blocks[curBlockId],
      id: curBlockId,
    });

    if (next !== null && !isEmpty(this.blocks[next])) {
      this.iterator(next);
    }

    for (const inputKey in inputs) {
      if (Object.hasOwnProperty.call(inputs, inputKey)) {
        const inputValue = inputs[inputKey];
        const inputTranslator = new Translator(inputKey as InputsAndFieldsKeyEnum, inputValue);
        const { blockId: inputBlockId } = inputTranslator.get();

        if (inputBlockId && isString(inputBlockId) && !isEmpty(this.blocks[inputBlockId])) {
          this.iterator(inputBlockId);
        }
      }
    }

    for (const fieldKey in fields) {
      if (Object.hasOwnProperty.call(fields, fieldKey)) {
        const fieldValue = fields[fieldKey];
        const fieldTranslator = new Translator(fieldKey as InputsAndFieldsKeyEnum, fieldValue);
        const { blockId: fieldBlockId } = fieldTranslator.get();

        if (fieldBlockId && isString(fieldBlockId) && !isEmpty(this.blocks[fieldBlockId])) {
          this.iterator(fieldBlockId);
        }
      }
    }
  }
}

export default Rope;
