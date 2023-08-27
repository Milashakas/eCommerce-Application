interface IResponseError extends Error {
  statusCode?: number;
  code?: number;
}

export default IResponseError;
