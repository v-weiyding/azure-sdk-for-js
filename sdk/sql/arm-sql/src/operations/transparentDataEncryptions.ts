/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { TransparentDataEncryptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  LogicalDatabaseTransparentDataEncryption,
  TransparentDataEncryptionsListByDatabaseNextOptionalParams,
  TransparentDataEncryptionsListByDatabaseOptionalParams,
  TransparentDataEncryptionsListByDatabaseResponse,
  TransparentDataEncryptionName,
  TransparentDataEncryptionsGetOptionalParams,
  TransparentDataEncryptionsGetResponse,
  TransparentDataEncryptionsCreateOrUpdateOptionalParams,
  TransparentDataEncryptionsCreateOrUpdateResponse,
  TransparentDataEncryptionsListByDatabaseNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TransparentDataEncryptions operations. */
export class TransparentDataEncryptionsImpl
  implements TransparentDataEncryptions
{
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class TransparentDataEncryptions class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of the logical database's transparent data encryption.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the logical database for which the transparent data encryption is
   *                     defined.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: TransparentDataEncryptionsListByDatabaseOptionalParams,
  ): PagedAsyncIterableIterator<LogicalDatabaseTransparentDataEncryption> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      serverName,
      databaseName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: TransparentDataEncryptionsListByDatabaseOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<LogicalDatabaseTransparentDataEncryption[]> {
    let result: TransparentDataEncryptionsListByDatabaseResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDatabase(
        resourceGroupName,
        serverName,
        databaseName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        serverName,
        databaseName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: TransparentDataEncryptionsListByDatabaseOptionalParams,
  ): AsyncIterableIterator<LogicalDatabaseTransparentDataEncryption> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of the logical database's transparent data encryption.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the logical database for which the transparent data encryption is
   *                     defined.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: TransparentDataEncryptionsListByDatabaseOptionalParams,
  ): Promise<TransparentDataEncryptionsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, options },
      listByDatabaseOperationSpec,
    );
  }

  /**
   * Gets a logical database's transparent data encryption.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the logical database for which the transparent data encryption is
   *                     defined.
   * @param tdeName The name of the transparent data encryption configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    tdeName: TransparentDataEncryptionName,
    options?: TransparentDataEncryptionsGetOptionalParams,
  ): Promise<TransparentDataEncryptionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, tdeName, options },
      getOperationSpec,
    );
  }

  /**
   * Updates a logical database's transparent data encryption configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the logical database for which the security alert policy is defined.
   * @param tdeName The name of the transparent data encryption configuration.
   * @param parameters The database transparent data encryption.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    tdeName: TransparentDataEncryptionName,
    parameters: LogicalDatabaseTransparentDataEncryption,
    options?: TransparentDataEncryptionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TransparentDataEncryptionsCreateOrUpdateResponse>,
      TransparentDataEncryptionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TransparentDataEncryptionsCreateOrUpdateResponse> => {
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
        serverName,
        databaseName,
        tdeName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      TransparentDataEncryptionsCreateOrUpdateResponse,
      OperationState<TransparentDataEncryptionsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a logical database's transparent data encryption configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the logical database for which the security alert policy is defined.
   * @param tdeName The name of the transparent data encryption configuration.
   * @param parameters The database transparent data encryption.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    tdeName: TransparentDataEncryptionName,
    parameters: LogicalDatabaseTransparentDataEncryption,
    options?: TransparentDataEncryptionsCreateOrUpdateOptionalParams,
  ): Promise<TransparentDataEncryptionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      databaseName,
      tdeName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the logical database for which the transparent data encryption is
   *                     defined.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    nextLink: string,
    options?: TransparentDataEncryptionsListByDatabaseNextOptionalParams,
  ): Promise<TransparentDataEncryptionsListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, nextLink, options },
      listByDatabaseNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalDatabaseTransparentDataEncryptionListResult,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{tdeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalDatabaseTransparentDataEncryption,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.tdeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{tdeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalDatabaseTransparentDataEncryption,
    },
    201: {
      bodyMapper: Mappers.LogicalDatabaseTransparentDataEncryption,
    },
    202: {
      bodyMapper: Mappers.LogicalDatabaseTransparentDataEncryption,
    },
    204: {
      bodyMapper: Mappers.LogicalDatabaseTransparentDataEncryption,
    },
    default: {},
  },
  requestBody: Parameters.parameters91,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.tdeName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const listByDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalDatabaseTransparentDataEncryptionListResult,
    },
    default: {},
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
