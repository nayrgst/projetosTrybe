export default class ErrorHttp extends Error {
  public http: number;
  constructor(message: string, http: number) {
    super(message);
    this.http = http;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const runSchema = (schema: any) => async (value: any) => {
  const result = await schema.validateAsync(value);
  return result;
};
