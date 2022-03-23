import { string } from "yup";

export interface Buy {
  paymentInvalid: string;
  paymentValid: string;
  confirmation: string;
  yourOrderNumber: string;
  orderNr: number;
}

export async function fakeFetch(_: string) {
  return new Promise<Buy>((resolve) => {
    setTimeout(() => {
      resolve({
        paymentValid: "Thank you for your purchase!",
        paymentInvalid: "Purchase denied, please check your information.",
        confirmation: "Confirmation will be sent to your email.",
        yourOrderNumber: "Order number: ",
        orderNr: Math.floor(Math.random() * 1000000),
      });
    }, 2000);
  });
}
