/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DedicatedHsmOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureHSMResourceProvider } from "../azureHSMResourceProvider";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  DedicatedHsm,
  DedicatedHsmListByResourceGroupNextOptionalParams,
  DedicatedHsmListByResourceGroupOptionalParams,
  DedicatedHsmListByResourceGroupResponse,
  DedicatedHsmListBySubscriptionNextOptionalParams,
  DedicatedHsmListBySubscriptionOptionalParams,
  DedicatedHsmListBySubscriptionResponse,
  OutboundEnvironmentEndpoint,
  DedicatedHsmListOutboundNetworkDependenciesEndpointsNextOptionalParams,
  DedicatedHsmListOutboundNetworkDependenciesEndpointsOptionalParams,
  DedicatedHsmListOutboundNetworkDependenciesEndpointsResponse,
  DedicatedHsmCreateOrUpdateOptionalParams,
  DedicatedHsmCreateOrUpdateResponse,
  DedicatedHsmUpdateOptionalParams,
  DedicatedHsmUpdateResponse,
  DedicatedHsmDeleteOptionalParams,
  DedicatedHsmDeleteResponse,
  DedicatedHsmGetOptionalParams,
  DedicatedHsmGetResponse,
  DedicatedHsmListByResourceGroupNextResponse,
  DedicatedHsmListBySubscriptionNextResponse,
  DedicatedHsmListOutboundNetworkDependenciesEndpointsNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DedicatedHsmOperations operations. */
export class DedicatedHsmOperationsImpl implements DedicatedHsmOperations {
  private readonly client: AzureHSMResourceProvider;

