import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  PEXALS_API_KEY: str(),
});

export default env;
