/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP: string
  readonly VITE_INSTAGRAM_URL: string
  readonly VITE_INSTAGRAM_HANDLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