  /**
   * Initialize a new instance of the class DedicatedHsmOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureHSMResourceProvider) {
    this.client = client;
  }

  /**
   * The List operation gets information about the dedicated hsms associated with the subscription and
   * within the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DedicatedHsmListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<DedicatedHsm> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DedicatedHsmListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DedicatedHsm[]> {
    let result: DedicatedHsmListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DedicatedHsmListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<DedicatedHsm> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * The List operation gets information about the dedicated HSMs associated with the subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: DedicatedHsmListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<DedicatedHsm> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: DedicatedHsmListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DedicatedHsm[]> {
    let result: DedicatedHsmListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: DedicatedHsmListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<DedicatedHsm> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified
   * dedicated hsm resource. The operation returns properties of each egress endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the dedicated Hsm
   * @param options The options parameters.
   */
  public listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmListOutboundNetworkDependenciesEndpointsOptionalParams,
  ): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint> {
    const iter = this.listOutboundNetworkDependenciesEndpointsPagingAll(
      resourceGroupName,
      name,
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
        return this.listOutboundNetworkDependenciesEndpointsPagingPage(
          resourceGroupName,
          name,
          options,
          settings,
        );
      },
    };
  }

  private async *listOutboundNetworkDependenciesEndpointsPagingPage(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmListOutboundNetworkDependenciesEndpointsOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<OutboundEnvironmentEndpoint[]> {
    let result: DedicatedHsmListOutboundNetworkDependenciesEndpointsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listOutboundNetworkDependenciesEndpoints(
        resourceGroupName,
        name,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listOutboundNetworkDependenciesEndpointsNext(
        resourceGroupName,
        name,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listOutboundNetworkDependenciesEndpointsPagingAll(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmListOutboundNetworkDependenciesEndpointsOptionalParams,
  ): AsyncIterableIterator<OutboundEnvironmentEndpoint> {
    for await (const page of this.listOutboundNetworkDependenciesEndpointsPagingPage(
      resourceGroupName,
      name,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Create or Update a dedicated HSM in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the dedicated Hsm
   * @param parameters Parameters to create or update the dedicated hsm
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    name: string,
    parameters: DedicatedHsm,
    options?: DedicatedHsmCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DedicatedHsmCreateOrUpdateResponse>,
      DedicatedHsmCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<DedicatedHsmCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, name, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      DedicatedHsmCreateOrUpdateResponse,
      OperationState<DedicatedHsmCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or Update a dedicated HSM in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the dedicated Hsm
   * @param parameters Parameters to create or update the dedicated hsm
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    name: string,
    parameters: DedicatedHsm,
    options?: DedicatedHsmCreateOrUpdateOptionalParams,
  ): Promise<DedicatedHsmCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      name,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a dedicated HSM in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the dedicated Hsm
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DedicatedHsmUpdateResponse>,
      DedicatedHsmUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<DedicatedHsmUpdateResponse> => {
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
      args: { resourceGroupName, name, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      DedicatedHsmUpdateResponse,
      OperationState<DedicatedHsmUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a dedicated HSM in the specified subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the dedicated Hsm
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmUpdateOptionalParams,
  ): Promise<DedicatedHsmUpdateResponse> {
    const poller = await this.beginUpdate(resourceGroupName, name, options);
    return poller.pollUntilDone();
  }

  /**
   * Deletes the specified Azure Dedicated HSM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the dedicated Hsm
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DedicatedHsmDeleteResponse>,
      DedicatedHsmDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<DedicatedHsmDeleteResponse> => {
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
      args: { resourceGroupName, name, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      DedicatedHsmDeleteResponse,
      OperationState<DedicatedHsmDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified Azure Dedicated HSM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the dedicated Hsm
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmDeleteOptionalParams,
  ): Promise<DedicatedHsmDeleteResponse> {
    const poller = await this.beginDelete(resourceGroupName, name, options);
    return poller.pollUntilDone();
  }

  /**
   * Gets the specified Azure dedicated HSM.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the dedicated Hsm
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmGetOptionalParams,
  ): Promise<DedicatedHsmGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      getOperationSpec,
    );
  }

  /**
   * The List operation gets information about the dedicated hsms associated with the subscription and
   * within the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DedicatedHsmListByResourceGroupOptionalParams,
  ): Promise<DedicatedHsmListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * The List operation gets information about the dedicated HSMs associated with the subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: DedicatedHsmListBySubscriptionOptionalParams,
  ): Promise<DedicatedHsmListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified
   * dedicated hsm resource. The operation returns properties of each egress endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the dedicated Hsm
   * @param options The options parameters.
   */
  private _listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmListOutboundNetworkDependenciesEndpointsOptionalParams,
  ): Promise<DedicatedHsmListOutboundNetworkDependenciesEndpointsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      listOutboundNetworkDependenciesEndpointsOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DedicatedHsmListByResourceGroupNextOptionalParams,
  ): Promise<DedicatedHsmListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: DedicatedHsmListBySubscriptionNextOptionalParams,
  ): Promise<DedicatedHsmListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }

  /**
   * ListOutboundNetworkDependenciesEndpointsNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the dedicated Hsm
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListOutboundNetworkDependenciesEndpoints method.
   * @param options The options parameters.
   */
  private _listOutboundNetworkDependenciesEndpointsNext(
    resourceGroupName: string,
    name: string,
    nextLink: string,
    options?: DedicatedHsmListOutboundNetworkDependenciesEndpointsNextOptionalParams,
  ): Promise<DedicatedHsmListOutboundNetworkDependenciesEndpointsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, nextLink, options },
      listOutboundNetworkDependenciesEndpointsNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsm,
    },
    201: {
      bodyMapper: Mappers.DedicatedHsm,
    },
    202: {
      bodyMapper: Mappers.DedicatedHsm,
    },
    204: {
      bodyMapper: Mappers.DedicatedHsm,
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError,
    },
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsm,
    },
    201: {
      bodyMapper: Mappers.DedicatedHsm,
    },
    202: {
      bodyMapper: Mappers.DedicatedHsm,
    },
    204: {
      bodyMapper: Mappers.DedicatedHsm,
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError,
    },
  },
  requestBody: {
    parameterPath: { tags: ["options", "tags"] },
    mapper: { ...Mappers.DedicatedHsmPatchParameters, required: true },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.DedicatedHsmDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.DedicatedHsmDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.DedicatedHsmDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.DedicatedHsmDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsm,
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsmListResult,
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsmListResult,
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOutboundNetworkDependenciesEndpointsOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}/outboundNetworkDependenciesEndpoints",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.OutboundEnvironmentEndpointCollection,
      },
      default: {
        bodyMapper: Mappers.DedicatedHsmError,
      },
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.name,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsmListResult,
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsmListResult,
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOutboundNetworkDependenciesEndpointsNextOperationSpec: coreClient.OperationSpec =
  {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.OutboundEnvironmentEndpointCollection,
      },
      default: {
        bodyMapper: Mappers.DedicatedHsmError,
      },
    },
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.nextLink,
      Parameters.name,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
