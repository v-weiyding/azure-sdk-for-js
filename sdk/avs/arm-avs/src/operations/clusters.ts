/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Clusters } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureVMwareSolutionAPI } from "../azureVMwareSolutionAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Cluster,
  ClustersListNextOptionalParams,
  ClustersListOptionalParams,
  ClustersListResponse,
  ClustersGetOptionalParams,
  ClustersGetResponse,
  ClustersCreateOrUpdateOptionalParams,
  ClustersCreateOrUpdateResponse,
  ClusterUpdate,
  ClustersUpdateOptionalParams,
  ClustersUpdateResponse,
  ClustersDeleteOptionalParams,
  ClustersListZonesOptionalParams,
  ClustersListZonesResponse,
  ClustersListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Clusters operations. */
export class ClustersImpl implements Clusters {
  private readonly client: AzureVMwareSolutionAPI;

  /**
   * Initialize a new instance of the class Clusters class.
   * @param client Reference to the service client
   */
  constructor(client: AzureVMwareSolutionAPI) {
    this.client = client;
  }

  /**
   * List Cluster resources by PrivateCloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ClustersListOptionalParams,
  ): PagedAsyncIterableIterator<Cluster> {
    const iter = this.listPagingAll(
      resourceGroupName,
      privateCloudName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          privateCloudName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ClustersListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Cluster[]> {
    let result: ClustersListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, privateCloudName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        privateCloudName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ClustersListOptionalParams,
  ): AsyncIterableIterator<Cluster> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      privateCloudName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List Cluster resources by PrivateCloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ClustersListOptionalParams,
  ): Promise<ClustersListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, options },
      listOperationSpec,
    );
  }

  /**
   * Get a Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersGetOptionalParams,
  ): Promise<ClustersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, clusterName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param cluster Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    cluster: Cluster,
    options?: ClustersCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersCreateOrUpdateResponse>,
      ClustersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ClustersCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        privateCloudName,
        clusterName,
        cluster,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ClustersCreateOrUpdateResponse,
      OperationState<ClustersCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param cluster Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    cluster: Cluster,
    options?: ClustersCreateOrUpdateOptionalParams,
  ): Promise<ClustersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      privateCloudName,
      clusterName,
      cluster,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param clusterUpdate The cluster properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    clusterUpdate: ClusterUpdate,
    options?: ClustersUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersUpdateResponse>,
      ClustersUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ClustersUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        privateCloudName,
        clusterName,
        clusterUpdate,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      ClustersUpdateResponse,
      OperationState<ClustersUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param clusterUpdate The cluster properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    clusterUpdate: ClusterUpdate,
    options?: ClustersUpdateOptionalParams,
  ): Promise<ClustersUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      privateCloudName,
      clusterName,
      clusterUpdate,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, privateCloudName, clusterName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      privateCloudName,
      clusterName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * List hosts by zone in a cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param options The options parameters.
   */
  listZones(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: ClustersListZonesOptionalParams,
  ): Promise<ClustersListZonesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, clusterName, options },
      listZonesOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    privateCloudName: string,
    nextLink: string,
    options?: ClustersListNextOptionalParams,
  ): Promise<ClustersListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Cluster,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Cluster,
    },
    201: {
      bodyMapper: Mappers.Cluster,
    },
    202: {
      bodyMapper: Mappers.Cluster,
    },
    204: {
      bodyMapper: Mappers.Cluster,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.cluster,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Cluster,
    },
    201: {
      bodyMapper: Mappers.Cluster,
    },
    202: {
      bodyMapper: Mappers.Cluster,
    },
    204: {
      bodyMapper: Mappers.Cluster,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.clusterUpdate,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listZonesOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/listZones",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterZoneList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
