/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { EnvironmentDefinitions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevCenterClient } from "../devCenterClient";
import {
  EnvironmentDefinition,
  EnvironmentDefinitionsListByProjectCatalogNextOptionalParams,
  EnvironmentDefinitionsListByProjectCatalogOptionalParams,
  EnvironmentDefinitionsListByProjectCatalogResponse,
  EnvironmentDefinitionsListByCatalogNextOptionalParams,
  EnvironmentDefinitionsListByCatalogOptionalParams,
  EnvironmentDefinitionsListByCatalogResponse,
  EnvironmentDefinitionsGetByProjectCatalogOptionalParams,
  EnvironmentDefinitionsGetByProjectCatalogResponse,
  EnvironmentDefinitionsGetOptionalParams,
  EnvironmentDefinitionsGetResponse,
  EnvironmentDefinitionsGetErrorDetailsOptionalParams,
  EnvironmentDefinitionsGetErrorDetailsResponse,
  EnvironmentDefinitionsListByProjectCatalogNextResponse,
  EnvironmentDefinitionsListByCatalogNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EnvironmentDefinitions operations. */
export class EnvironmentDefinitionsImpl implements EnvironmentDefinitions {
  private readonly client: DevCenterClient;

  /**
   * Initialize a new instance of the class EnvironmentDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: DevCenterClient) {
    this.client = client;
  }

  /**
   * Lists the environment definitions in this project catalog.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  public listByProjectCatalog(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    options?: EnvironmentDefinitionsListByProjectCatalogOptionalParams,
  ): PagedAsyncIterableIterator<EnvironmentDefinition> {
    const iter = this.listByProjectCatalogPagingAll(
      resourceGroupName,
      projectName,
      catalogName,
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
        return this.listByProjectCatalogPagingPage(
          resourceGroupName,
          projectName,
          catalogName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByProjectCatalogPagingPage(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    options?: EnvironmentDefinitionsListByProjectCatalogOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<EnvironmentDefinition[]> {
    let result: EnvironmentDefinitionsListByProjectCatalogResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProjectCatalog(
        resourceGroupName,
        projectName,
        catalogName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByProjectCatalogNext(
        resourceGroupName,
        projectName,
        catalogName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByProjectCatalogPagingAll(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    options?: EnvironmentDefinitionsListByProjectCatalogOptionalParams,
  ): AsyncIterableIterator<EnvironmentDefinition> {
    for await (const page of this.listByProjectCatalogPagingPage(
      resourceGroupName,
      projectName,
      catalogName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List environment definitions in the catalog.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  public listByCatalog(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: EnvironmentDefinitionsListByCatalogOptionalParams,
  ): PagedAsyncIterableIterator<EnvironmentDefinition> {
    const iter = this.listByCatalogPagingAll(
      resourceGroupName,
      devCenterName,
      catalogName,
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
        return this.listByCatalogPagingPage(
          resourceGroupName,
          devCenterName,
          catalogName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByCatalogPagingPage(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: EnvironmentDefinitionsListByCatalogOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<EnvironmentDefinition[]> {
    let result: EnvironmentDefinitionsListByCatalogResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCatalog(
        resourceGroupName,
        devCenterName,
        catalogName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByCatalogNext(
        resourceGroupName,
        devCenterName,
        catalogName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByCatalogPagingAll(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: EnvironmentDefinitionsListByCatalogOptionalParams,
  ): AsyncIterableIterator<EnvironmentDefinition> {
    for await (const page of this.listByCatalogPagingPage(
      resourceGroupName,
      devCenterName,
      catalogName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the environment definitions in this project catalog.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  private _listByProjectCatalog(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    options?: EnvironmentDefinitionsListByProjectCatalogOptionalParams,
  ): Promise<EnvironmentDefinitionsListByProjectCatalogResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, catalogName, options },
      listByProjectCatalogOperationSpec,
    );
  }

  /**
   * Gets an environment definition from the catalog.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param environmentDefinitionName The name of the Environment Definition.
   * @param options The options parameters.
   */
  getByProjectCatalog(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    environmentDefinitionName: string,
    options?: EnvironmentDefinitionsGetByProjectCatalogOptionalParams,
  ): Promise<EnvironmentDefinitionsGetByProjectCatalogResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        catalogName,
        environmentDefinitionName,
        options,
      },
      getByProjectCatalogOperationSpec,
    );
  }

  /**
   * List environment definitions in the catalog.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  private _listByCatalog(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: EnvironmentDefinitionsListByCatalogOptionalParams,
  ): Promise<EnvironmentDefinitionsListByCatalogResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, catalogName, options },
      listByCatalogOperationSpec,
    );
  }

  /**
   * Gets an environment definition from the catalog.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param environmentDefinitionName The name of the Environment Definition.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    environmentDefinitionName: string,
    options?: EnvironmentDefinitionsGetOptionalParams,
  ): Promise<EnvironmentDefinitionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        devCenterName,
        catalogName,
        environmentDefinitionName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Gets Environment Definition error details
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param environmentDefinitionName The name of the Environment Definition.
   * @param options The options parameters.
   */
  getErrorDetails(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    environmentDefinitionName: string,
    options?: EnvironmentDefinitionsGetErrorDetailsOptionalParams,
  ): Promise<EnvironmentDefinitionsGetErrorDetailsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        devCenterName,
        catalogName,
        environmentDefinitionName,
        options,
      },
      getErrorDetailsOperationSpec,
    );
  }

  /**
   * ListByProjectCatalogNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param nextLink The nextLink from the previous successful call to the ListByProjectCatalog method.
   * @param options The options parameters.
   */
  private _listByProjectCatalogNext(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    nextLink: string,
    options?: EnvironmentDefinitionsListByProjectCatalogNextOptionalParams,
  ): Promise<EnvironmentDefinitionsListByProjectCatalogNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, catalogName, nextLink, options },
      listByProjectCatalogNextOperationSpec,
    );
  }

  /**
   * ListByCatalogNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param nextLink The nextLink from the previous successful call to the ListByCatalog method.
   * @param options The options parameters.
   */
  private _listByCatalogNext(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    nextLink: string,
    options?: EnvironmentDefinitionsListByCatalogNextOptionalParams,
  ): Promise<EnvironmentDefinitionsListByCatalogNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, catalogName, nextLink, options },
      listByCatalogNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProjectCatalogOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/environmentDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentDefinitionListResult,
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
    Parameters.projectName,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getByProjectCatalogOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/environmentDefinitions/{environmentDefinitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentDefinition,
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
    Parameters.projectName,
    Parameters.catalogName,
    Parameters.environmentDefinitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByCatalogOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/environmentDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentDefinitionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/environmentDefinitions/{environmentDefinitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentDefinition,
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
    Parameters.devCenterName,
    Parameters.catalogName,
    Parameters.environmentDefinitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getErrorDetailsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/environmentDefinitions/{environmentDefinitionName}/getErrorDetails",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CatalogResourceValidationErrorDetails,
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
    Parameters.devCenterName,
    Parameters.catalogName,
    Parameters.environmentDefinitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByProjectCatalogNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentDefinitionListResult,
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
    Parameters.projectName,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByCatalogNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentDefinitionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.nextLink,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
