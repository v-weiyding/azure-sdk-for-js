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
  TrustedAccessRoleBinding,
  ContainerServiceClient,
} from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a trusted access role binding
 *
 * @summary Create or update a trusted access role binding
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/stable/2024-09-01/examples/TrustedAccessRoleBindings_CreateOrUpdate.json
 */
async function createOrUpdateATrustedAccessRoleBinding() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const resourceName = "clustername1";
  const trustedAccessRoleBindingName = "binding1";
  const trustedAccessRoleBinding: TrustedAccessRoleBinding = {
    roles: [
      "Microsoft.MachineLearningServices/workspaces/reader",
      "Microsoft.MachineLearningServices/workspaces/writer",
    ],
    sourceResourceId:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/b/providers/Microsoft.MachineLearningServices/workspaces/c",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result =
    await client.trustedAccessRoleBindings.beginCreateOrUpdateAndWait(
      resourceGroupName,
      resourceName,
      trustedAccessRoleBindingName,
      trustedAccessRoleBinding,
    );
  console.log(result);
}

async function main() {
  createOrUpdateATrustedAccessRoleBinding();
}

main().catch(console.error);
