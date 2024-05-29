/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates the specified Network Virtual Appliance Inbound Security Rules.
 *
 * @summary Creates or updates the specified Network Virtual Appliance Inbound Security Rules.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-09-01/examples/InboundSecurityRulePut.json
 */
async function createNetworkVirtualApplianceInboundSecurityRules() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkVirtualApplianceName = "nva";
  const ruleCollectionName = "rule1";
  const parameters = {
    rules: [
      {
        destinationPortRange: 22,
        sourceAddressPrefix: "50.20.121.5/32",
        protocol: "TCP",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.inboundSecurityRuleOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    networkVirtualApplianceName,
    ruleCollectionName,
    parameters,
  );
  console.log(result);
}

async function main() {
  createNetworkVirtualApplianceInboundSecurityRules();
}

main().catch(console.error);
