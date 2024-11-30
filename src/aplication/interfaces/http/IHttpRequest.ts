export interface IHttpRequest<B> {
  params?: any;
  header?: any;
  query?: any;
  body?: B;
}
