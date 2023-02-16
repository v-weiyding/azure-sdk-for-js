/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ServiceBusManagementClient } from "@azure/arm-servicebus";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns the specified authorization rule.
 *
 * @summary Returns the specified authorization rule.
 * x-ms-original-file: specification/servicebus/resource-manager/Microsoft.ServiceBus/preview/2022-10-01-preview/examples/Topics/SBTopicAuthorizationRuleGet.json
 */
async function topicAuthorizationRuleGet() {
  const subscriptionId =
    process.env["SERVICEBUS_SUBSCRIPTION_ID"] ||
    "5f750a97-50d9-4e36-8081-c9ee4c0210d4";
  const resourceGroupName =
    process.env["SERVICEBUS_RESOURCE_GROUP"] || "ArunMonocle";
  const namespaceName = "sdk-Namespace-6261";
  const topicName = "sdk-Topics-1984";
  const authorizationRuleName = "sdk-AuthRules-4310";
  const credential = new DefaultAzureCredential();
  const client = new ServiceBusManagementClient(credential, subscriptionId);
  const result = await client.topics.getAuthorizationRule(
    resourceGroupName,
    namespaceName,
    topicName,
    authorizationRuleName
  );
  console.log(result);
}

async function main() {
  topicAuthorizationRuleGet();
}

main().catch(console.error);