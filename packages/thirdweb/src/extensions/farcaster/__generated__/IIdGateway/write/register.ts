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
 * Represents the parameters for the "register" function.
 */
export type RegisterParams = WithOverrides<{
  recovery: AbiParameterToPrimitiveType<{ type: "address"; name: "recovery" }>;
  extraStorage: AbiParameterToPrimitiveType<{
    type: "uint256";
    name: "extraStorage";
  }>;
}>;

export const FN_SELECTOR = "0x6d705ebb" as const;
const FN_INPUTS = [
  {
    type: "address",
    name: "recovery",
  },
  {
    type: "uint256",
    name: "extraStorage",
  },
] as const;
const FN_OUTPUTS = [
  {
    type: "uint256",
    name: "fid",
  },
  {
    type: "uint256",
    name: "overpayment",
  },
] as const;

/**
 * Checks if the `register` method is supported by the given contract.
 * @param contract The ThirdwebContract.
 * @returns A promise that resolves to a boolean indicating if the `register` method is supported.
 * @extension FARCASTER
 * @example
 * ```ts
 * import { isRegisterSupported } from "thirdweb/extensions/farcaster";
 *
 * const supported = await isRegisterSupported(contract);
 * ```
 */
export async function isRegisterSupported(contract: ThirdwebContract<any>) {
  return detectMethod({
    contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS] as const,
  });
}

/**
 * Encodes the parameters for the "register" function.
 * @param options - The options for the register function.
 * @returns The encoded ABI parameters.
 * @extension FARCASTER
 * @example
 * ```ts
 * import { encodeRegisterParams } "thirdweb/extensions/farcaster";
 * const result = encodeRegisterParams({
 *  recovery: ...,
 *  extraStorage: ...,
 * });
 * ```
 */
export function encodeRegisterParams(options: RegisterParams) {
  return encodeAbiParameters(FN_INPUTS, [
    options.recovery,
    options.extraStorage,
  ]);
}

/**
 * Encodes the "register" function into a Hex string with its parameters.
 * @param options - The options for the register function.
 * @returns The encoded hexadecimal string.
 * @extension FARCASTER
 * @example
 * ```ts
 * import { encodeRegister } "thirdweb/extensions/farcaster";
 * const result = encodeRegister({
 *  recovery: ...,
 *  extraStorage: ...,
 * });
 * ```
 */
export function encodeRegister(options: RegisterParams) {
  // we do a "manual" concat here to avoid the overhead of the "concatHex" function
  // we can do this because we know the specific formats of the values
  return (FN_SELECTOR +
    encodeRegisterParams(options).slice(2)) as `${typeof FN_SELECTOR}${string}`;
}

/**
 * Calls the "register" function on the contract.
 * @param options - The options for the "register" function.
 * @returns A prepared transaction object.
 * @extension FARCASTER
 * @example
 * ```ts
 * import { register } from "thirdweb/extensions/farcaster";
 *
 * const transaction = register({
 *  contract,
 *  recovery: ...,
 *  extraStorage: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function register(
  options: BaseTransactionOptions<
    | RegisterParams
    | {
        asyncParams: () => Promise<RegisterParams>;
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
      return [resolvedOptions.recovery, resolvedOptions.extraStorage] as const;
    },
    value: async () => (await asyncOptions()).overrides?.value,
  });
}
