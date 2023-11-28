/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  AttachedDataNetworksImpl,
  DataNetworksImpl,
  DiagnosticsPackagesImpl,
  MobileNetworksImpl,
  OperationsImpl,
  PacketCapturesImpl,
  PacketCoreControlPlanesImpl,
  PacketCoreControlPlaneVersionsImpl,
  PacketCoreDataPlanesImpl,
  ServicesImpl,
  SimsImpl,
  SimGroupsImpl,
  SimPoliciesImpl,
  SitesImpl,
  SlicesImpl
} from "./operations";
import {
  AttachedDataNetworks,
  DataNetworks,
  DiagnosticsPackages,
  MobileNetworks,
  Operations,
  PacketCaptures,
  PacketCoreControlPlanes,
  PacketCoreControlPlaneVersions,
  PacketCoreDataPlanes,
  Services,
  Sims,
  SimGroups,
  SimPolicies,
  Sites,
  Slices
} from "./operationsInterfaces";
import { MobileNetworkManagementClientOptionalParams } from "./models";

export class MobileNetworkManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId?: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the MobileNetworkManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription. The value must be an UUID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: MobileNetworkManagementClientOptionalParams
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: MobileNetworkManagementClientOptionalParams
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionIdOrOptions?:
      | MobileNetworkManagementClientOptionalParams
      | string,
    options?: MobileNetworkManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: MobileNetworkManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-mobilenetwork/4.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2023-09-01";
    this.attachedDataNetworks = new AttachedDataNetworksImpl(this);
    this.dataNetworks = new DataNetworksImpl(this);
    this.diagnosticsPackages = new DiagnosticsPackagesImpl(this);
    this.mobileNetworks = new MobileNetworksImpl(this);
    this.operations = new OperationsImpl(this);
    this.packetCaptures = new PacketCapturesImpl(this);
    this.packetCoreControlPlanes = new PacketCoreControlPlanesImpl(this);
    this.packetCoreControlPlaneVersions = new PacketCoreControlPlaneVersionsImpl(
      this
    );
    this.packetCoreDataPlanes = new PacketCoreDataPlanesImpl(this);
    this.services = new ServicesImpl(this);
    this.sims = new SimsImpl(this);
    this.simGroups = new SimGroupsImpl(this);
    this.simPolicies = new SimPoliciesImpl(this);
    this.sites = new SitesImpl(this);
    this.slices = new SlicesImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  attachedDataNetworks: AttachedDataNetworks;
  dataNetworks: DataNetworks;
  diagnosticsPackages: DiagnosticsPackages;
  mobileNetworks: MobileNetworks;
  operations: Operations;
  packetCaptures: PacketCaptures;
  packetCoreControlPlanes: PacketCoreControlPlanes;
  packetCoreControlPlaneVersions: PacketCoreControlPlaneVersions;
  packetCoreDataPlanes: PacketCoreDataPlanes;
  services: Services;
  sims: Sims;
  simGroups: SimGroups;
  simPolicies: SimPolicies;
  sites: Sites;
  slices: Slices;
}
