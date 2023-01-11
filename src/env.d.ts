/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_NAME: string;
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SITE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}