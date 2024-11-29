export interface HttpRequest<B> {
  params?: any;
  header?: any;
  query?: any;
  body?: B;
}
