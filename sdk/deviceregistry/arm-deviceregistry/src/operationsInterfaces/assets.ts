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
  Asset,
  AssetsListBySubscriptionOptionalParams,
  AssetsListByResourceGroupOptionalParams,
  AssetsGetOptionalParams,
  AssetsGetResponse,
  AssetsCreateOrReplaceOptionalParams,
  AssetsCreateOrReplaceResponse,
  AssetUpdate,
  AssetsUpdateOptionalParams,
  AssetsUpdateResponse,
  AssetsDeleteOptionalParams,
  AssetsDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Assets. */
export interface Assets {
  /**
   * List Asset resources by subscription ID
   * @param options The options parameters.
   */
  listBySubscription(
    options?: AssetsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<Asset>;
  /**
   * List Asset resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AssetsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Asset>;
  /**
   * Get a Asset
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param assetName Asset name parameter.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    assetName: string,
    options?: AssetsGetOptionalParams,
  ): Promise<AssetsGetResponse>;
  /**
   * Create a Asset
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param assetName Asset name parameter.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrReplace(
    resourceGroupName: string,
    assetName: string,
    resource: Asset,
    options?: AssetsCreateOrReplaceOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AssetsCreateOrReplaceResponse>,
      AssetsCreateOrReplaceResponse
    >
  >;
  /**
   * Create a Asset
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param assetName Asset name parameter.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrReplaceAndWait(
    resourceGroupName: string,
    assetName: string,
    resource: Asset,
    options?: AssetsCreateOrReplaceOptionalParams,
  ): Promise<AssetsCreateOrReplaceResponse>;
  /**
   * Update a Asset
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param assetName Asset name parameter.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    assetName: string,
    properties: AssetUpdate,
    options?: AssetsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<AssetsUpdateResponse>, AssetsUpdateResponse>
  >;
  /**
   * Update a Asset
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param assetName Asset name parameter.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    assetName: string,
    properties: AssetUpdate,
    options?: AssetsUpdateOptionalParams,
  ): Promise<AssetsUpdateResponse>;
  /**
   * Delete a Asset
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param assetName Asset name parameter.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    assetName: string,
    options?: AssetsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<AssetsDeleteResponse>, AssetsDeleteResponse>
  >;
  /**
   * Delete a Asset
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param assetName Asset name parameter.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    assetName: string,
    options?: AssetsDeleteOptionalParams,
  ): Promise<AssetsDeleteResponse>;
}
