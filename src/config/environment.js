export const Environment = process.env.REACT_APP_ENV;

export const Environments = {
  dev: "dev",
  staging: "staging",
  prod: "production",
};

export const IsDevelopment = Environment === Environments.dev;
export const IsStaging = Environment === Environments.staging;
export const IsProduction = Environment === Environments.prod;
