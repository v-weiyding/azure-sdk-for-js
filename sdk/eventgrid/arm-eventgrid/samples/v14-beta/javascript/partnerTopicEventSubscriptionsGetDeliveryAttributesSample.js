/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get all delivery attributes for an event subscription of a partner topic.
 *
 * @summary Get all delivery attributes for an event subscription of a partner topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2023-06-01-preview/examples/PartnerTopicEventSubscriptions_GetDeliveryAttributes.json
 */
async function partnerTopicEventSubscriptionsGetDeliveryAttributes() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName = process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const partnerTopicName = "examplePartnerTopic1";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerTopicEventSubscriptions.getDeliveryAttributes(
    resourceGroupName,
    partnerTopicName,
    eventSubscriptionName
  );
  console.log(result);
}

async function main() {
  partnerTopicEventSubscriptionsGetDeliveryAttributes();
}

main().catch(console.error);