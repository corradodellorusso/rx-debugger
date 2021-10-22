import {
  audit as auditRxjs,
  auditTime as auditTimeRxjs,
  buffer as bufferRxjs,
  bufferCount as bufferCountRxjs,
  bufferTime as bufferTimeRxjs,
  bufferToggle as bufferToggleRxjs,
  bufferWhen as bufferWhenRxjs,
  catchError as catchErrorRxjs,
  combineAll as combineAllRxjs,
  combineLatest as combineLatestRxjs,
  combineLatestAll as combineLatestAllRxjs,
  combineLatestWith as combineLatestWithRxjs,
  concat as concatRxjs,
  concatAll as concatAllRxjs,
  concatMap as concatMapRxjs,
  concatMapTo as concatMapToRxjs,
  concatWith as concatWithRxjs,
  connect as connectRxjs,
  count as countRxjs,
  debounce as debounceRxjs,
  debounceTime as debounceTimeRxjs,
  defaultIfEmpty as defaultIfEmptyRxjs,
  delay as delayRxjs,
  delayWhen as delayWhenRxjs,
  dematerialize as dematerializeRxjs,
  distinct as distinctRxjs,
  distinctUntilChanged as distinctUntilChangedRxjs,
  distinctUntilKeyChanged as distinctUntilKeyChangedRxjs,
  elementAt as elementAtRxjs,
  endWith as endWithRxjs,
  every as everyRxjs,
  exhaust as exhaustRxjs,
  exhaustAll as exhaustAllRxjs,
  exhaustMap as exhaustMapRxjs,
  expand as expandRxjs,
  filter as filterRxjs,
  finalize as finalizeRxjs,
  find as findRxjs,
  findIndex as findIndexRxjs,
  first as firstRxjs,
  flatMap as flatMapRxjs,
  groupBy as groupByRxjs,
  ignoreElements as ignoreElementsRxjs,
  isEmpty as isEmptyRxjs,
  last as lastRxjs,
  map as mapRxjs,
  mapTo as mapToRxjs,
  materialize as materializeRxjs,
  max as maxRxjs,
  merge as mergeRxjs,
  mergeAll as mergeAllRxjs,
  mergeMap as mergeMapRxjs,
  mergeMapTo as mergeMapToRxjs,
  mergeScan as mergeScanRxjs,
  mergeWith as mergeWithRxjs,
  min as minRxjs,
  multicast as multicastRxjs,
  observeOn as observeOnRxjs,
  onErrorResumeNext as onErrorResumeNextRxjs,
  pairwise as pairwiseRxjs,
  partition as partitionRxjs,
  pluck as pluckRxjs,
  publish as publishRxjs,
  publishBehavior as publishBehaviorRxjs,
  publishLast as publishLastRxjs,
  publishReplay as publishReplayRxjs,
  race as raceRxjs,
  raceWith as raceWithRxjs,
  reduce as reduceRxjs,
  refCount as refCountRxjs,
  repeat as repeatRxjs,
  repeatWhen as repeatWhenRxjs,
  retry as retryRxjs,
  retryWhen as retryWhenRxjs,
  sample as sampleRxjs,
  sampleTime as sampleTimeRxjs,
  scan as scanRxjs,
  sequenceEqual as sequenceEqualRxjs,
  share as shareRxjs,
  shareReplay as shareReplayRxjs,
  single as singleRxjs,
  skip as skipRxjs,
  skipLast as skipLastRxjs,
  skipUntil as skipUntilRxjs,
  skipWhile as skipWhileRxjs,
  startWith as startWithRxjs,
  subscribeOn as subscribeOnRxjs,
  switchAll as switchAllRxjs,
  switchMap as switchMapRxjs,
  switchMapTo as switchMapToRxjs,
  switchScan as switchScanRxjs,
  take as takeRxjs,
  takeLast as takeLastRxjs,
  takeUntil as takeUntilRxjs,
  takeWhile as takeWhileRxjs,
  tap as tapRxjs,
  throttle as throttleRxjs,
  throttleTime as throttleTimeRxjs,
  throwIfEmpty as throwIfEmptyRxjs,
  timeInterval as timeIntervalRxjs,
  timeout as timeoutRxjs,
  timeoutWith as timeoutWithRxjs,
  timestamp as timestampRxjs,
  toArray as toArrayRxjs,
  window as windowRxjs,
  windowCount as windowCountRxjs,
  windowTime as windowTimeRxjs,
  windowToggle as windowToggleRxjs,
  windowWhen as windowWhenRxjs,
  withLatestFrom as withLatestFromRxjs,
  zip as zipRxjs,
  zipAll as zipAllRxjs,
  zipWith as zipWithRxjs,
} from 'rxjs/operators';
import { META_OPERATOR_NAME_KEY } from '../common/interface';

