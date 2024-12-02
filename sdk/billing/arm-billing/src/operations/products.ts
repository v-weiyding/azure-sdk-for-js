/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Products } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClient } from "../billingManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Product,
  ProductsListByInvoiceSectionNextOptionalParams,
  ProductsListByInvoiceSectionOptionalParams,
  ProductsListByInvoiceSectionResponse,
  ProductsListByBillingProfileNextOptionalParams,
  ProductsListByBillingProfileOptionalParams,
  ProductsListByBillingProfileResponse,
  ProductsListByCustomerNextOptionalParams,
  ProductsListByCustomerOptionalParams,
  ProductsListByCustomerResponse,
  ProductsListByBillingAccountNextOptionalParams,
  ProductsListByBillingAccountOptionalParams,
  ProductsListByBillingAccountResponse,
  MoveProductRequest,
  ProductsMoveOptionalParams,
  ProductsMoveResponse,
  ProductsValidateMoveEligibilityOptionalParams,
  ProductsValidateMoveEligibilityResponse,
  ProductsGetOptionalParams,
  ProductsGetResponse,
  ProductPatch,
  ProductsUpdateOptionalParams,
  ProductsUpdateResponse,
  ProductsListByInvoiceSectionNextResponse,
  ProductsListByBillingProfileNextResponse,
  ProductsListByCustomerNextResponse,
  ProductsListByBillingAccountNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Products operations. */
