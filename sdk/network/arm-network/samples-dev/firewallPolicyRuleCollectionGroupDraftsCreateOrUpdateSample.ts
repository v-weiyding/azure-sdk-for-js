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
  FirewallPolicyRuleCollectionGroupDraft,
  NetworkManagementClient,
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or Update Rule Collection Group Draft.
 *
 * @summary Create or Update Rule Collection Group Draft.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-03-01/examples/FirewallPolicyRuleCollectionGroupDraftPut.json
 */
async function createOrUpdateRuleCollectionGroupDraft() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const firewallPolicyName = "firewallPolicy";
  const ruleCollectionGroupName = "ruleCollectionGroup1";
  const parameters: FirewallPolicyRuleCollectionGroupDraft = {
    priority: 100,
    ruleCollections: [
      {
        name: "Example-Filter-Rule-Collection",
        action: { type: "Deny" },
        priority: 100,
        ruleCollectionType: "FirewallPolicyFilterRuleCollection",
        rules: [
          {
            name: "network-rule1",
            destinationAddresses: ["*"],
            destinationPorts: ["*"],
            ipProtocols: ["TCP"],
            ruleType: "NetworkRule",
            sourceAddresses: ["10.1.25.0/24"],
          },
        ],
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.firewallPolicyRuleCollectionGroupDrafts.createOrUpdate(
      resourceGroupName,
      firewallPolicyName,
      ruleCollectionGroupName,
      parameters,
    );
  console.log(result);
}

async function main() {
  createOrUpdateRuleCollectionGroupDraft();
}

main().catch(console.error);
