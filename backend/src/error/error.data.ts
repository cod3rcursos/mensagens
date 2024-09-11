export default interface ErrorData {
  message: string;
  id?: string;
  meta?: {
    module?: string;
    object?: string;
    attribute?: string;
    value?: string;
    [key: string]: any;
  };
}
