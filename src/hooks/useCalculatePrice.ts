import { useEffect } from "react";
import { calc_termins } from "../utils/constants";

interface Size {
  price: number;
}

interface Termin {
  label: string;
  value: number;
}

type UseCalculatePriceProps = {
  clickedSize: Size | null;
  clickedTermin: string | null;
  termins: string[];
  setTotalPrice: (price: number) => void;
  setClickedTermin: (termin: string | null) => void;
};

const useCalculatePrice = ({
  clickedSize,
  clickedTermin,
  termins,
  setTotalPrice,
  setClickedTermin,
}: UseCalculatePriceProps) => {
  useEffect(() => {
    const calculatePrice = () => {
      if (clickedSize !== null) {
        const selectedTermin = clickedTermin || termins[0];

        if (selectedTermin) {
          const selectedTerminAmount = calc_termins.find(
            (item: Termin) => item.label === selectedTermin
          );
          if (selectedTerminAmount) {
            const result = clickedSize.price * selectedTerminAmount.value;
            setTotalPrice(result);
            setClickedTermin(selectedTermin);
          }
        } else {
          setTotalPrice(clickedSize.price);
          setClickedTermin(null);
        }
      } else {
        setTotalPrice(0);
      }
    };

    calculatePrice();
  }, [clickedSize, clickedTermin, termins, setTotalPrice, setClickedTermin]);
};

export default useCalculatePrice;
