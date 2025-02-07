"use client";

import styles from "./Calculator.module.scss";

import PolygonWhite from "@/../public/calc-white.png";
import PolygonBlue from "@/../public/calc-blue.png";

import Icon1 from "@/../public/calculator/car-icon.svg";
import Icon2 from "@/../public/calculator/pickuptruck-icon.svg";
import Icon3 from "@/../public/calculator/minibus-icon.svg";
import Icon4 from "@/../public/calculator/bus-icon.svg";

import I10 from "@/../public/10sqm.png";
import I8 from "@/../public/8sqm.png";
import I6 from "@/../public/6sqm.png";
import I4 from "@/../public/4sqm.png";
import I3 from "@/../public/3sqm.png";
import I25 from "@/../public/2.5sqm.png";
import I2 from "@/../public/2sqm.png";
import I1 from "@/../public/1m.png";

import { useEffect, useState } from "react";

import { toggleSize, toggleTermin } from "../../utils/calculator_helpers";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import {
  fetchSizesAndPrice,
  fetchTerminAndPrice,
} from "@/redux/slices/calcSlice";
import useCalculatePrice from "@/hooks/useCalculatePrice";

import {
  setIsVisit,
  setPrice,
  setShowModal,
  setSize,
  setTermin,
} from "@/redux/slices/modalSlice";
import { useTranslation } from "react-i18next";

const cars = [
  { text: "1-2 м", icon: Icon1, size: ["1 м", "1.5 м", "2 м"] },
  { text: "3-4 м", icon: Icon2, size: ["3 м", "3.5 м", "4 м"] },
  { text: "6-8 м", icon: Icon3, size: ["6 м", "6.5 м", "7 м", "7.5 м", "8 м"] },
  {
    text: "9-12 м",
    icon: Icon4,
    size: ["9 м", "9.5 м", "10 м", "10.5 м", "11 м", "11.5 м", "12 м"],
  },
];

