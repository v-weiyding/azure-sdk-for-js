// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ComputeScheduleClient } = require("@azure/arm-computeschedule");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list the operations for the provider
 *
 * @summary list the operations for the provider
 * x-ms-original-file: 2024-08-15-preview/Operations_List_MaximumSet_Gen.json
 */
async function operationsListMaxGeneratedByMaximumSetRuleGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.operations.list()) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to list the operations for the provider
 *
 * @summary list the operations for the provider
 * x-ms-original-file: 2024-08-15-preview/Operations_List_MinimumSet_Gen.json
 */
async function operationsListMaxGeneratedByMaximumSetRuleGeneratedByMinimumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.operations.list()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  operationsListMaxGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
  operationsListMaxGeneratedByMaximumSetRuleGeneratedByMinimumSetRule();
}

main().catch(console.error);
