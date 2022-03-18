import { createContext, FC, useContext, useState } from "react";
import { Buy, fakeFetch } from "../components/fakeFetch";

interface ContextValue {
  isLoading: Boolean;
  buy?: Buy;
  submit: () => void;
}

export const BuyContext = createContext<ContextValue>({
  isLoading: false,
  buy: { paymentValid: "", paymentInvalid: "", confirmation: "" },
  submit: () => {},
});

const BuyProvider: FC = (props) => {
  const [buy, setBuy] = useState<Buy>();
  const [isLoading, setIsLoading] = useState(false);
  const submit = async () => {
    setIsLoading(true);
    const buy = await fakeFetch("api/submit");
    setBuy(buy);
    setIsLoading(false);
  };
  return (
    <BuyContext.Provider value={{ buy, isLoading, submit }}>
      {props.children}
    </BuyContext.Provider>
  );
};
export default BuyProvider;
export const useBuy = () => useContext(BuyContext);
