/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerServiceClient } from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Contains extra metadata on the revision, including supported revisions, cluster compatibility and available upgrades
 *
 * @summary Contains extra metadata on the revision, including supported revisions, cluster compatibility and available upgrades
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/stable/2024-02-01/examples/ManagedClustersGet_MeshRevisionProfile.json
 */
async function getAMeshRevisionProfileForAMeshMode() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const location = "location1";
  const mode = "istio";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.managedClusters.getMeshRevisionProfile(
    location,
    mode,
  );
  console.log(result);
}

async function main() {
  getAMeshRevisionProfileForAMeshMode();
}

main().catch(console.error);
