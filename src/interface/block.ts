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
  readonly opcode: string; // opcode 可以理解成积木的类型
  readonly next: string | null; // 下一个积木的 积木id
  readonly parent: string | null; // 上一个积木的 积木id
  readonly inputs: InputsAndFields; // 积木中包含的内容
  readonly fields: InputsAndFields; // 积木中包含的内容（一共有 inputs 和 fields 两种类型的内容）
  readonly shadow: boolean; // 是否处于 shadow 状态（对这次需求来说木有作用）
  readonly topLevel: boolean; // 是否处于 topLevel 状态（对这次需求来说木有作用）
  readonly x?: number; // 积木在画板中的 X 坐标（对这次需求来说木有作用）
  readonly y?: number; // 积木在画板中的 Y 坐标（对这次需求来说木有作用）
  readonly id?: string; // 积木id
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
