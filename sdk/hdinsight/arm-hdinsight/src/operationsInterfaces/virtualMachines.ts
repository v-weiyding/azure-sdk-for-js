/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualMachinesListHostsOptionalParams,
  VirtualMachinesListHostsResponse,
  VirtualMachinesRestartHostsOptionalParams,
  VirtualMachinesGetAsyncOperationStatusOptionalParams,
  VirtualMachinesGetAsyncOperationStatusResponse,
} from "../models";

/** Interface representing a VirtualMachines. */
export interface VirtualMachines {
  /**
   * Lists the HDInsight clusters hosts
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  listHosts(
    resourceGroupName: string,
    clusterName: string,
    options?: VirtualMachinesListHostsOptionalParams,
  ): Promise<VirtualMachinesListHostsResponse>;
  /**
   * Restarts the specified HDInsight cluster hosts.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param hosts The list of hosts to restart
   * @param options The options parameters.
   */
  beginRestartHosts(
    resourceGroupName: string,
    clusterName: string,
    hosts: string[],
    options?: VirtualMachinesRestartHostsOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Restarts the specified HDInsight cluster hosts.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param hosts The list of hosts to restart
   * @param options The options parameters.
   */
  beginRestartHostsAndWait(
    resourceGroupName: string,
    clusterName: string,
    hosts: string[],
    options?: VirtualMachinesRestartHostsOptionalParams,
  ): Promise<void>;
  /**
   * Gets the async operation status.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param operationId The long running operation id.
   * @param options The options parameters.
   */
  getAsyncOperationStatus(
    resourceGroupName: string,
    clusterName: string,
    operationId: string,
    options?: VirtualMachinesGetAsyncOperationStatusOptionalParams,
  ): Promise<VirtualMachinesGetAsyncOperationStatusResponse>;
}
