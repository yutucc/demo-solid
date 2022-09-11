/*
 * @Author: wuqinfa
 * @Date: 2022-08-16 17:45:32
 * @LastEditors: wuqinfa
 * @Description:
 */
export const enum RuleTypeEnum {
  common = 'common',
  special = 'special', // 用来放 “任意角色” 等特殊规则
}

export const enum RuleEnum {
  anywhere = 'anywhere', // 任意位置
}

export interface Rule {
  common: CommonRule[];
  special: any[];
}

export interface CommonRule {
  targetName: string;
  targetRules: TargetRule[];
}

export interface TargetRule {
  rootBlockId: string;
  description: string;
  score: number;
  blocksRules: BlocksRule[];
}

export interface BlocksRule {
  blockId: string;
  rule: RuleEnum;
}
