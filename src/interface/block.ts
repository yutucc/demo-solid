/*
 * @Author: wuqinfa
 * @Date: 2022-08-16 12:05:32
 * @LastEditors: wuqinfa
 * @Description:
 */

export const enum InputsAndFieldsKeyEnum {
  STEPS = 'STEPS',
  DEGREES = 'DEGREES',
  TO = 'TO',
  X = 'X',
  Y = 'Y',
  SECS = 'SECS',
  DIRECTION = 'DIRECTION',
  TOWARDS = 'TOWARDS',
  DX = 'DX',
  DY = 'DY',
  STYLE = 'STYLE',
  MESSAGE = 'MESSAGE',
  COSTUME = 'COSTUME',
  BACKDROP = 'BACKDROP',
  CHANGE = 'CHANGE',
  SIZE = 'SIZE',
  EFFECT = 'EFFECT',
  VALUE = 'VALUE',
  FRONT_BACK = 'FRONT_BACK',
  NUM = 'NUM',
  FORWARD_BACKWARD = 'FORWARD_BACKWARD',
  NUMBER_NAME = 'NUMBER_NAME',
  SOUND_MENU = 'SOUND_MENU',
  VOLUME = 'VOLUME',
  KEY_OPTION = 'KEY_OPTION',
  BROADCAST_OPTION = 'BROADCAST_OPTION',
  BROADCAST_INPUT = 'BROADCAST_INPUT',
  DURATION = 'DURATION',
  TIMES = 'TIMES',
  STOP_OPTION = 'STOP_OPTION',
  CLONE_OPTION = 'CLONE_OPTION',
  TOUCHINGOBJECTMENU = 'TOUCHINGOBJECTMENU',
  COLOR = 'COLOR',
  DISTANCETOMENU = 'DISTANCETOMENU',
  QUESTION = 'QUESTION',
  DRAG_MODE = 'DRAG_MODE',
  OBJECT = 'OBJECT',
  PROPERTY = 'PROPERTY',
  CURRENTMENU = 'CURRENTMENU',
  FROM = 'FROM',
  OPERAND = 'OPERAND',
  STRING = 'STRING',
  LETTER = 'LETTER',
  OPERATOR = 'OPERATOR',
  VARIABLE = 'VARIABLE',
  ITEM = 'ITEM',
  LIST = 'LIST',
  INDEX = 'INDEX',
  custom_block = 'custom_block',
  SUBSTACK = 'SUBSTACK',
  CONDITION = 'CONDITION',
}

export interface InputsAndFields {
  [propsName: InputsAndFieldsKeyEnum | string]: any;
}

export interface Block {
  readonly opcode: string;
  readonly next: string | null;
  readonly parent: string | null;
  readonly inputs: InputsAndFields;
  readonly fields: InputsAndFields;
  readonly shadow: boolean;
  readonly topLevel: boolean;
  readonly x?: number;
  readonly y?: number;
  readonly id?: string;
}

export interface Blocks {
  // [propsName: string] key 是 block 的 id
  [propsName: string]: Block;
}

/**
 * 根据根积木 id 把积木“串”起来，组成一条积木
 * https://res.miaocode.com/slim/Snipaste_2022-08-29_16-06-38-1661760475476.png
 * https://res.miaocode.com/slim/Snipaste_2022-08-29_16-07-40-1661760490466.png
 */
export interface Connection {
  rootBlockId: string; // 当前这条积木的跟积木
  connections: Block[]; // 这条积木中的所有积木，都会按照积木的衔接顺序放进这个数组中
  blockIds: string[]; // 当前这条积木所有积木的 blockId
}
