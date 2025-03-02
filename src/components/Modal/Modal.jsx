"use client";

import styles from "./Modal.module.scss";

import Polygon from "@/../public/modal-polygon.png";
import Close from "@/../public/close.svg";

import { useState } from "react";

import { sendFormToTelegram } from "../../utils/sendTelegram";

import {
  resetData,
  setIsVisit,
  setShowModal,
} from "../../redux/slices/modalSlice";

import toast from "react-hot-toast";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { useTranslation } from "react-i18next";

const Modal = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [post, setPost] = useState("");

  const { t } = useTranslation();

  const { size, termin, price, showModal, isVisit } = useAppSelector(
    (state) => state.modal
  );
  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (name.trim() === "" || tel.trim() === "") {
      toast.error(t("form_number_error_msg"));
      return;
    }
    if (isVisit) {
      let string = `Проект: Соти \nІм'я: ${name} \nНомер телефону: ${tel} \nE-mail: ${post} \n`;
      sendFormToTelegram(string, t);
    } else {
      if (!size || !termin) {
        toast.error(t("form_size_error_msg"));
        return;
      }
      let string = `Проект: Соти \nІм'я: ${name} \nНомер телефону: ${tel} \nE-mail: ${post} \nРозмір: ${size.size}  \nТермін: ${termin} \nЦіна: ${price} грн\n`;
      sendFormToTelegram(string, t);
    }

    setName("");
    setTel("");
    setPost("");
    dispatch(resetData());
    dispatch(setIsVisit(false));
    dispatch(setShowModal(false));
  };
  return (
    <>
      <section
        className={`${styles.root} ${showModal ? styles.show_modal : ""}`}
        id="modal"
      >
        <article className={styles.wrapper}>
          <Image
            alt="Close"
            src={Close}
            className={styles.span}
            onClick={() => dispatch(setShowModal(false))}
          />
          <Image alt="Polygon" src={Polygon} className={styles.polygon} />
          <h3>{t("modal_p")}</h3>
          <div className={styles.form_block}>
            <input
              type="text"
              required
              placeholder={t("modal_name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder={t("modal_phone")}
              value={tel}
              onChange={(e) => setTel(e.target.value.replace(/\D/g, ""))}
            />
            <input
              type="mail"
              placeholder={t("modal_post")}
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </div>
          <button onClick={(e) => handleClick(e)}>{t("modal_btn")}</button>
        </article>
      </section>
      <div
        className={`${styles.overflow} ${
          showModal ? styles.show_overflow : ""
        }`}
        id="overflow"
        onClick={() => dispatch(setShowModal(false))}
      />
    </>
  );
};
export default Modal;
