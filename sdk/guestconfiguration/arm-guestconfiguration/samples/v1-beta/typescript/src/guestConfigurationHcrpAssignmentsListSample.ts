/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { GuestConfigurationClient } from "@azure/arm-guestconfiguration";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all guest configuration assignments for an ARC machine.
 *
 * @summary List all guest configuration assignments for an ARC machine.
 * x-ms-original-file: specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/stable/2022-01-25/examples/listGuestConfigurationHCRPAssignments.json
 */
async function listAllGuestConfigurationAssignmentsForAVirtualMachine() {
  const subscriptionId =
    process.env["GUESTCONFIGURATION_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const resourceGroupName =
    process.env["GUESTCONFIGURATION_RESOURCE_GROUP"] || "myResourceGroupName";
  const machineName = "myMachineName";
  const credential = new DefaultAzureCredential();
  const client = new GuestConfigurationClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.guestConfigurationHcrpAssignments.list(
    resourceGroupName,
    machineName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAllGuestConfigurationAssignmentsForAVirtualMachine();
}

main().catch(console.error);
