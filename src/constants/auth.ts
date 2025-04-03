export enum RoleEnum {
  USER = "user",
  ADMIN = "admin",
}

export type VerifyAccountEmailMethod = "link" | "code";

export const AUTHENTICATE_TOKEN_KEY =
  "NixLoggerIdentityServiceProvider.server.accessToken";
export const AUTHENTICATE_USER_KEY =
  "NixLoggerIdentityServiceProvider.server.userData";

export const VERIFY_ACCOUNT_METHOD: VerifyAccountEmailMethod = "code";

export const AUTH_CONFIG = {
  tokenKey: import.meta.env.AUTHENTICATE_TOKEN_KEY || AUTHENTICATE_TOKEN_KEY,
  userKey: import.meta.env.AUTHENTICATE_USER_KEY || AUTHENTICATE_USER_KEY,
  google: {
    clientId: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
  },
  isVerifyAccountEmailCodeMethod: () => VERIFY_ACCOUNT_METHOD === "code",
};
