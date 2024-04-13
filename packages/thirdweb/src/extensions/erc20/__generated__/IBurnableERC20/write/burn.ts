import type { AbiParameterToPrimitiveType } from "abitype";
import type {
  BaseTransactionOptions,
  WithOverrides,
} from "../../../../../transaction/types.js";
import { prepareContractCall } from "../../../../../transaction/prepare-contract-call.js";
import { encodeAbiParameters } from "../../../../../utils/abi/encodeAbiParameters.js";
import { once } from "../../../../../utils/promise/once.js";
import type { ThirdwebContract } from "../../../../../contract/contract.js";
import { detectMethod } from "../../../../../utils/bytecode/detectExtension.js";

/**
 * Represents the parameters for the "burn" function.
 */
export type BurnParams = WithOverrides<{
  amount: AbiParameterToPrimitiveType<{ type: "uint256"; name: "amount" }>;
}>;

export const FN_SELECTOR = "0x42966c68" as const;
const FN_INPUTS = [
  {
    type: "uint256",
    name: "amount",
  },
] as const;
const FN_OUTPUTS = [] as const;

/**
 * Checks if the `burn` method is supported by the given contract.
 * @param contract The ThirdwebContract.
 * @returns A promise that resolves to a boolean indicating if the `burn` method is supported.
 * @extension ERC20
 * @example
 * ```ts
 * import { isBurnSupported } from "thirdweb/extensions/erc20";
 *
 * const supported = await isBurnSupported(contract);
 * ```
 */
export async function isBurnSupported(contract: ThirdwebContract<any>) {
  return detectMethod({
    contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS] as const,
  });
}

/**
 * Encodes the parameters for the "burn" function.
 * @param options - The options for the burn function.
 * @returns The encoded ABI parameters.
 * @extension ERC20
 * @example
 * ```ts
 * import { encodeBurnParams } "thirdweb/extensions/erc20";
 * const result = encodeBurnParams({
 *  amount: ...,
 * });
 * ```
 */
export function encodeBurnParams(options: BurnParams) {
  return encodeAbiParameters(FN_INPUTS, [options.amount]);
}

/**
 * Encodes the "burn" function into a Hex string with its parameters.
 * @param options - The options for the burn function.
 * @returns The encoded hexadecimal string.
 * @extension ERC20
 * @example
 * ```ts
 * import { encodeBurn } "thirdweb/extensions/erc20";
 * const result = encodeBurn({
 *  amount: ...,
 * });
 * ```
 */
export function encodeBurn(options: BurnParams) {
  // we do a "manual" concat here to avoid the overhead of the "concatHex" function
  // we can do this because we know the specific formats of the values
  return (FN_SELECTOR +
    encodeBurnParams(options).slice(2)) as `${typeof FN_SELECTOR}${string}`;
}

/**
 * Calls the "burn" function on the contract.
 * @param options - The options for the "burn" function.
 * @returns A prepared transaction object.
 * @extension ERC20
 * @example
 * ```ts
 * import { burn } from "thirdweb/extensions/erc20";
 *
 * const transaction = burn({
 *  contract,
 *  amount: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function burn(
  options: BaseTransactionOptions<
    | BurnParams
    | {
        asyncParams: () => Promise<BurnParams>;
      }
  >,
) {
  const asyncOptions = once(async () => {
    return "asyncParams" in options ? await options.asyncParams() : options;
  });

  return prepareContractCall({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS] as const,
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [resolvedOptions.amount] as const;
    },
    value: async () => (await asyncOptions()).overrides?.value,
  });
}
