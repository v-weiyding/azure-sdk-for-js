/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DataFlowOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DataFlowResource,
  DataFlowGetDataFlowsByWorkspaceNextOptionalParams,
  DataFlowGetDataFlowsByWorkspaceOptionalParams,
  DataFlowCreateOrUpdateDataFlowOptionalParams,
  DataFlowCreateOrUpdateDataFlowResponse,
  DataFlowGetDataFlowOptionalParams,
  DataFlowGetDataFlowResponse,
  DataFlowDeleteDataFlowOptionalParams,
  ArtifactRenameRequest,
  DataFlowRenameDataFlowOptionalParams,
  DataFlowGetDataFlowsByWorkspaceResponse,
  DataFlowGetDataFlowsByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataFlowOperations operations. */
export class DataFlowOperationsImpl implements DataFlowOperations {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class DataFlowOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Lists data flows.
   * @param options The options parameters.
   */
  public listDataFlowsByWorkspace(
    options?: DataFlowGetDataFlowsByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<DataFlowResource> {
    const iter = this.getDataFlowsByWorkspacePagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getDataFlowsByWorkspacePagingPage(options);
      }
    };
  }

  private async *getDataFlowsByWorkspacePagingPage(
    options?: DataFlowGetDataFlowsByWorkspaceOptionalParams
  ): AsyncIterableIterator<DataFlowResource[]> {
    let result = await this._getDataFlowsByWorkspace(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getDataFlowsByWorkspaceNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getDataFlowsByWorkspacePagingAll(
    options?: DataFlowGetDataFlowsByWorkspaceOptionalParams
  ): AsyncIterableIterator<DataFlowResource> {
    for await (const page of this.getDataFlowsByWorkspacePagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates or updates a data flow.
   * @param dataFlowName The data flow name.
   * @param dataFlow Data flow resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateDataFlow(
    dataFlowName: string,
    dataFlow: DataFlowResource,
    options?: DataFlowCreateOrUpdateDataFlowOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DataFlowCreateOrUpdateDataFlowResponse>,
      DataFlowCreateOrUpdateDataFlowResponse
    >
  > {
    const { span } = createSpan(
      "ArtifactsClient-beginCreateOrUpdateDataFlow",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DataFlowCreateOrUpdateDataFlowResponse> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as DataFlowCreateOrUpdateDataFlowResponse;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { dataFlowName, dataFlow, options },
      createOrUpdateDataFlowOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a data flow.
   * @param dataFlowName The data flow name.
   * @param dataFlow Data flow resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateDataFlowAndWait(
    dataFlowName: string,
    dataFlow: DataFlowResource,
    options?: DataFlowCreateOrUpdateDataFlowOptionalParams
  ): Promise<DataFlowCreateOrUpdateDataFlowResponse> {
    const poller = await this.beginCreateOrUpdateDataFlow(
      dataFlowName,
      dataFlow,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a data flow.
   * @param dataFlowName The data flow name.
   * @param options The options parameters.
   */
  async getDataFlow(
    dataFlowName: string,
    options?: DataFlowGetDataFlowOptionalParams
  ): Promise<DataFlowGetDataFlowResponse> {
    const { span } = createSpan("ArtifactsClient-getDataFlow", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { dataFlowName, options },
        getDataFlowOperationSpec
      );
      return result as DataFlowGetDataFlowResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Deletes a data flow.
   * @param dataFlowName The data flow name.
   * @param options The options parameters.
   */
  async beginDeleteDataFlow(
    dataFlowName: string,
    options?: DataFlowDeleteDataFlowOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginDeleteDataFlow",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { dataFlowName, options },
      deleteDataFlowOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a data flow.
   * @param dataFlowName The data flow name.
   * @param options The options parameters.
   */
  async beginDeleteDataFlowAndWait(
    dataFlowName: string,
    options?: DataFlowDeleteDataFlowOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteDataFlow(dataFlowName, options);
    return poller.pollUntilDone();
  }

  /**
   * Renames a dataflow.
   * @param dataFlowName The data flow name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async beginRenameDataFlow(
    dataFlowName: string,
    request: ArtifactRenameRequest,
    options?: DataFlowRenameDataFlowOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginRenameDataFlow",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { dataFlowName, request, options },
      renameDataFlowOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Renames a dataflow.
   * @param dataFlowName The data flow name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async beginRenameDataFlowAndWait(
    dataFlowName: string,
    request: ArtifactRenameRequest,
    options?: DataFlowRenameDataFlowOptionalParams
  ): Promise<void> {
    const poller = await this.beginRenameDataFlow(
      dataFlowName,
      request,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists data flows.
   * @param options The options parameters.
   */
  private async _getDataFlowsByWorkspace(
    options?: DataFlowGetDataFlowsByWorkspaceOptionalParams
  ): Promise<DataFlowGetDataFlowsByWorkspaceResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getDataFlowsByWorkspace",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        getDataFlowsByWorkspaceOperationSpec
      );
      return result as DataFlowGetDataFlowsByWorkspaceResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * GetDataFlowsByWorkspaceNext
   * @param nextLink The nextLink from the previous successful call to the GetDataFlowsByWorkspace
   *                 method.
   * @param options The options parameters.
   */
  private async _getDataFlowsByWorkspaceNext(
    nextLink: string,
    options?: DataFlowGetDataFlowsByWorkspaceNextOptionalParams
  ): Promise<DataFlowGetDataFlowsByWorkspaceNextResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getDataFlowsByWorkspaceNext",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { nextLink, options },
        getDataFlowsByWorkspaceNextOperationSpec
      );
      return result as DataFlowGetDataFlowsByWorkspaceNextResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateDataFlowOperationSpec: coreClient.OperationSpec = {
  path: "/dataflows/{dataFlowName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataFlowResource
    },
    201: {
      bodyMapper: Mappers.DataFlowResource
    },
    202: {
      bodyMapper: Mappers.DataFlowResource
    },
    204: {
      bodyMapper: Mappers.DataFlowResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.dataFlow,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.dataFlowName],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getDataFlowOperationSpec: coreClient.OperationSpec = {
  path: "/dataflows/{dataFlowName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataFlowResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.dataFlowName],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteDataFlowOperationSpec: coreClient.OperationSpec = {
  path: "/dataflows/{dataFlowName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.dataFlowName],
  headerParameters: [Parameters.accept],
  serializer
};
const renameDataFlowOperationSpec: coreClient.OperationSpec = {
  path: "/dataflows/{dataFlowName}/rename",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.dataFlowName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDataFlowsByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/dataflows",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataFlowListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const getDataFlowsByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataFlowListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
