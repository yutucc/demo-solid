/*
 * @Author: wuqinfa
 * @Date: 2022-09-09 15:37:34
 * @LastEditors: wuqinfa
 * @Description:
 */

import { InputsAndFieldsKeyEnum } from '@/interface/block';
import { Translation } from '@/interface/translator';

import { caseA, caseB, caseC, caseD } from '@/translator/case';

abstract class AbstractTranslator {
  protected key: InputsAndFieldsKeyEnum;
  protected value: any;
  protected translation: Translation | null = null;

  constructor(key: InputsAndFieldsKeyEnum, value: any) {
    this.key = key;
    this.value = value;
  }

  abstract get(): Translation;
}

class Translator extends AbstractTranslator {
  constructor(key: InputsAndFieldsKeyEnum, value: any) {
    super(key, value);

    this.case();
  }

  get(): Translation {
    if (this.translation === null) {
      throw new Error(`翻译出错  key: ${this.key}  value: ${JSON.stringify(this.value)}`);
    }

    return this.translation as Translation;
  }

  private case() {
    let caseResult = undefined;

    caseResult = caseA(this.key, this.value);
    if (caseResult !== undefined) {
      this.translation = caseResult;
      return;
    }

    caseResult = caseB(this.key, this.value);
    if (caseResult !== undefined) {
      this.translation = caseResult;
      return;
    }

    caseResult = caseC(this.key, this.value);
    if (caseResult !== undefined) {
      this.translation = caseResult;
      return;
    }

    caseResult = caseD(this.key, this.value);
    if (caseResult !== undefined) {
      this.translation = caseResult;
      return;
    }
  }
}

export default Translator;
