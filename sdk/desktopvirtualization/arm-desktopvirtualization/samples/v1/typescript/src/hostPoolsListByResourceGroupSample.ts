/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  HostPoolsListByResourceGroupOptionalParams,
  DesktopVirtualizationAPIClient
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List hostPools.
 *
 * @summary List hostPools.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/stable/2022-09-09/examples/HostPool_ListByResourceGroup.json
 */
async function hostPoolListByResourceGroup() {
  const subscriptionId =
    process.env["DESKTOPVIRTUALIZATION_SUBSCRIPTION_ID"] ||
    "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName =
    process.env["DESKTOPVIRTUALIZATION_RESOURCE_GROUP"] || "resourceGroup1";
  const pageSize = 10;
  const isDescending = true;
  const initialSkip = 0;
  const options: HostPoolsListByResourceGroupOptionalParams = {
    pageSize,
    isDescending,
    initialSkip
  };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.hostPools.listByResourceGroup(
    resourceGroupName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  hostPoolListByResourceGroup();
}

main().catch(console.error);