// convince abitype that things are OK
declare module "abitype" {
  export interface Register {
    AddressType: string;
  }
}

// client
export {
  createClient,
  type CreateClientOptions,
  type ThirdwebClient,
} from "./client/client.js";

// contract
export {
  getContract,
  type ContractOptions,
  type ThirdwebContract,
} from "./contract/index.js";

// transactions

export {
  prepareTransaction,
  type TransactionOptions,
  type Transaction,
} from "./transaction/transaction.js";

// transaction actions
export { encode } from "./transaction/actions/encode.js";
export { estimateGas } from "./transaction/actions/estimate-gas.js";
export { readContract, readTransaction } from "./transaction/actions/read.js";
export { waitForReceipt } from "./transaction/actions/wait-for-tx-receipt.js";
export { sendTransaction } from "./transaction/actions/send-transaction.js";

// events
export {
  prepareEvent,
  type ContractEventOptions,
  type ContractEvent,
} from "./event/event.js";

// event actions
export {
  watchEvents,
  type WatchContractEventsOptions,
} from "./event/actions/watch-events.js";
export {
  getEvents,
  type GetContractEventsOptions,
} from "./event/actions/get-events.js";