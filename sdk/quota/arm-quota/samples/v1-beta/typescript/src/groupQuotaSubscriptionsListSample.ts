/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureQuotaExtensionAPI } from "@azure/arm-quota";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns a list of the subscriptionIds associated with the GroupQuotas.
 *
 * @summary Returns a list of the subscriptionIds associated with the GroupQuotas.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/preview/2023-06-01-preview/examples/GroupQuotasSubscriptions/ListGroupQuotaSubscriptions.json
 */
async function groupQuotaSubscriptionsListSubscriptions() {
  const managementGroupId = "E7EC67B3-7657-4966-BFFC-41EFD36BAA09";
  const groupQuotaName = "groupquota1";
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const resArray = new Array();
  for await (let item of client.groupQuotaSubscriptions.list(managementGroupId, groupQuotaName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  groupQuotaSubscriptionsListSubscriptions();
}

main().catch(console.error);
