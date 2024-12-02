/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { BillingManagementClient } = require("@azure/arm-billing");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists the billed or unbilled transactions by customer id for given start date and end date. Transactions include purchases, refunds and Azure usage charges. Unbilled transactions are listed under pending invoice Id and do not include tax. Tax is added to the amount once an invoice is generated.
 *
 * @summary Lists the billed or unbilled transactions by customer id for given start date and end date. Transactions include purchases, refunds and Azure usage charges. Unbilled transactions are listed under pending invoice Id and do not include tax. Tax is added to the amount once an invoice is generated.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/transactionsListByCustomer.json
 */
async function transactionsListByCustomer() {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31";
  const billingProfileName = "xxxx-xxxx-xxx-xxx";
  const customerName = "22000000-0000-0000-0000-000000000000";
  const periodStartDate = new Date("2024-04-01");
  const periodEndDate = new Date("2023-05-30");
  const typeParam = "Billed";
  const filter = "properties/date gt '2020-10-01'";
  const search = "storage";
  const options = { filter, search };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.transactions.listByCustomer(
    billingAccountName,
    billingProfileName,
    customerName,
    periodStartDate,
    periodEndDate,
    typeParam,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  transactionsListByCustomer();
}

main().catch(console.error);
