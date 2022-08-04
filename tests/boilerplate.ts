import * as anchor from "@project-serum/anchor";
import test from "ava";
import ava, { ExecutionContext } from "ava";

const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const program = anchor.workspace.Boilerplate;

async function shouldInitializeContract(t: ExecutionContext) {
  const transaction = await program.rpc.initialize();
  console.log(transaction);
  t.true(true);
}

test("Should initialize contract", shouldInitializeContract);
