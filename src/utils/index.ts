/*
 * @Author: wuqinfa
 * @Date: 2022-08-12 17:46:58
 * @LastEditors: wuqinfa
 * @Description:
 */

/*
获取以下数据结构中的 积木 id （简单粗暴，不用考虑什么设计原则，直接开干）
  "SUBSTACK": [
    2,
    "2dxV$n*C1TXVr@DuTZ)["
  ]
*/
export const getInputAndFieldBlockId = (key: string, value: any) => {
  if (key.includes('SUBSTACK') || key.includes('TO') || key.includes('DISTANCETOMENU')) {
    return value[1];
  }
};