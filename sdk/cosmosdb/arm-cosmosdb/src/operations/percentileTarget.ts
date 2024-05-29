/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { PercentileTarget } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import {
  PercentileMetric,
  PercentileTargetListMetricsOptionalParams,
  PercentileTargetListMetricsResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PercentileTarget operations. */
export class PercentileTargetImpl implements PercentileTarget {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class PercentileTarget class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given account target region. This url
   * is only for PBS and Replication Latency data
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param targetRegion Target region to which data is written. Cosmos DB region, with spaces between
   *                     words and each word capitalized.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  public listMetrics(
    resourceGroupName: string,
    accountName: string,
    targetRegion: string,
    filter: string,
    options?: PercentileTargetListMetricsOptionalParams,
  ): PagedAsyncIterableIterator<PercentileMetric> {
    const iter = this.listMetricsPagingAll(
      resourceGroupName,
      accountName,
      targetRegion,
      filter,
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
        return this.listMetricsPagingPage(
          resourceGroupName,
          accountName,
          targetRegion,
          filter,
          options,
          settings,
        );
      },
    };
  }

  private async *listMetricsPagingPage(
    resourceGroupName: string,
    accountName: string,
    targetRegion: string,
    filter: string,
    options?: PercentileTargetListMetricsOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<PercentileMetric[]> {
    let result: PercentileTargetListMetricsResponse;
    result = await this._listMetrics(
      resourceGroupName,
      accountName,
      targetRegion,
      filter,
      options,
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    resourceGroupName: string,
    accountName: string,
    targetRegion: string,
    filter: string,
    options?: PercentileTargetListMetricsOptionalParams,
  ): AsyncIterableIterator<PercentileMetric> {
    for await (const page of this.listMetricsPagingPage(
      resourceGroupName,
      accountName,
      targetRegion,
      filter,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves the metrics determined by the given filter for the given account target region. This url
   * is only for PBS and Replication Latency data
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param targetRegion Target region to which data is written. Cosmos DB region, with spaces between
   *                     words and each word capitalized.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  private _listMetrics(
    resourceGroupName: string,
    accountName: string,
    targetRegion: string,
    filter: string,
    options?: PercentileTargetListMetricsOptionalParams,
  ): Promise<PercentileTargetListMetricsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, targetRegion, filter, options },
      listMetricsOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listMetricsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/targetRegion/{targetRegion}/percentile/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PercentileMetricListResult,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.targetRegion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
