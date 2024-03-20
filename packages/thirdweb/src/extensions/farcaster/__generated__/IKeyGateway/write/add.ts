import type { BaseTransactionOptions } from "../../../../../transaction/types.js";
import { prepareContractCall } from "../../../../../transaction/prepare-contract-call.js";
import type { AbiParameterToPrimitiveType } from "abitype";
import type { Prettify } from "../../../../../utils/type-utils.js";

/**
 * Represents the parameters for the "add" function.
 */

type AddParamsInternal = {
  keyType: AbiParameterToPrimitiveType<{ type: "uint32"; name: "keyType" }>;
  key: AbiParameterToPrimitiveType<{ type: "bytes"; name: "key" }>;
  metadataType: AbiParameterToPrimitiveType<{
    type: "uint8";
    name: "metadataType";
  }>;
  metadata: AbiParameterToPrimitiveType<{ type: "bytes"; name: "metadata" }>;
};

export type AddParams = Prettify<
  | AddParamsInternal
  | {
      asyncParams: () => Promise<AddParamsInternal>;
    }
>;
/**
 * Calls the "add" function on the contract.
 * @param options - The options for the "add" function.
 * @returns A prepared transaction object.
 * @extension FARCASTER
 * @example
 * ```
 * import { add } from "thirdweb/extensions/farcaster";
 *
 * const transaction = add({
 *  keyType: ...,
 *  key: ...,
 *  metadataType: ...,
 *  metadata: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function add(options: BaseTransactionOptions<AddParams>) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0x22b1a414",
      [
        {
          type: "uint32",
          name: "keyType",
        },
        {
          type: "bytes",
          name: "key",
        },
        {
          type: "uint8",
          name: "metadataType",
        },
        {
          type: "bytes",
          name: "metadata",
        },
      ],
      [],
    ],
    params:
      "asyncParams" in options
        ? async () => {
            const resolvedParams = await options.asyncParams();
            return [
              resolvedParams.keyType,
              resolvedParams.key,
              resolvedParams.metadataType,
              resolvedParams.metadata,
            ] as const;
          }
        : [
            options.keyType,
            options.key,
            options.metadataType,
            options.metadata,
          ],
  });
}