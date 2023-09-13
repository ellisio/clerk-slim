declare namespace NodeJS {
  export interface ProcessEnv {
    AUTH0_CLIENT_ID: string;
    AUTH0_CLIENT_SECRET: string;
    NEXT_PUBLIC_DOCSEARCH_API_KEY: string;
    NEXT_PUBLIC_DOCSEARCH_APP_ID: string;
    NEXT_PUBLIC_DOCSEARCH_INDEX_NAME: string;
    NEXTAUTH_SECRET: string;
  }
}
