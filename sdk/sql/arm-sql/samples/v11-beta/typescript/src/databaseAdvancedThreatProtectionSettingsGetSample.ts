/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a database's Advanced Threat Protection state.
 *
 * @summary Gets a database's Advanced Threat Protection state.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-11-01-preview/examples/DatabaseAdvancedThreatProtectionSettingsGet.json
 */
async function getADatabaseAdvancedThreatProtectionSettings() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "threatprotection-6852";
  const serverName = "threatprotection-2080";
  const databaseName = "testdb";
  const advancedThreatProtectionName = "Default";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databaseAdvancedThreatProtectionSettings.get(
    resourceGroupName,
    serverName,
    databaseName,
    advancedThreatProtectionName,
  );
  console.log(result);
}

async function main() {
  getADatabaseAdvancedThreatProtectionSettings();
}

main().catch(console.error);
