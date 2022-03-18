import { string } from "yup";

export interface Buy {
  paymentInvalid: string;
  paymentValid: string;
}

export async function fakeFetch(_: string) {
  return new Promise<Buy>((resolve) => {
    setTimeout(() => {
      resolve({
        paymentValid: "Tack för ditt köp",
        paymentInvalid: "Tyvärr, ditt köp gick inte igenom",
      });
    }, 2000);
  });
}
