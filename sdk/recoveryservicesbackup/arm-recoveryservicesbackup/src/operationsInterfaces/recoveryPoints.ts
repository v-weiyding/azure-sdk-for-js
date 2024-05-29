/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RecoveryPointResource,
  RecoveryPointsListOptionalParams,
  RecoveryPointsGetOptionalParams,
  RecoveryPointsGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RecoveryPoints. */
export interface RecoveryPoints {
  /**
   * Lists the backup copies for the backed up item.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param containerName Container name associated with the backed up item.
   * @param protectedItemName Backed up item whose backup copies are to be fetched.
   * @param options The options parameters.
   */
  list(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    options?: RecoveryPointsListOptionalParams,
  ): PagedAsyncIterableIterator<RecoveryPointResource>;
  /**
   * Provides the information of the backed up data identified using RecoveryPointID. This is an
   * asynchronous operation.
   * To know the status of the operation, call the GetProtectedItemOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with backed up item.
   * @param containerName Container name associated with backed up item.
   * @param protectedItemName Backed up item name whose backup data needs to be fetched.
   * @param recoveryPointId RecoveryPointID represents the backed up data to be fetched.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    recoveryPointId: string,
    options?: RecoveryPointsGetOptionalParams,
  ): Promise<RecoveryPointsGetResponse>;
}
