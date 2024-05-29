/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DiagnosticSettingsResource, MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates diagnostic settings for the specified resource.
 *
 * @summary Creates or updates diagnostic settings for the specified resource.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-05-01-preview/examples/createOrUpdateDiagnosticSetting.json
 */
async function createsOrUpdatesTheDiagnosticSetting() {
  const resourceUri =
    "subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/resourcegroups/viruela1/providers/microsoft.logic/workflows/viruela6";
  const name = "mysetting";
  const parameters: DiagnosticSettingsResource = {
    eventHubAuthorizationRuleId:
      "/subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/resourceGroups/montest/providers/microsoft.eventhub/namespaces/mynamespace/authorizationrules/myrule",
    eventHubName: "myeventhub",
    logAnalyticsDestinationType: "Dedicated",
    logs: [
      {
        categoryGroup: "allLogs",
        enabled: true,
        retentionPolicy: { days: 0, enabled: false },
      },
    ],
    marketplacePartnerId:
      "/subscriptions/abcdeabc-1234-1234-ab12-123a1234567a/resourceGroups/test-rg/providers/Microsoft.Datadog/monitors/dd1",
    metrics: [
      {
        category: "WorkflowMetrics",
        enabled: true,
        retentionPolicy: { days: 0, enabled: false },
      },
    ],
    storageAccountId:
      "/subscriptions/df602c9c-7aa0-407d-a6fb-eb20c8bd1192/resourceGroups/apptest/providers/Microsoft.Storage/storageAccounts/appteststorage1",
    workspaceId: "",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential);
  const result = await client.diagnosticSettings.createOrUpdate(
    resourceUri,
    name,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates diagnostic settings for the specified resource.
 *
 * @summary Creates or updates diagnostic settings for the specified resource.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-05-01-preview/examples/createOrUpdateDiagnosticSettingCategory.json
 */
async function createsOrUpdatesTheDiagnosticSettingForCategory() {
  const resourceUri =
    "subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/resourcegroups/viruela1/providers/microsoft.logic/workflows/viruela6";
  const name = "mysetting";
  const parameters: DiagnosticSettingsResource = {
    eventHubAuthorizationRuleId:
      "/subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/resourceGroups/montest/providers/microsoft.eventhub/namespaces/mynamespace/authorizationrules/myrule",
    eventHubName: "myeventhub",
    logAnalyticsDestinationType: "Dedicated",
    logs: [
      {
        category: "WorkflowRuntime",
        enabled: true,
        retentionPolicy: { days: 0, enabled: false },
      },
    ],
    marketplacePartnerId:
      "/subscriptions/abcdeabc-1234-1234-ab12-123a1234567a/resourceGroups/test-rg/providers/Microsoft.Datadog/monitors/dd1",
    metrics: [
      {
        category: "WorkflowMetrics",
        enabled: true,
        retentionPolicy: { days: 0, enabled: false },
      },
    ],
    storageAccountId:
      "/subscriptions/df602c9c-7aa0-407d-a6fb-eb20c8bd1192/resourceGroups/apptest/providers/Microsoft.Storage/storageAccounts/appteststorage1",
    workspaceId: "",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential);
  const result = await client.diagnosticSettings.createOrUpdate(
    resourceUri,
    name,
    parameters,
  );
  console.log(result);
}

async function main() {
  createsOrUpdatesTheDiagnosticSetting();
  createsOrUpdatesTheDiagnosticSettingForCategory();
}

main().catch(console.error);
