export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type DeepNullable<T> = {
  [K in keyof T]: DeepNullable<T[K]> | null;
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type PageSearchParams = { [key: string]: string | string[] | undefined };
