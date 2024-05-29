/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  BackupRestoreFiles,
  BackupsUnderBackupVaultRestoreFilesOptionalParams,
  BackupsUnderBackupVaultRestoreFilesResponse,
} from "../models";

/** Interface representing a BackupsUnderBackupVault. */
export interface BackupsUnderBackupVault {
  /**
   * Restore the specified files from the specified backup to the active filesystem
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupVaultName The name of the Backup Vault
   * @param backupName The name of the backup
   * @param body Restore payload supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginRestoreFiles(
    resourceGroupName: string,
    accountName: string,
    backupVaultName: string,
    backupName: string,
    body: BackupRestoreFiles,
    options?: BackupsUnderBackupVaultRestoreFilesOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BackupsUnderBackupVaultRestoreFilesResponse>,
      BackupsUnderBackupVaultRestoreFilesResponse
    >
  >;
  /**
   * Restore the specified files from the specified backup to the active filesystem
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param backupVaultName The name of the Backup Vault
   * @param backupName The name of the backup
   * @param body Restore payload supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginRestoreFilesAndWait(
    resourceGroupName: string,
    accountName: string,
    backupVaultName: string,
    backupName: string,
    body: BackupRestoreFiles,
    options?: BackupsUnderBackupVaultRestoreFilesOptionalParams,
  ): Promise<BackupsUnderBackupVaultRestoreFilesResponse>;
}
