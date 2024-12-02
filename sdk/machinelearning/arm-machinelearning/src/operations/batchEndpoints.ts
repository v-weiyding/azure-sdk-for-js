/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BatchEndpoints } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningServicesManagementClient } from "../azureMachineLearningServicesManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  BatchEndpoint,
  BatchEndpointsListNextOptionalParams,
  BatchEndpointsListOptionalParams,
  BatchEndpointsListResponse,
  BatchEndpointsDeleteOptionalParams,
  BatchEndpointsGetOptionalParams,
  BatchEndpointsGetResponse,
  PartialMinimalTrackedResourceWithIdentity,
  BatchEndpointsUpdateOptionalParams,
  BatchEndpointsUpdateResponse,
  BatchEndpointsCreateOrUpdateOptionalParams,
  BatchEndpointsCreateOrUpdateResponse,
  BatchEndpointsListKeysOptionalParams,
  BatchEndpointsListKeysResponse,
  BatchEndpointsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BatchEndpoints operations. */
export class BatchEndpointsImpl implements BatchEndpoints {
  private readonly client: AzureMachineLearningServicesManagementClient;

  /**
   * Initialize a new instance of the class BatchEndpoints class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServicesManagementClient) {
    this.client = client;
  }

  /**
   * Lists Batch inference endpoint in the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: BatchEndpointsListOptionalParams,
  ): PagedAsyncIterableIterator<BatchEndpoint> {
    const iter = this.listPagingAll(resourceGroupName, workspaceName, options);
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
          workspaceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: BatchEndpointsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BatchEndpoint[]> {
    let result: BatchEndpointsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, workspaceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
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
    workspaceName: string,
    options?: BatchEndpointsListOptionalParams,
  ): AsyncIterableIterator<BatchEndpoint> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists Batch inference endpoint in the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: BatchEndpointsListOptionalParams,
  ): Promise<BatchEndpointsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec,
    );
  }

  /**
   * Delete Batch Inference Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference Endpoint name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    options?: BatchEndpointsDeleteOptionalParams,
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
      args: { resourceGroupName, workspaceName, endpointName, options },
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
   * Delete Batch Inference Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference Endpoint name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    options?: BatchEndpointsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      workspaceName,
      endpointName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a batch inference endpoint by name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Name for the Batch Endpoint.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    options?: BatchEndpointsGetOptionalParams,
  ): Promise<BatchEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, endpointName, options },
      getOperationSpec,
    );
  }

  /**
   * Update a batch inference endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Name for the Batch inference endpoint.
   * @param body Mutable batch inference endpoint definition object.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    body: PartialMinimalTrackedResourceWithIdentity,
    options?: BatchEndpointsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BatchEndpointsUpdateResponse>,
      BatchEndpointsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BatchEndpointsUpdateResponse> => {
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
      args: { resourceGroupName, workspaceName, endpointName, body, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      BatchEndpointsUpdateResponse,
      OperationState<BatchEndpointsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a batch inference endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Name for the Batch inference endpoint.
   * @param body Mutable batch inference endpoint definition object.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    body: PartialMinimalTrackedResourceWithIdentity,
    options?: BatchEndpointsUpdateOptionalParams,
  ): Promise<BatchEndpointsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      workspaceName,
      endpointName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Creates a batch inference endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Name for the Batch inference endpoint.
   * @param body Batch inference endpoint definition object.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    body: BatchEndpoint,
    options?: BatchEndpointsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BatchEndpointsCreateOrUpdateResponse>,
      BatchEndpointsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BatchEndpointsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, workspaceName, endpointName, body, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      BatchEndpointsCreateOrUpdateResponse,
      OperationState<BatchEndpointsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "original-uri",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a batch inference endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Name for the Batch inference endpoint.
   * @param body Batch inference endpoint definition object.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    body: BatchEndpoint,
    options?: BatchEndpointsCreateOrUpdateOptionalParams,
  ): Promise<BatchEndpointsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      endpointName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists batch Inference Endpoint keys.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference Endpoint name.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    options?: BatchEndpointsListKeysOptionalParams,
  ): Promise<BatchEndpointsListKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, endpointName, options },
      listKeysOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: BatchEndpointsListNextOptionalParams,
  ): Promise<BatchEndpointsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BatchEndpointTrackedResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip, Parameters.count],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}",
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
    Parameters.workspaceName,
    Parameters.endpointName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BatchEndpoint,
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
    Parameters.workspaceName,
    Parameters.endpointName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.BatchEndpoint,
    },
    201: {
      bodyMapper: Mappers.BatchEndpoint,
    },
    202: {
      bodyMapper: Mappers.BatchEndpoint,
    },
    204: {
      bodyMapper: Mappers.BatchEndpoint,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.endpointName1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BatchEndpoint,
    },
    201: {
      bodyMapper: Mappers.BatchEndpoint,
    },
    202: {
      bodyMapper: Mappers.BatchEndpoint,
    },
    204: {
      bodyMapper: Mappers.BatchEndpoint,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body15,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.endpointName1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}/listkeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointAuthKeys,
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
    Parameters.workspaceName,
    Parameters.endpointName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BatchEndpointTrackedResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
