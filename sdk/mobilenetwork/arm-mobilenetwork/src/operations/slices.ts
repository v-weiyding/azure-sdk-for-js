/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Slices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MobileNetworkManagementClient } from "../mobileNetworkManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Slice,
  SlicesListByMobileNetworkNextOptionalParams,
  SlicesListByMobileNetworkOptionalParams,
  SlicesListByMobileNetworkResponse,
  SlicesDeleteOptionalParams,
  SlicesGetOptionalParams,
  SlicesGetResponse,
  SlicesCreateOrUpdateOptionalParams,
  SlicesCreateOrUpdateResponse,
  TagsObject,
  SlicesUpdateTagsOptionalParams,
  SlicesUpdateTagsResponse,
  SlicesListByMobileNetworkNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Slices operations. */
export class SlicesImpl implements Slices {
  private readonly client: MobileNetworkManagementClient;

  /**
   * Initialize a new instance of the class Slices class.
   * @param client Reference to the service client
   */
  constructor(client: MobileNetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all slices in the mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param options The options parameters.
   */
  public listByMobileNetwork(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SlicesListByMobileNetworkOptionalParams,
  ): PagedAsyncIterableIterator<Slice> {
    const iter = this.listByMobileNetworkPagingAll(
      resourceGroupName,
      mobileNetworkName,
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
        return this.listByMobileNetworkPagingPage(
          resourceGroupName,
          mobileNetworkName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByMobileNetworkPagingPage(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SlicesListByMobileNetworkOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Slice[]> {
    let result: SlicesListByMobileNetworkResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByMobileNetwork(
        resourceGroupName,
        mobileNetworkName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByMobileNetworkNext(
        resourceGroupName,
        mobileNetworkName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByMobileNetworkPagingAll(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SlicesListByMobileNetworkOptionalParams,
  ): AsyncIterableIterator<Slice> {
    for await (const page of this.listByMobileNetworkPagingPage(
      resourceGroupName,
      mobileNetworkName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified network slice.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param sliceName The name of the network slice.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    mobileNetworkName: string,
    sliceName: string,
    options?: SlicesDeleteOptionalParams,
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
      args: { resourceGroupName, mobileNetworkName, sliceName, options },
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
   * Deletes the specified network slice.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param sliceName The name of the network slice.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    sliceName: string,
    options?: SlicesDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      mobileNetworkName,
      sliceName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified network slice.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param sliceName The name of the network slice.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    mobileNetworkName: string,
    sliceName: string,
    options?: SlicesGetOptionalParams,
  ): Promise<SlicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mobileNetworkName, sliceName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a network slice. Must be created in the same location as its parent mobile
   * network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param sliceName The name of the network slice.
   * @param parameters Parameters supplied to the create or update network slice operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    mobileNetworkName: string,
    sliceName: string,
    parameters: Slice,
    options?: SlicesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SlicesCreateOrUpdateResponse>,
      SlicesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<SlicesCreateOrUpdateResponse> => {
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
        mobileNetworkName,
        sliceName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      SlicesCreateOrUpdateResponse,
      OperationState<SlicesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a network slice. Must be created in the same location as its parent mobile
   * network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param sliceName The name of the network slice.
   * @param parameters Parameters supplied to the create or update network slice operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    sliceName: string,
    parameters: Slice,
    options?: SlicesCreateOrUpdateOptionalParams,
  ): Promise<SlicesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      mobileNetworkName,
      sliceName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates slice tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param sliceName The name of the network slice.
   * @param parameters Parameters supplied to update network slice tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    mobileNetworkName: string,
    sliceName: string,
    parameters: TagsObject,
    options?: SlicesUpdateTagsOptionalParams,
  ): Promise<SlicesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mobileNetworkName, sliceName, parameters, options },
      updateTagsOperationSpec,
    );
  }

  /**
   * Lists all slices in the mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param options The options parameters.
   */
  private _listByMobileNetwork(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SlicesListByMobileNetworkOptionalParams,
  ): Promise<SlicesListByMobileNetworkResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mobileNetworkName, options },
      listByMobileNetworkOperationSpec,
    );
  }

  /**
   * ListByMobileNetworkNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param nextLink The nextLink from the previous successful call to the ListByMobileNetwork method.
   * @param options The options parameters.
   */
  private _listByMobileNetworkNext(
    resourceGroupName: string,
    mobileNetworkName: string,
    nextLink: string,
    options?: SlicesListByMobileNetworkNextOptionalParams,
  ): Promise<SlicesListByMobileNetworkNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mobileNetworkName, nextLink, options },
      listByMobileNetworkNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/slices/{sliceName}",
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
    Parameters.mobileNetworkName,
    Parameters.sliceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/slices/{sliceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Slice,
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
    Parameters.mobileNetworkName,
    Parameters.sliceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/slices/{sliceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Slice,
    },
    201: {
      bodyMapper: Mappers.Slice,
    },
    202: {
      bodyMapper: Mappers.Slice,
    },
    204: {
      bodyMapper: Mappers.Slice,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters18,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.mobileNetworkName,
    Parameters.sliceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/slices/{sliceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Slice,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.mobileNetworkName,
    Parameters.sliceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByMobileNetworkOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/slices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SliceListResult,
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
    Parameters.mobileNetworkName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByMobileNetworkNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SliceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.mobileNetworkName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
