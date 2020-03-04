/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import defaultExportSameBasename from './defaultExportSameBasename';
import disallowVar from './disallowVar';
import emptyBlocks from './emptyBlocks';
import getterReturn from './getterReturn';
import noAsyncPromiseExecutor from './noAsyncPromiseExecutor';
import noCompareNegZero from './noCompareNegZero';
import noDuplicateKeys from './noDuplicateKeys';
import noLabelVar from './noLabelVar';
import undeclaredVariables from './undeclaredVariables';
import unsafeNegation from './unsafeNegation';
import unusedVariables from './unusedVariables';

export const lintTransforms = [
  defaultExportSameBasename,
  disallowVar,
  emptyBlocks,
  getterReturn,
  noAsyncPromiseExecutor,
  noCompareNegZero,
  noDuplicateKeys,
  noLabelVar,
  undeclaredVariables,
  unsafeNegation,
  unusedVariables,
];