const Calculator = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const termins = useAppSelector((state) => state.calculator.terminIndividual);
  const sizes = useAppSelector((state) => state.calculator.sizesIndividual);

  const [totalPrice, setTotalPrice] = useState(0);
  const [clickedSize, setClickedSize] = useState(
    sizes && sizes.length > 0 ? sizes[3] : null
  );
  const [clickedTermin, setClickedTermin] = useState(
    termins && termins.length > 0 ? termins[2] : null
  );
  const [clickedCar, setClickedCar] = useState<{
    text: string;
    icon: string;
    size: string[];
  } | null>(null);

  const getIconUrl = () => {
    let src;

    switch (clickedSize?.size) {
      case "8 м":
      case "8.5 м":
      case "7 м":
      case "7.5 м":
        src = I8;
        break;
      case "10 м":
      case "9 м":
      case "11 м":
      case "12 м":
        src = I10;
        break;
      case "6 м":
      case "5 м":
      case "5.5 м":
      case "6.5 м":
        src = I6;
        break;
      case "4 м":
      case "4.5 м":
        src = I4;
        break;
      case "3 м":
      case "3.5 м":
        src = I3;
        break;
      case "2.5 м":
        src = I25;
        break;
      case "2 м":
        src = I2;
        break;
      case "1 м":
      case "1.5 м":
        src = I1;
        break;
      default:
        src = I10;
    }

    return src;
  };

  const handleButtonsClick = (type: "storage" | "visit") => {
    dispatch(setShowModal(true));

    if (type === "storage") {
      dispatch(setIsVisit(false));
      dispatch(setPrice(totalPrice));
      dispatch(setSize(clickedSize));
      dispatch(setTermin(clickedTermin));
    } else {
      dispatch(setIsVisit(true));
    }
  };

  useEffect(() => {
    dispatch(fetchTerminAndPrice());
    dispatch(fetchSizesAndPrice());
  }, [dispatch]);

  useCalculatePrice({
    clickedSize,
    clickedTermin,
    termins,
    setTotalPrice,
    setClickedTermin,
  });

  return (
    <section className={styles.root} id="calculator">
      <h3>{t("calc_h")}</h3>
      <p>{t("calc_p")}</p>
      <article className={styles.car_block}>
        <p>{t("ind_calc_auto")}</p>
        <div className={styles.icons_row}>
          {cars.map((car) => {
            const isClicked = car === clickedCar;
            return (
              <div
                style={
                  sizes && sizes.length <= 0
                    ? { pointerEvents: "none" }
                    : { pointerEvents: "auto" }
                }
                key={car.text}
                className={
                  isClicked
                    ? styles.icons_row_item_clicked
                    : styles.icons_row_item
                }
                onClick={() => {
                  toggleSize(
                    car,
                    setClickedSize,
                    clickedSize,
                    sizes,
                    dispatch,
                    setSize
                  );
                  if (isClicked) {
                    setClickedCar(null);
                  } else setClickedCar(car);
                }}
              >
                <Image alt="Car" src={car.icon} />
                <p>{car.text}</p>
              </div>
            );
          })}
        </div>
      </article>
      <article
        className={styles.wrapper}
        data-aos="zoom-in-down"
        data-aos-offset="0"
        data-aos-duration="1000"
      >
        <p>{t("ind_calc_size")}</p>
        <div className={styles.top_block}>
          <div className={styles.size_block}>
            <div className={styles.sizes}>
              <Image
                alt="Mobile"
                className={styles.mobile_calc}
                src={getIconUrl()}
              />
              {sizes && sizes.length > 0 ? (
                <div className={styles.size_row}>
                  {sizes.map((size) => {
                    const isClicked = size.size === clickedSize?.size;
                    return (
                      <div
                        key={size.price}
                        style={
                          size.quantity <= 0 ||
                          (clickedCar && !clickedCar.size.includes(size.size))
                            ? { pointerEvents: "none" }
                            : { pointerEvents: "auto" }
                        }
                        className={`
                            ${
                              isClicked
                                ? styles.size_item_clicked
                                : styles.size_item
                            } ${
                          size.quantity <= 0 ||
                          (clickedCar && !clickedCar.size.includes(size.size))
                            ? styles.disabled_size
                            : ""
                        }`}
                        onClick={() => {
                          toggleSize(
                            size,
                            setClickedSize,
                            clickedSize,
                            sizes,
                            dispatch,
                            setSize
                          );
                        }}
                      >
                        <Image
                          alt="Size"
                          src={isClicked ? PolygonBlue : PolygonWhite}
                        />
                        <p>
                          {size.size}
                          <sup>2</sup>
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
          <Image
            alt="Calculator Icon"
            src={getIconUrl()}
            className={styles.main_image}
          />
        </div>
      </article>
      <div className={styles.termin_article}>
        <p>{t("calc_termin")}</p>
        <div className={styles.termin_block}>
          {termins && termins.length > 0 ? (
            <div className={styles.termin_row}>
              {termins.map((termin) => {
                const isClicked = termin === clickedTermin;
                return (
                  <div
                    key={termin}
                    className={
                      isClicked
                        ? styles.termin_item_clicked
                        : styles.termin_item
                    }
                    onClick={() => {
                      toggleTermin(
                        termin,
                        setClickedTermin,
                        clickedTermin,
                        dispatch,
                        setTermin
                      );
                    }}
                  >
                    <Image
                      alt="Termin"
                      src={isClicked ? PolygonBlue : PolygonWhite}
                    />
                    <p>{termin}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.button_block}>
        <div className={styles.price_row}>
          <h3>{t("total_price")}</h3>
          <h3>
            {totalPrice} <span>{t("uan")}</span>
          </h3>
        </div>
        <div className={styles.buttons_row}>
          <button onClick={() => handleButtonsClick("storage")}>
            {t("order_btn")}
          </button>
          <button onClick={() => handleButtonsClick("visit")}>
            {t("visit_btn")}
          </button>
        </div>
      </div>
    </section>
  );
};
export default Calculator;
