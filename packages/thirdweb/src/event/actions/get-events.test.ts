import { describe, it, expect } from "vitest";
import { getContractEvents } from "./get-events.js";
import {
  DOODLES_CONTRACT,
  USDC_CONTRACT,
} from "../../../test/src/test-contracts.js";
import { transferEvent } from "../../extensions/erc721/events/transfer.js";
import { prepareEvent } from "../prepare-event.js";

describe("getEvents", () => {
  it("should get all events", async () => {
    const events = await getContractEvents({
      contract: USDC_CONTRACT,
      fromBlock: 19139495n - 10n,
    });
    expect(events.length).toBe(87);
  });

  it("should get individual events with signature", async () => {
    const events = await getContractEvents({
      contract: USDC_CONTRACT,
      fromBlock: 19139495n - 10n,
      events: [
        prepareEvent({
          signature: "event Burn(address indexed burner, uint256 amount)",
        }),
      ],
    });
    expect(events.length).toBe(2);
  });

  // TODO make this test pass
  it.todo("should get specified events", async () => {
    const events = await getContractEvents({
      contract: USDC_CONTRACT,
      fromBlock: 19139495n - 10n,
      events: [
        prepareEvent({
          signature: "event Burn(address indexed burner, uint256 amount)",
        }),
        prepareEvent({
          signature: {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
        }),
      ],
    });
    expect(events.length).toBe(15);
  });

  it("should get individual events with extension", async () => {
    const events = await getContractEvents({
      contract: DOODLES_CONTRACT,
      fromBlock: 19139495n - 1000n,
      events: [transferEvent()],
    });
    expect(events.length).toBe(38);
  });
});
