/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  NetworkSecurityPerimeterConfiguration,
  NetworkSecurityPerimeterListConfigurationsOptionalParams,
  NetworkSecurityPerimeterGetConfigurationOptionalParams,
  NetworkSecurityPerimeterGetConfigurationResponse,
  NetworkSecurityPerimeterReconcileConfigurationOptionalParams,
  NetworkSecurityPerimeterReconcileConfigurationResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NetworkSecurityPerimeterOperations. */
export interface NetworkSecurityPerimeterOperations {
  /**
   * Lists all of the NSP configurations in the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  listConfigurations(
    resourceGroupName: string,
    accountName: string,
    options?: NetworkSecurityPerimeterListConfigurationsOptionalParams,
  ): PagedAsyncIterableIterator<NetworkSecurityPerimeterConfiguration>;
  /**
   * Gets information about the specified NSP configuration.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param networkSecurityPerimeterConfigurationName The name for Network Security Perimeter
   *                                                  configuration
   * @param options The options parameters.
   */
  getConfiguration(
    resourceGroupName: string,
    accountName: string,
    networkSecurityPerimeterConfigurationName: string,
    options?: NetworkSecurityPerimeterGetConfigurationOptionalParams,
  ): Promise<NetworkSecurityPerimeterGetConfigurationResponse>;
  /**
   * Reconciles the specified NSP configuration.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param networkSecurityPerimeterConfigurationName The name for Network Security Perimeter
   *                                                  configuration
   * @param options The options parameters.
   */
  beginReconcileConfiguration(
    resourceGroupName: string,
    accountName: string,
    networkSecurityPerimeterConfigurationName: string,
    options?: NetworkSecurityPerimeterReconcileConfigurationOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkSecurityPerimeterReconcileConfigurationResponse>,
      NetworkSecurityPerimeterReconcileConfigurationResponse
    >
  >;
  /**
   * Reconciles the specified NSP configuration.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param networkSecurityPerimeterConfigurationName The name for Network Security Perimeter
   *                                                  configuration
   * @param options The options parameters.
   */
  beginReconcileConfigurationAndWait(
    resourceGroupName: string,
    accountName: string,
    networkSecurityPerimeterConfigurationName: string,
    options?: NetworkSecurityPerimeterReconcileConfigurationOptionalParams,
  ): Promise<NetworkSecurityPerimeterReconcileConfigurationResponse>;
}
