/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to perform maintenance on a virtual machine.
 *
 * @summary The operation to perform maintenance on a virtual machine.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/virtualMachineExamples/VirtualMachine_PerformMaintenance_MaximumSet_Gen.json
 */
async function virtualMachinePerformMaintenanceMaximumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmName = "aaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginPerformMaintenanceAndWait(
    resourceGroupName,
    vmName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to perform maintenance on a virtual machine.
 *
 * @summary The operation to perform maintenance on a virtual machine.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-07-01/examples/virtualMachineExamples/VirtualMachine_PerformMaintenance_MinimumSet_Gen.json
 */
async function virtualMachinePerformMaintenanceMinimumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmName = "aaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginPerformMaintenanceAndWait(
    resourceGroupName,
    vmName,
  );
  console.log(result);
}

async function main() {
  virtualMachinePerformMaintenanceMaximumSetGen();
  virtualMachinePerformMaintenanceMinimumSetGen();
}

main().catch(console.error);
