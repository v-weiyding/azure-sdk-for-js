/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing.js";
import type { TriggerRunOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import type { ArtifactsClient } from "../artifactsClient.js";
import type {
  TriggerRunRerunTriggerInstanceOptionalParams,
  TriggerRunCancelTriggerInstanceOptionalParams,
  RunFilterParameters,
  TriggerRunQueryTriggerRunsByWorkspaceOptionalParams,
  TriggerRunQueryTriggerRunsByWorkspaceResponse,
} from "../models/index.js";

// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const rerunTriggerInstanceOperationSpec: coreClient.OperationSpec = {
  path: "/triggers/{triggerName}/triggerRuns/{runId}/rerun",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint, Parameters.runId1, Parameters.triggerName],
  headerParameters: [Parameters.accept],
  serializer,
};
const cancelTriggerInstanceOperationSpec: coreClient.OperationSpec = {
  path: "/triggers/{triggerName}/triggerRuns/{runId}/cancel",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint, Parameters.runId1, Parameters.triggerName],
  headerParameters: [Parameters.accept],
  serializer,
};
const queryTriggerRunsByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/queryTriggerRuns",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerRunsQueryResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.filterParameters,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};

/** Class containing TriggerRunOperations operations. */
export class TriggerRunOperationsImpl implements TriggerRunOperations {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class TriggerRunOperations class.
   * @param client - Reference to the service client
   */
  // eslint-disable-next-line @azure/azure-sdk/ts-use-interface-parameters
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Rerun single trigger instance by runId.
   * @param triggerName - The trigger name.
   * @param runId - The pipeline run identifier.
   * @param options - The options parameters.
   */
  async rerunTriggerInstance(
    triggerName: string,
    runId: string,
    options?: TriggerRunRerunTriggerInstanceOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "ArtifactsClient.rerunTriggerInstance",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { triggerName, runId, updatedOptions },
          rerunTriggerInstanceOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Cancel single trigger instance by runId.
   * @param triggerName - The trigger name.
   * @param runId - The pipeline run identifier.
   * @param options - The options parameters.
   */
  async cancelTriggerInstance(
    triggerName: string,
    runId: string,
    options?: TriggerRunCancelTriggerInstanceOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "ArtifactsClient.cancelTriggerInstance",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { triggerName, runId, updatedOptions },
          cancelTriggerInstanceOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Query trigger runs.
   * @param filterParameters - Parameters to filter the pipeline run.
   * @param options - The options parameters.
   */
  async queryTriggerRunsByWorkspace(
    filterParameters: RunFilterParameters,
    options?: TriggerRunQueryTriggerRunsByWorkspaceOptionalParams,
  ): Promise<TriggerRunQueryTriggerRunsByWorkspaceResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient.queryTriggerRunsByWorkspace",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { filterParameters, updatedOptions },
          queryTriggerRunsByWorkspaceOperationSpec,
        ) as Promise<TriggerRunQueryTriggerRunsByWorkspaceResponse>;
      },
    );
  }
}
