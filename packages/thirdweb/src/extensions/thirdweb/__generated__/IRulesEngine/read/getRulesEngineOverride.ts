import { readContract } from "../../../../../transaction/read-contract.js";
import type { BaseTransactionOptions } from "../../../../../transaction/types.js";

import { decodeAbiParameters } from "viem";
import type { Hex } from "../../../../../utils/encoding/hex.js";

const FN_SELECTOR = "0xa7145eb4" as const;
const FN_INPUTS = [] as const;
const FN_OUTPUTS = [
  {
    type: "address",
    name: "rulesEngineAddress",
  },
] as const;

/**
 * Decodes the result of the getRulesEngineOverride function call.
 * @param result - The hexadecimal result to decode.
 * @returns The decoded result as per the FN_OUTPUTS definition.
 * @extension THIRDWEB
 * @example
 * ```ts
 * import { decodeGetRulesEngineOverrideResult } from "thirdweb/extensions/thirdweb";
 * const result = decodeGetRulesEngineOverrideResult("...");
 * ```
 */
export function decodeGetRulesEngineOverrideResult(result: Hex) {
  return decodeAbiParameters(FN_OUTPUTS, result)[0];
}

/**
 * Calls the "getRulesEngineOverride" function on the contract.
 * @param options - The options for the getRulesEngineOverride function.
 * @returns The parsed result of the function call.
 * @extension THIRDWEB
 * @example
 * ```ts
 * import { getRulesEngineOverride } from "thirdweb/extensions/thirdweb";
 *
 * const result = await getRulesEngineOverride();
 *
 * ```
 */
export async function getRulesEngineOverride(options: BaseTransactionOptions) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS] as const,
    params: [],
  });
}
