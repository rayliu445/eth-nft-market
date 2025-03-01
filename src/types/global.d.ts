export {}

declare module 'global' {
  interface Window {
    ethereum: any
  }
} 