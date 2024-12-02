/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Resizes the specified HDInsight cluster to the specified size.
 *
 * @summary Resizes the specified HDInsight cluster to the specified size.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/preview/2024-08-01-preview/examples/ResizeLinuxHadoopCluster.json
 */
async function resizeTheWorkerNodesForAHadoopOnLinuxCluster() {
  const subscriptionId = process.env["HDINSIGHT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HDINSIGHT_RESOURCE_GROUP"] || "rg1";
  const clusterName = "cluster1";
  const roleName = "workernode";
  const parameters = { targetInstanceCount: 10 };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginResizeAndWait(
    resourceGroupName,
    clusterName,
    roleName,
    parameters,
  );
  console.log(result);
}

async function main() {
  resizeTheWorkerNodesForAHadoopOnLinuxCluster();
}

main().catch(console.error);