function patchOperator(operator: any, name: string) {
  return new Proxy(operator, {
    apply(target: Function, thisArg: any, argArray: any[]): any {
      const result = target(...argArray);
      result[META_OPERATOR_NAME_KEY] = name;
      return result;
    },
  });
}

export const audit: typeof auditRxjs = patchOperator(auditRxjs, 'audit');
export const auditTime: typeof auditTimeRxjs = patchOperator(auditTimeRxjs, 'auditTime');
export const buffer: typeof bufferRxjs = patchOperator(bufferRxjs, 'buffer');
export const bufferCount: typeof bufferCountRxjs = patchOperator(bufferCountRxjs, 'bufferCount');
export const bufferTime: typeof bufferTimeRxjs = patchOperator(bufferTimeRxjs, 'bufferTime');
export const bufferToggle: typeof bufferToggleRxjs = patchOperator(bufferToggleRxjs, 'bufferToggle');
export const bufferWhen: typeof bufferWhenRxjs = patchOperator(bufferWhenRxjs, 'bufferWhen');
export const catchError: typeof catchErrorRxjs = patchOperator(catchErrorRxjs, 'catchError');
export const combineAll: typeof combineAllRxjs = patchOperator(combineAllRxjs, 'combineAll');
export const combineLatestAll: typeof combineLatestAllRxjs = patchOperator(combineLatestAllRxjs, 'combineLatestAll');
export const combineLatest: typeof combineLatestRxjs = patchOperator(combineLatestRxjs, 'combineLatest');
export const combineLatestWith: typeof combineLatestWithRxjs = patchOperator(combineLatestWithRxjs, 'combineLatestWith');
export const concat: typeof concatRxjs = patchOperator(concatRxjs, 'concat');
export const concatAll: typeof concatAllRxjs = patchOperator(concatAllRxjs, 'concatAll');
export const concatMap: typeof concatMapRxjs = patchOperator(concatMapRxjs, 'concatMap');
export const concatMapTo: typeof concatMapToRxjs = patchOperator(concatMapToRxjs, 'concatMapTo');
export const concatWith: typeof concatWithRxjs = patchOperator(concatWithRxjs, 'concatWith');
export const connect: typeof connectRxjs = patchOperator(connectRxjs, 'connect');
export const count: typeof countRxjs = patchOperator(countRxjs, 'count');
export const debounce: typeof debounceRxjs = patchOperator(debounceRxjs, 'debounce');
export const debounceTime: typeof debounceTimeRxjs = patchOperator(debounceTimeRxjs, 'debounceTime');
export const defaultIfEmpty: typeof defaultIfEmptyRxjs = patchOperator(defaultIfEmptyRxjs, 'defaultIfEmpty');
export const delay: typeof delayRxjs = patchOperator(delayRxjs, 'delay');
export const delayWhen: typeof delayWhenRxjs = patchOperator(delayWhenRxjs, 'delayWhen');
export const dematerialize: typeof dematerializeRxjs = patchOperator(dematerializeRxjs, 'dematerialize');
export const distinct: typeof distinctRxjs = patchOperator(distinctRxjs, 'distinct');
export const distinctUntilChanged: typeof distinctUntilChangedRxjs = patchOperator(distinctUntilChangedRxjs, 'distinctUntilChanged');
export const distinctUntilKeyChanged: typeof distinctUntilKeyChangedRxjs = patchOperator(
  distinctUntilKeyChangedRxjs,
  'distinctUntilKeyChanged'
);
export const elementAt: typeof elementAtRxjs = patchOperator(elementAtRxjs, 'elementAt');
export const endWith: typeof endWithRxjs = patchOperator(endWithRxjs, 'endWith');
export const every: typeof everyRxjs = patchOperator(everyRxjs, 'every');
export const exhaust: typeof exhaustRxjs = patchOperator(exhaustRxjs, 'exhaust');
export const exhaustAll: typeof exhaustAllRxjs = patchOperator(exhaustAllRxjs, 'exhaustAll');
export const exhaustMap: typeof exhaustMapRxjs = patchOperator(exhaustMapRxjs, 'exhaustMap');
export const expand: typeof expandRxjs = patchOperator(expandRxjs, 'expand');
export const filter: typeof filterRxjs = patchOperator(filterRxjs, 'filter');
export const finalize: typeof finalizeRxjs = patchOperator(finalizeRxjs, 'finalize');
export const find: typeof findRxjs = patchOperator(findRxjs, 'find');
export const findIndex: typeof findIndexRxjs = patchOperator(findIndexRxjs, 'findIndex');
export const first: typeof firstRxjs = patchOperator(firstRxjs, 'first');
export const groupBy: typeof groupByRxjs = patchOperator(groupByRxjs, 'groupBy');
export const ignoreElements: typeof ignoreElementsRxjs = patchOperator(ignoreElementsRxjs, 'ignoreElements');
export const isEmpty: typeof isEmptyRxjs = patchOperator(isEmptyRxjs, 'isEmpty');
export const last: typeof lastRxjs = patchOperator(lastRxjs, 'last');
export const map: typeof mapRxjs = patchOperator(mapRxjs, 'map');
export const mapTo: typeof mapToRxjs = patchOperator(mapToRxjs, 'mapTo');
export const materialize: typeof materializeRxjs = patchOperator(materializeRxjs, 'materialize');
export const max: typeof maxRxjs = patchOperator(maxRxjs, 'max');
export const merge: typeof mergeRxjs = patchOperator(mergeRxjs, 'merge');
export const mergeAll: typeof mergeAllRxjs = patchOperator(mergeAllRxjs, 'mergeAll');
export const flatMap: typeof flatMapRxjs = patchOperator(flatMapRxjs, 'flatMap');
export const mergeMap: typeof mergeMapRxjs = patchOperator(mergeMapRxjs, 'mergeMap');
export const mergeMapTo: typeof mergeMapToRxjs = patchOperator(mergeMapToRxjs, 'mergeMapTo');
export const mergeScan: typeof mergeScanRxjs = patchOperator(mergeScanRxjs, 'mergeScan');
export const mergeWith: typeof mergeWithRxjs = patchOperator(mergeWithRxjs, 'mergeWith');
export const min: typeof minRxjs = patchOperator(minRxjs, 'min');
export const multicast: typeof multicastRxjs = patchOperator(multicastRxjs, 'multicast');
export const observeOn: typeof observeOnRxjs = patchOperator(observeOnRxjs, 'observeOn');
export const onErrorResumeNext: typeof onErrorResumeNextRxjs = patchOperator(onErrorResumeNextRxjs, 'onErrorResumeNext');
export const pairwise: typeof pairwiseRxjs = patchOperator(pairwiseRxjs, 'pairwise');
export const partition: typeof partitionRxjs = patchOperator(partitionRxjs, 'partition');
export const pluck: typeof pluckRxjs = patchOperator(pluckRxjs, 'pluck');
export const publish: typeof publishRxjs = patchOperator(publishRxjs, 'publish');
export const publishBehavior: typeof publishBehaviorRxjs = patchOperator(publishBehaviorRxjs, 'publishBehavior');
export const publishLast: typeof publishLastRxjs = patchOperator(publishLastRxjs, 'publishLast');
export const publishReplay: typeof publishReplayRxjs = patchOperator(publishReplayRxjs, 'publishReplay');
export const race: typeof raceRxjs = patchOperator(raceRxjs, 'race');
export const raceWith: typeof raceWithRxjs = patchOperator(raceWithRxjs, 'raceWith');
export const reduce: typeof reduceRxjs = patchOperator(reduceRxjs, 'reduce');
export const repeat: typeof repeatRxjs = patchOperator(repeatRxjs, 'repeat');
export const repeatWhen: typeof repeatWhenRxjs = patchOperator(repeatWhenRxjs, 'repeatWhen');
export const retry: typeof retryRxjs = patchOperator(retryRxjs, 'retry');
export const retryWhen: typeof retryWhenRxjs = patchOperator(retryWhenRxjs, 'retryWhen');
export const refCount: typeof refCountRxjs = patchOperator(refCountRxjs, 'refCount');
export const sample: typeof sampleRxjs = patchOperator(sampleRxjs, 'sample');
export const sampleTime: typeof sampleTimeRxjs = patchOperator(sampleTimeRxjs, 'sampleTime');
export const scan: typeof scanRxjs = patchOperator(scanRxjs, 'scan');
export const sequenceEqual: typeof sequenceEqualRxjs = patchOperator(sequenceEqualRxjs, 'sequenceEqual');
export const share: typeof shareRxjs = patchOperator(shareRxjs, 'share');
export const shareReplay: typeof shareReplayRxjs = patchOperator(shareReplayRxjs, 'shareReplay');
export const single: typeof singleRxjs = patchOperator(singleRxjs, 'single');
export const skip: typeof skipRxjs = patchOperator(skipRxjs, 'skip');
export const skipLast: typeof skipLastRxjs = patchOperator(skipLastRxjs, 'skipLast');
export const skipUntil: typeof skipUntilRxjs = patchOperator(skipUntilRxjs, 'skipUntil');
export const skipWhile: typeof skipWhileRxjs = patchOperator(skipWhileRxjs, 'skipWhile');
export const startWith: typeof startWithRxjs = patchOperator(startWithRxjs, 'startWith');
export const subscribeOn: typeof subscribeOnRxjs = patchOperator(subscribeOnRxjs, 'subscribeOn');
export const switchAll: typeof switchAllRxjs = patchOperator(switchAllRxjs, 'switchAll');
export const switchMap: typeof switchMapRxjs = patchOperator(switchMapRxjs, 'switchMap');
export const switchMapTo: typeof switchMapToRxjs = patchOperator(switchMapToRxjs, 'switchMapTo');
export const switchScan: typeof switchScanRxjs = patchOperator(switchScanRxjs, 'switchScan');
export const take: typeof takeRxjs = patchOperator(takeRxjs, 'take');
export const takeLast: typeof takeLastRxjs = patchOperator(takeLastRxjs, 'takeLast');
export const takeUntil: typeof takeUntilRxjs = patchOperator(takeUntilRxjs, 'takeUntil');
export const takeWhile: typeof takeWhileRxjs = patchOperator(takeWhileRxjs, 'takeWhile');
export const tap: typeof tapRxjs = patchOperator(tapRxjs, 'tap');
export const throttle: typeof throttleRxjs = patchOperator(throttleRxjs, 'throttle');
export const throttleTime: typeof throttleTimeRxjs = patchOperator(throttleTimeRxjs, 'throttleTime');
export const throwIfEmpty: typeof throwIfEmptyRxjs = patchOperator(throwIfEmptyRxjs, 'throwIfEmpty');
export const timeInterval: typeof timeIntervalRxjs = patchOperator(timeIntervalRxjs, 'timeInterval');
export const timeout: typeof timeoutRxjs = patchOperator(timeoutRxjs, 'timeout');
export const timeoutWith: typeof timeoutWithRxjs = patchOperator(timeoutWithRxjs, 'timeoutWith');
export const timestamp: typeof timestampRxjs = patchOperator(timestampRxjs, 'timestamp');
export const toArray: typeof toArrayRxjs = patchOperator(toArrayRxjs, 'toArray');
export const window: typeof windowRxjs = patchOperator(windowRxjs, 'window');
export const windowCount: typeof windowCountRxjs = patchOperator(windowCountRxjs, 'windowCount');
export const windowTime: typeof windowTimeRxjs = patchOperator(windowTimeRxjs, 'windowTime');
export const windowToggle: typeof windowToggleRxjs = patchOperator(windowToggleRxjs, 'windowToggle');
export const windowWhen: typeof windowWhenRxjs = patchOperator(windowWhenRxjs, 'windowWhen');
export const withLatestFrom: typeof withLatestFromRxjs = patchOperator(withLatestFromRxjs, 'withLatestFrom');
export const zip: typeof zipRxjs = patchOperator(zipRxjs, 'zip');
export const zipAll: typeof zipAllRxjs = patchOperator(zipAllRxjs, 'zipAll');
export const zipWith: typeof zipWithRxjs = patchOperator(zipWithRxjs, 'zipWith');
