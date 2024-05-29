/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  GuestConfigurationAssignment,
  GuestConfigurationConnectedVMwarevSphereAssignmentsListOptionalParams,
  GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateOptionalParams,
  GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateResponse,
  GuestConfigurationConnectedVMwarevSphereAssignmentsGetOptionalParams,
  GuestConfigurationConnectedVMwarevSphereAssignmentsGetResponse,
  GuestConfigurationConnectedVMwarevSphereAssignmentsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GuestConfigurationConnectedVMwarevSphereAssignments. */
export interface GuestConfigurationConnectedVMwarevSphereAssignments {
  /**
   * List all guest configuration assignments for an ARC machine.
   * @param resourceGroupName The resource group name.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vmName: string,
    options?: GuestConfigurationConnectedVMwarevSphereAssignmentsListOptionalParams,
  ): PagedAsyncIterableIterator<GuestConfigurationAssignment>;
  /**
   * Creates an association between a Connected VM Sphere machine and guest configuration
   * @param resourceGroupName The resource group name.
   * @param vmName The name of the virtual machine.
   * @param guestConfigurationAssignmentName Name of the guest configuration assignment.
   * @param parameters Parameters supplied to the create or update guest configuration assignment.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    vmName: string,
    guestConfigurationAssignmentName: string,
    parameters: GuestConfigurationAssignment,
    options?: GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateOptionalParams,
  ): Promise<GuestConfigurationConnectedVMwarevSphereAssignmentsCreateOrUpdateResponse>;
  /**
   * Get information about a guest configuration assignment
   * @param resourceGroupName The resource group name.
   * @param vmName The name of the virtual machine.
   * @param guestConfigurationAssignmentName The guest configuration assignment name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmName: string,
    guestConfigurationAssignmentName: string,
    options?: GuestConfigurationConnectedVMwarevSphereAssignmentsGetOptionalParams,
  ): Promise<GuestConfigurationConnectedVMwarevSphereAssignmentsGetResponse>;
  /**
   * Delete a guest configuration assignment
   * @param resourceGroupName The resource group name.
   * @param vmName The name of the virtual machine.
   * @param guestConfigurationAssignmentName Name of the guest configuration assignment
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vmName: string,
    guestConfigurationAssignmentName: string,
    options?: GuestConfigurationConnectedVMwarevSphereAssignmentsDeleteOptionalParams,
  ): Promise<void>;
}
