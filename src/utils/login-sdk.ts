import { Widget } from "@xsolla/login-sdk";

export const LoginWidget = new Widget({
  projectId: import.meta.env.VITE_LOGIN_PROJECT_ID,
  preferredLocale: import.meta.env.VITE_PREFERRED_LOCALE,
  callbackUrl: import.meta.env.VITE_CALLBACK_URL,
});
