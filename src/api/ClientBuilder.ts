/* eslint-disable */
import fetch from "node-fetch";
import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from "@commercetools/sdk-client-v2";

interface IClientBuilderData {
  projectKey: string;
  clientId: string;
  clientSecret: string;
  scopes: string[];
  apiURL: string;
  authURL: string;
}

const createClient = (clientBuilderData: IClientBuilderData) => {
  // Configure authMiddlewareOptions
  const authMiddlewareOptions: AuthMiddlewareOptions = {
    host: clientBuilderData.authURL,
    projectKey: clientBuilderData.projectKey,
    credentials: {
      clientId: clientBuilderData.clientId,
      clientSecret: clientBuilderData.clientSecret,
    },
    scopes: clientBuilderData.scopes,
    fetch,
  };

  // Configure httpMiddlewareOptions
  const httpMiddlewareOptions: HttpMiddlewareOptions = {
    host: clientBuilderData.apiURL,
    fetch,
  };
  const ctpClient = new ClientBuilder()
    .withProjectKey(clientBuilderData.projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware() // Include middleware for logging
    .build();

  return ctpClient;
};

export { createClient, IClientBuilderData };
