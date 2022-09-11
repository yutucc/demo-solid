/*
 * @Author: wuqinfa
 * @Date: 2022-09-10 21:54:59
 * @LastEditors: wuqinfa
 * @Description: 
 */
import { Blocks } from '@/interface/block';

import * as data from '@/data';

import matcher from '@/matcher';
import Rope from '@/utils/rope';


export default (referBlocks: Blocks, answerBlocks: Blocks) => {
  const referRope = new Rope(referBlocks, '*sB)HodUVFs[3fs_m^e?');
  const answerRope = new Rope(answerBlocks, 'nj9Unbj#GRR]!mL%)}:e');

  const referConnections = referRope.getConnections();
  const referBlockIds = referRope.getBlockIds();
  const answerConnections = answerRope.getConnections();
  const answerBlockIds = answerRope.getBlockIds();


};
