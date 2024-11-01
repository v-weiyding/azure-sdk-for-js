/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Data boundary properties */
export interface DataBoundaryProperties {
  /** The data boundary definition. */
  dataBoundary?: DataBoundary;
  /**
   * Denotes the state of provisioning.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** A data boundary definition. */
export interface DataBoundaryDefinition extends ProxyResource {
  /** Data boundary properties */
  properties?: DataBoundaryProperties;
}

/** Known values of {@link DefaultName} that the service accepts. */
export enum KnownDefaultName {
  /** Default */
  Default = "default",
}

/**
 * Defines values for DefaultName. \
 * {@link KnownDefaultName} can be used interchangeably with DefaultName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**
 */
export type DefaultName = string;

/** Known values of {@link DataBoundary} that the service accepts. */
export enum KnownDataBoundary {
  /** NotDefined */
  NotDefined = "NotDefined",
  /** Global */
  Global = "Global",
  /** EU */
  EU = "EU",
}

/**
 * Defines values for DataBoundary. \
 * {@link KnownDataBoundary} can be used interchangeably with DataBoundary,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotDefined** \
 * **Global** \
 * **EU**
 */
export type DataBoundary = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Accepted */
  Accepted = "Accepted",
  /** Running */
  Running = "Running",
  /** Creating */
  Creating = "Creating",
  /** Canceled */
  Canceled = "Canceled",
  /** Failed */
  Failed = "Failed",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Updating */
  Updating = "Updating",
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted** \
 * **Running** \
 * **Creating** \
 * **Canceled** \
 * **Failed** \
 * **Succeeded** \
 * **Updating**
 */
export type ProvisioningState = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key",
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Optional parameters. */
export interface DataBoundariesPutOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the put operation. */
export type DataBoundariesPutResponse = DataBoundaryDefinition;

/** Optional parameters. */
export interface DataBoundariesGetTenantOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getTenant operation. */
export type DataBoundariesGetTenantResponse = DataBoundaryDefinition;

/** Optional parameters. */
export interface DataBoundariesGetScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getScope operation. */
export type DataBoundariesGetScopeResponse = DataBoundaryDefinition;

/** Optional parameters. */
export interface DataboundariesManegementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
