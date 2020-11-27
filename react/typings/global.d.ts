declare function fbq(s: string, t: string, o?: any): void

interface Window extends Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataLayer: any[]
  lpTag:any
}
