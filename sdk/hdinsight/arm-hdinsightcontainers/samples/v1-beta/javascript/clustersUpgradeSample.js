/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HDInsightContainersManagementClient } = require("@azure/arm-hdinsightcontainers");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Upgrade a cluster.
 *
 * @summary Upgrade a cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsightOnAks/preview/2024-05-01-preview/examples/UpgradeAKSPatchVersionForCluster.json
 */
async function clustersUpgradeAksPatchVersion() {
  const subscriptionId =
    process.env["HDINSIGHT_SUBSCRIPTION_ID"] || "10e32bab-26da-4cc4-a441-52b318f824e6";
  const resourceGroupName = process.env["HDINSIGHT_RESOURCE_GROUP"] || "hiloResourcegroup";
  const clusterPoolName = "clusterpool1";
  const clusterName = "cluster1";
  const clusterUpgradeRequest = {
    properties: { upgradeType: "AKSPatchUpgrade" },
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightContainersManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginUpgradeAndWait(
    resourceGroupName,
    clusterPoolName,
    clusterName,
    clusterUpgradeRequest,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Upgrade a cluster.
 *
 * @summary Upgrade a cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsightOnAks/preview/2024-05-01-preview/examples/UpgradeHotfixForCluster.json
 */
async function clustersUpgradeHotfix() {
  const subscriptionId =
    process.env["HDINSIGHT_SUBSCRIPTION_ID"] || "10e32bab-26da-4cc4-a441-52b318f824e6";
  const resourceGroupName = process.env["HDINSIGHT_RESOURCE_GROUP"] || "hiloResourcegroup";
  const clusterPoolName = "clusterpool1";
  const clusterName = "cluster1";
  const clusterUpgradeRequest = {
    properties: {
      componentName: "historyserver",
      targetBuildNumber: "3",
      targetClusterVersion: "1.0.6",
      targetOssVersion: "1.16.0",
      upgradeType: "HotfixUpgrade",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightContainersManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginUpgradeAndWait(
    resourceGroupName,
    clusterPoolName,
    clusterName,
    clusterUpgradeRequest,
  );
  console.log(result);
}

async function main() {
  clustersUpgradeAksPatchVersion();
  clustersUpgradeHotfix();
}

main().catch(console.error);
