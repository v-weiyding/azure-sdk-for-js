/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  Transaction,
  TransactionType,
  TransactionsListByCustomerOptionalParams,
  TransactionsListByInvoiceSectionOptionalParams,
  TransactionsListByBillingProfileOptionalParams,
  TransactionsListByInvoiceOptionalParams,
  TransactionsTransactionsDownloadByInvoiceOptionalParams,
  TransactionsTransactionsDownloadByInvoiceResponse,
  TransactionsGetTransactionSummaryByInvoiceOptionalParams,
  TransactionsGetTransactionSummaryByInvoiceResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Transactions. */
export interface Transactions {
  /**
   * Lists the billed or unbilled transactions by customer id for given start date and end date.
   * Transactions include purchases, refunds and Azure usage charges. Unbilled transactions are listed
   * under pending invoice Id and do not include tax. Tax is added to the amount once an invoice is
   * generated.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param customerName The ID that uniquely identifies a customer.
   * @param periodStartDate The start date to fetch the transactions. The date should be specified in
   *                        MM-DD-YYYY format.
   * @param periodEndDate The end date to fetch the transactions. The date should be specified in
   *                      MM-DD-YYYY format.
   * @param typeParam The type of transaction.
   * @param options The options parameters.
   */
  listByCustomer(
    billingAccountName: string,
    billingProfileName: string,
    customerName: string,
    periodStartDate: Date,
    periodEndDate: Date,
    typeParam: TransactionType,
    options?: TransactionsListByCustomerOptionalParams,
  ): PagedAsyncIterableIterator<Transaction>;
  /**
   * Lists the billed or unbilled transactions by invoice section name for given start date and end date.
   * Transactions include purchases, refunds and Azure usage charges. Unbilled transactions are listed
   * under pending invoice Id and do not include tax. Tax is added to the amount once an invoice is
   * generated.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param periodStartDate The start date to fetch the transactions. The date should be specified in
   *                        MM-DD-YYYY format.
   * @param periodEndDate The end date to fetch the transactions. The date should be specified in
   *                      MM-DD-YYYY format.
   * @param typeParam The type of transaction.
   * @param options The options parameters.
   */
  listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    periodStartDate: Date,
    periodEndDate: Date,
    typeParam: TransactionType,
    options?: TransactionsListByInvoiceSectionOptionalParams,
  ): PagedAsyncIterableIterator<Transaction>;
  /**
   * Lists the billed or unbilled transactions by billing profile name for given start and end date.
   * Transactions include purchases, refunds and Azure usage charges. Unbilled transactions are listed
   * under pending invoice Id and do not include tax. Tax is added to the amount once an invoice is
   * generated.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param periodStartDate The start date to fetch the transactions. The date should be specified in
   *                        MM-DD-YYYY format.
   * @param periodEndDate The end date to fetch the transactions. The date should be specified in
   *                      MM-DD-YYYY format.
   * @param typeParam The type of transaction.
   * @param options The options parameters.
   */
  listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    periodStartDate: Date,
    periodEndDate: Date,
    typeParam: TransactionType,
    options?: TransactionsListByBillingProfileOptionalParams,
  ): PagedAsyncIterableIterator<Transaction>;
  /**
   * Lists the transactions for an invoice. Transactions include purchases, refunds and Azure usage
   * charges.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param options The options parameters.
   */
  listByInvoice(
    billingAccountName: string,
    invoiceName: string,
    options?: TransactionsListByInvoiceOptionalParams,
  ): PagedAsyncIterableIterator<Transaction>;
  /**
   * Gets a URL to download the transactions document for an invoice. The operation is supported for
   * billing accounts with agreement type Enterprise Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param options The options parameters.
   */
  beginTransactionsDownloadByInvoice(
    billingAccountName: string,
    invoiceName: string,
    options?: TransactionsTransactionsDownloadByInvoiceOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TransactionsTransactionsDownloadByInvoiceResponse>,
      TransactionsTransactionsDownloadByInvoiceResponse
    >
  >;
  /**
   * Gets a URL to download the transactions document for an invoice. The operation is supported for
   * billing accounts with agreement type Enterprise Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param options The options parameters.
   */
  beginTransactionsDownloadByInvoiceAndWait(
    billingAccountName: string,
    invoiceName: string,
    options?: TransactionsTransactionsDownloadByInvoiceOptionalParams,
  ): Promise<TransactionsTransactionsDownloadByInvoiceResponse>;
  /**
   * Gets the transaction summary for an invoice. Transactions include purchases, refunds and Azure usage
   * charges.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param options The options parameters.
   */
  getTransactionSummaryByInvoice(
    billingAccountName: string,
    invoiceName: string,
    options?: TransactionsGetTransactionSummaryByInvoiceOptionalParams,
  ): Promise<TransactionsGetTransactionSummaryByInvoiceResponse>;
}
