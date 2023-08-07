/* eslint-disable */
import { createClient, IClientBuilderData } from "./ClientBuilder";
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";

//Ключи, которые одинаковы для создания всех клиентов нашего проекта
const PROJECT_KEY: string = "body-shop";
const AUTH_URL: string = "https://auth.europe-west1.gcp.commercetools.com";
const API_URL: string = "https://api.europe-west1.gcp.commercetools.com";

const API_CLIENT_ADMIN_DATA: IClientBuilderData = {
  projectKey: PROJECT_KEY,
  clientId: "LgwtChmHZkwh3lQmk_oOOKBF",
  clientSecret: "bgKrW14DlrRsgjst7fWHqgide5NrS8TA",
  scopes: ["manage_project:body-shop"],
  authURL: AUTH_URL,
  apiURL: API_URL,
};

const API_CLIENT_UNAUTHORIZED_USER_DATA: IClientBuilderData = {
  projectKey: PROJECT_KEY,
  clientId: "Utfed-pCCk8CmIVSfaxvHzmM",
  clientSecret: "oQLvOue8pCSfCDhIPVl2P2x3RReZCjpP",
  scopes: [
    `view_quotes:body-shop view_product_selections:body-shop view_messages:
    body-shop view_staged_quotes:body-shop view_payments:body-shop view_customers:
    body-shop view_order_edits:body-shop view_quote_requests:body-shop view_cart_discounts:
    body-shop view_shopping_lists:body-shop view_business_units:body-shop view_states:
    body-shop view_associate_roles:body-shop view_project_settings:body-shop view_types:
    body-shop view_published_products:body-shop view_shipping_methods:
    body-shop view_key_value_documents:body-shop view_products:body-shop view_orders:
    body-shop view_attribute_groups:body-shop view_categories:body-shop view_import_containers:
    body-shop view_discount_codes:body-shop view_standalone_prices:body-shop view_stores:
    body-shop view_tax_categories:body-shop view_customer_groups:body-shop view_connectors:
    body-shop view_audit_log:body-shop view_connectors_deployments:body-shop`,
  ],
  authURL: AUTH_URL,
  apiURL: API_URL,
};

const API_CLIENT_AUTHORIZED_USER_DATA: IClientBuilderData = {
  projectKey: PROJECT_KEY,
  clientId: "YwsQcOKR8i5V5ki885KdbGly",
  clientSecret: "0IzFJhZuGfhK0fCGaPG6K7azZLBrXphp",
  scopes: [
    `manage_my_payments:body-shop view_states:body-shop view_products:body-shop manage_my_orders:
    body-shop manage_my_quote_requests:body-shop view_categories:body-shop manage_my_profile:
    body-shop view_tax_categories:body-shop create_anonymous_token:body-shop view_cart_discounts:
    body-shop view_shopping_lists:body-shop manage_my_quotes:body-shop manage_my_shopping_lists:
    body-shop view_types:body-shop view_published_products:body-shop view_discount_codes:
    body-shop view_standalone_prices:body-shop view_order_edits:body-shop manage_my_business_units:body-shop`,
  ],
  authURL: AUTH_URL,
  apiURL: API_URL,
};

const apiClientsDataArr: IClientBuilderData[] = [
  API_CLIENT_ADMIN_DATA,
  API_CLIENT_UNAUTHORIZED_USER_DATA,
  API_CLIENT_AUTHORIZED_USER_DATA,
];

const clientsApiRoots = apiClientsDataArr.map((apiClientData: IClientBuilderData) => {
  const client = createClient({ ...apiClientData });
  const clientApiRoot = createApiBuilderFromCtpClient(client).withProjectKey({ projectKey: PROJECT_KEY });

  return clientApiRoot;
});

const [adminApiRoot, unauthorizedUserApiRoot, authorizedUserApiRoot] = clientsApiRoots;

export { adminApiRoot, unauthorizedUserApiRoot, authorizedUserApiRoot };
