export interface Buy {
  paymentValid: string;
  confirmation: string;
  yourOrderNumber: string;
  orderNr: number;
}

// Delays fake api fetch for confirmed purchase
export async function fakeFetch(_: string) {
  return new Promise<Buy>((resolve) => {
    setTimeout(() => {
      resolve({
        paymentValid: "Thank you for your purchase!",
        confirmation: "Confirmation will be sent to your email.",
        yourOrderNumber: "Order number: ",
        orderNr: Math.floor(Math.random() * 1000000),
      });
    }, 2000);
  });
}
