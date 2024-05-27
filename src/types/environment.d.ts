declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_DOMAIN: string;
      DOMAIN: string;
      SANITY_STUDIO_SANITY_PROJECTID: string;
      SANITY_STUDIO_SANITY_DATASET: string;
      NEXTAUTH_URL: string;
      GATEWAY_URL: string;
    }
  }
}

export {};
