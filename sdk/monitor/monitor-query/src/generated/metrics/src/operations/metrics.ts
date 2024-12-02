/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Metrics } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { MonitorManagementClientContext } from "../monitorManagementClientContext.js";
import {
  MetricsListAtSubscriptionScopeOptionalParams,
  MetricsListAtSubscriptionScopeResponse,
  MetricsListAtSubscriptionScopePostOptionalParams,
  MetricsListAtSubscriptionScopePostResponse,
  MetricsListOptionalParams,
  MetricsListResponse
} from "../models/index.js";

/** Class containing Metrics operations. */
export class MetricsImpl implements Metrics {
  private readonly client: MonitorManagementClientContext;

  /**
   * Initialize a new instance of the class Metrics class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * **Lists the metric data for a subscription**.
   * @param subscriptionId The ID of the target subscription.
   * @param region The region where the metrics you want reside.
   * @param options The options parameters.
   */
  listAtSubscriptionScope(
    subscriptionId: string,
    region: string,
    options?: MetricsListAtSubscriptionScopeOptionalParams
  ): Promise<MetricsListAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      { subscriptionId, region, options },
      listAtSubscriptionScopeOperationSpec
    );
  }

  /**
   * **Lists the metric data for a subscription**. Parameters can be specified on either query params or
   * the body.
   * @param subscriptionId The ID of the target subscription.
   * @param region The region where the metrics you want reside.
   * @param options The options parameters.
   */
  listAtSubscriptionScopePost(
    subscriptionId: string,
    region: string,
    options?: MetricsListAtSubscriptionScopePostOptionalParams
  ): Promise<MetricsListAtSubscriptionScopePostResponse> {
    return this.client.sendOperationRequest(
      { subscriptionId, region, options },
      listAtSubscriptionScopePostOperationSpec
    );
  }

  /**
   * **Lists the metric values for a resource**.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: MetricsListOptionalParams
  ): Promise<MetricsListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Response
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.region,
    Parameters.timespan,
    Parameters.interval,
    Parameters.metricnames,
    Parameters.aggregation,
    Parameters.top,
    Parameters.orderby,
    Parameters.filter,
    Parameters.resultType,
    Parameters.metricnamespace,
    Parameters.autoAdjustTimegrain,
    Parameters.validateDimensions,
    Parameters.rollupby
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSubscriptionScopePostOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/metrics",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Response
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  requestBody: Parameters.body,
  queryParameters: [
    Parameters.apiVersion,
    Parameters.region,
    Parameters.timespan,
    Parameters.interval,
    Parameters.metricnames,
    Parameters.aggregation,
    Parameters.top,
    Parameters.orderby,
    Parameters.filter,
    Parameters.resultType,
    Parameters.metricnamespace,
    Parameters.autoAdjustTimegrain,
    Parameters.validateDimensions,
    Parameters.rollupby
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Response
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timespan,
    Parameters.interval,
    Parameters.metricnames,
    Parameters.aggregation,
    Parameters.top,
    Parameters.orderby,
    Parameters.filter,
    Parameters.metricnamespace,
    Parameters.autoAdjustTimegrain,
    Parameters.validateDimensions,
    Parameters.rollupby,
    Parameters.resultType1
  ],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
