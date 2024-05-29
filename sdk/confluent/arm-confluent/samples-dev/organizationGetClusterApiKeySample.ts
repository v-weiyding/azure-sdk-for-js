/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ConfluentManagementClient } from "@azure/arm-confluent";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get API key details of a kafka or schema registry cluster
 *
 * @summary Get API key details of a kafka or schema registry cluster
 * x-ms-original-file: specification/confluent/resource-manager/Microsoft.Confluent/stable/2024-02-13/examples/Organization_GetClusterAPIKey.json
 */
async function organizationGetClusterApiKey() {
  const subscriptionId =
    process.env["CONFLUENT_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONFLUENT_RESOURCE_GROUP"] || "myResourceGroup";
  const organizationName = "myOrganization";
  const apiKeyId = "apiKeyId-123";
  const credential = new DefaultAzureCredential();
  const client = new ConfluentManagementClient(credential, subscriptionId);
  const result = await client.organization.getClusterAPIKey(
    resourceGroupName,
    organizationName,
    apiKeyId,
  );
  console.log(result);
}

async function main() {
  organizationGetClusterApiKey();
}

main().catch(console.error);
