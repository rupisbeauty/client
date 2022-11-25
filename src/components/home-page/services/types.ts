export interface NextJSImage {
  fileName: string;
  title: string;
  alt: string;
  width: any; // next/image expects a value of type "SafeNumber
  height: any; // next/image expects a value of type "SafeNumber
  attr?: string;
}
