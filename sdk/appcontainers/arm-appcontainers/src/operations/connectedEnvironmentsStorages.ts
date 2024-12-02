/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ConnectedEnvironmentsStorages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import {
  ConnectedEnvironmentsStoragesListOptionalParams,
  ConnectedEnvironmentsStoragesListResponse,
  ConnectedEnvironmentsStoragesGetOptionalParams,
  ConnectedEnvironmentsStoragesGetResponse,
  ConnectedEnvironmentStorage,
  ConnectedEnvironmentsStoragesCreateOrUpdateOptionalParams,
  ConnectedEnvironmentsStoragesCreateOrUpdateResponse,
  ConnectedEnvironmentsStoragesDeleteOptionalParams,
} from "../models";

/** Class containing ConnectedEnvironmentsStorages operations. */
export class ConnectedEnvironmentsStoragesImpl
  implements ConnectedEnvironmentsStorages
{
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class ConnectedEnvironmentsStorages class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get all storages for a connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the Environment.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsStoragesListOptionalParams,
  ): Promise<ConnectedEnvironmentsStoragesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, connectedEnvironmentName, options },
      listOperationSpec,
    );
  }

  /**
   * Get storage for a connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the Environment.
   * @param storageName Name of the storage.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    storageName: string,
    options?: ConnectedEnvironmentsStoragesGetOptionalParams,
  ): Promise<ConnectedEnvironmentsStoragesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, connectedEnvironmentName, storageName, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update storage for a connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the Environment.
   * @param storageName Name of the storage.
   * @param storageEnvelope Configuration details of storage.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    storageName: string,
    storageEnvelope: ConnectedEnvironmentStorage,
    options?: ConnectedEnvironmentsStoragesCreateOrUpdateOptionalParams,
  ): Promise<ConnectedEnvironmentsStoragesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        connectedEnvironmentName,
        storageName,
        storageEnvelope,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Delete storage for a connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the Environment.
   * @param storageName Name of the storage.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    storageName: string,
    options?: ConnectedEnvironmentsStoragesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, connectedEnvironmentName, storageName, options },
      deleteOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/storages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectedEnvironmentStoragesCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/storages/{storageName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectedEnvironmentStorage,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName,
    Parameters.storageName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/storages/{storageName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectedEnvironmentStorage,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: Parameters.storageEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName,
    Parameters.storageName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/storages/{storageName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName,
    Parameters.storageName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
