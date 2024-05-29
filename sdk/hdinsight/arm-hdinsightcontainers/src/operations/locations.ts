/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Locations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HDInsightContainersManagementClient } from "../hDInsightContainersManagementClient";
import {
  NameAvailabilityParameters,
  LocationsCheckNameAvailabilityOptionalParams,
  LocationsCheckNameAvailabilityResponse,
} from "../models";

/** Class containing Locations operations. */
export class LocationsImpl implements Locations {
  private readonly client: HDInsightContainersManagementClient;

  /**
   * Initialize a new instance of the class Locations class.
   * @param client Reference to the service client
   */
  constructor(client: HDInsightContainersManagementClient) {
    this.client = client;
  }

  /**
   * Check the availability of the resource name.
   * @param location The name of the Azure region.
   * @param nameAvailabilityParameters The name and type of the resource.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    nameAvailabilityParameters: NameAvailabilityParameters,
    options?: LocationsCheckNameAvailabilityOptionalParams,
  ): Promise<LocationsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, nameAvailabilityParameters, options },
      checkNameAvailabilityOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NameAvailabilityResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.nameAvailabilityParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
