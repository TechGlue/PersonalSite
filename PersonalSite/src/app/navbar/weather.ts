// Note, whatever is defined here is the only thing that you can directly call when accessing the HTTP response
export interface Weather {
  name: string;
  main: {
    temp: number;
  };
}