export class ProductsImpl implements Products {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class Products class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * Lists the products for an invoice section. These don't include products billed based on usage. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  public listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: ProductsListByInvoiceSectionOptionalParams,
  ): PagedAsyncIterableIterator<Product> {
    const iter = this.listByInvoiceSectionPagingAll(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
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
        return this.listByInvoiceSectionPagingPage(
          billingAccountName,
          billingProfileName,
          invoiceSectionName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByInvoiceSectionPagingPage(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: ProductsListByInvoiceSectionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Product[]> {
    let result: ProductsListByInvoiceSectionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByInvoiceSection(
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByInvoiceSectionNext(
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByInvoiceSectionPagingAll(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: ProductsListByInvoiceSectionOptionalParams,
  ): AsyncIterableIterator<Product> {
    for await (const page of this.listByInvoiceSectionPagingPage(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the products for a billing profile. These don't include products billed based on usage. The
   * operation is supported for billing accounts with agreement type Microsoft Customer Agreement or
   * Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  public listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: ProductsListByBillingProfileOptionalParams,
  ): PagedAsyncIterableIterator<Product> {
    const iter = this.listByBillingProfilePagingAll(
      billingAccountName,
      billingProfileName,
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
        return this.listByBillingProfilePagingPage(
          billingAccountName,
          billingProfileName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByBillingProfilePagingPage(
    billingAccountName: string,
    billingProfileName: string,
    options?: ProductsListByBillingProfileOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Product[]> {
    let result: ProductsListByBillingProfileResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingProfile(
        billingAccountName,
        billingProfileName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingProfileNext(
        billingAccountName,
        billingProfileName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingProfilePagingAll(
    billingAccountName: string,
    billingProfileName: string,
    options?: ProductsListByBillingProfileOptionalParams,
  ): AsyncIterableIterator<Product> {
    for await (const page of this.listByBillingProfilePagingPage(
      billingAccountName,
      billingProfileName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the products for a customer. These don't include products billed based on usage.The operation
   * is supported only for billing accounts with agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The options parameters.
   */
  public listByCustomer(
    billingAccountName: string,
    customerName: string,
    options?: ProductsListByCustomerOptionalParams,
  ): PagedAsyncIterableIterator<Product> {
    const iter = this.listByCustomerPagingAll(
      billingAccountName,
      customerName,
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
        return this.listByCustomerPagingPage(
          billingAccountName,
          customerName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByCustomerPagingPage(
    billingAccountName: string,
    customerName: string,
    options?: ProductsListByCustomerOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Product[]> {
    let result: ProductsListByCustomerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCustomer(
        billingAccountName,
        customerName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByCustomerNext(
        billingAccountName,
        customerName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByCustomerPagingAll(
    billingAccountName: string,
    customerName: string,
    options?: ProductsListByCustomerOptionalParams,
  ): AsyncIterableIterator<Product> {
    for await (const page of this.listByCustomerPagingPage(
      billingAccountName,
      customerName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the products for a billing account. These don't include products billed based on usage. The
   * operation is supported for billing accounts with agreement type Microsoft Customer Agreement or
   * Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  public listByBillingAccount(
    billingAccountName: string,
    options?: ProductsListByBillingAccountOptionalParams,
  ): PagedAsyncIterableIterator<Product> {
    const iter = this.listByBillingAccountPagingAll(
      billingAccountName,
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
        return this.listByBillingAccountPagingPage(
          billingAccountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByBillingAccountPagingPage(
    billingAccountName: string,
    options?: ProductsListByBillingAccountOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Product[]> {
    let result: ProductsListByBillingAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingAccount(billingAccountName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingAccountNext(
        billingAccountName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingAccountPagingAll(
    billingAccountName: string,
    options?: ProductsListByBillingAccountOptionalParams,
  ): AsyncIterableIterator<Product> {
    for await (const page of this.listByBillingAccountPagingPage(
      billingAccountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the products for an invoice section. These don't include products billed based on usage. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  private _listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: ProductsListByInvoiceSectionOptionalParams,
  ): Promise<ProductsListByInvoiceSectionResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, invoiceSectionName, options },
      listByInvoiceSectionOperationSpec,
    );
  }

  /**
   * Lists the products for a billing profile. These don't include products billed based on usage. The
   * operation is supported for billing accounts with agreement type Microsoft Customer Agreement or
   * Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  private _listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: ProductsListByBillingProfileOptionalParams,
  ): Promise<ProductsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, options },
      listByBillingProfileOperationSpec,
    );
  }

  /**
   * Lists the products for a customer. These don't include products billed based on usage.The operation
   * is supported only for billing accounts with agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The options parameters.
   */
  private _listByCustomer(
    billingAccountName: string,
    customerName: string,
    options?: ProductsListByCustomerOptionalParams,
  ): Promise<ProductsListByCustomerResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, customerName, options },
      listByCustomerOperationSpec,
    );
  }

  /**
   * Moves a product's charges to a new invoice section. The new invoice section must belong to the same
   * billing profile as the existing invoice section. This operation is supported only for products that
   * are purchased with a recurring charge and for billing accounts with agreement type Microsoft
   * Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters The properties of the product to initiate a transfer.
   * @param options The options parameters.
   */
  async beginMove(
    billingAccountName: string,
    productName: string,
    parameters: MoveProductRequest,
    options?: ProductsMoveOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<ProductsMoveResponse>, ProductsMoveResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ProductsMoveResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { billingAccountName, productName, parameters, options },
      spec: moveOperationSpec,
    });
    const poller = await createHttpPoller<
      ProductsMoveResponse,
      OperationState<ProductsMoveResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Moves a product's charges to a new invoice section. The new invoice section must belong to the same
   * billing profile as the existing invoice section. This operation is supported only for products that
   * are purchased with a recurring charge and for billing accounts with agreement type Microsoft
   * Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters The properties of the product to initiate a transfer.
   * @param options The options parameters.
   */
  async beginMoveAndWait(
    billingAccountName: string,
    productName: string,
    parameters: MoveProductRequest,
    options?: ProductsMoveOptionalParams,
  ): Promise<ProductsMoveResponse> {
    const poller = await this.beginMove(
      billingAccountName,
      productName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Validates if a product's charges can be moved to a new invoice section. This operation is supported
   * only for products that are purchased with a recurring charge and for billing accounts with agreement
   * type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters The properties of the product to initiate a transfer.
   * @param options The options parameters.
   */
  validateMoveEligibility(
    billingAccountName: string,
    productName: string,
    parameters: MoveProductRequest,
    options?: ProductsValidateMoveEligibilityOptionalParams,
  ): Promise<ProductsValidateMoveEligibilityResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, productName, parameters, options },
      validateMoveEligibilityOperationSpec,
    );
  }

  /**
   * Gets a product by ID. The operation is supported only for billing accounts with agreement type
   * Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    productName: string,
    options?: ProductsGetOptionalParams,
  ): Promise<ProductsGetResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, productName, options },
      getOperationSpec,
    );
  }

  /**
   * Updates the properties of a Product. Currently, auto renew can be updated. The operation is
   * supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters A product.
   * @param options The options parameters.
   */
  update(
    billingAccountName: string,
    productName: string,
    parameters: ProductPatch,
    options?: ProductsUpdateOptionalParams,
  ): Promise<ProductsUpdateResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, productName, parameters, options },
      updateOperationSpec,
    );
  }

  /**
   * Lists the products for a billing account. These don't include products billed based on usage. The
   * operation is supported for billing accounts with agreement type Microsoft Customer Agreement or
   * Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  private _listByBillingAccount(
    billingAccountName: string,
    options?: ProductsListByBillingAccountOptionalParams,
  ): Promise<ProductsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, options },
      listByBillingAccountOperationSpec,
    );
  }

  /**
   * ListByInvoiceSectionNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param nextLink The nextLink from the previous successful call to the ListByInvoiceSection method.
   * @param options The options parameters.
   */
  private _listByInvoiceSectionNext(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    nextLink: string,
    options?: ProductsListByInvoiceSectionNextOptionalParams,
  ): Promise<ProductsListByInvoiceSectionNextResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        nextLink,
        options,
      },
      listByInvoiceSectionNextOperationSpec,
    );
  }

  /**
   * ListByBillingProfileNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingProfile method.
   * @param options The options parameters.
   */
  private _listByBillingProfileNext(
    billingAccountName: string,
    billingProfileName: string,
    nextLink: string,
    options?: ProductsListByBillingProfileNextOptionalParams,
  ): Promise<ProductsListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, nextLink, options },
      listByBillingProfileNextOperationSpec,
    );
  }

  /**
   * ListByCustomerNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param nextLink The nextLink from the previous successful call to the ListByCustomer method.
   * @param options The options parameters.
   */
  private _listByCustomerNext(
    billingAccountName: string,
    customerName: string,
    nextLink: string,
    options?: ProductsListByCustomerNextOptionalParams,
  ): Promise<ProductsListByCustomerNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, customerName, nextLink, options },
      listByCustomerNextOperationSpec,
    );
  }

  /**
   * ListByBillingAccountNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingAccount method.
   * @param options The options parameters.
   */
  private _listByBillingAccountNext(
    billingAccountName: string,
    nextLink: string,
    options?: ProductsListByBillingAccountNextOptionalParams,
  ): Promise<ProductsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, nextLink, options },
      listByBillingAccountNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByInvoiceSectionOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/products",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByBillingProfileOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/products",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByCustomerOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/products",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.customerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const moveOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}/move",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Product,
    },
    201: {
      bodyMapper: Mappers.Product,
    },
    202: {
      bodyMapper: Mappers.Product,
    },
    204: {
      bodyMapper: Mappers.Product,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters22,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.productName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const validateMoveEligibilityOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}/validateMoveEligibility",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.MoveProductEligibilityResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters22,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.productName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Product,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.productName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Product,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters23,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.productName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByBillingAccountOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
  ],
  urlParameters: [Parameters.$host, Parameters.billingAccountName],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByInvoiceSectionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByBillingProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.billingProfileName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByCustomerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.customerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByBillingAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
