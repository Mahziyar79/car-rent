import { useRouter } from "next/router";
import React from "react";

function ChangeLang({ setMenuOpen, manueState }) {
  const router = useRouter();
  const { locale } = useRouter();
  const changeLangHandler = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
    if (manueState) {
      setMenuOpen(false);
    }
  };
  return (
    <select
      className={`text-lg bg-transparent bg-gray-100 py-1 px-3 rounded-md text-gray-700 font-sans ${manueState && "w-full"}`}
      onChange={changeLangHandler}
      value={locale}
    >
      <option value="en">EN</option>
      <option value="fa">FA</option>
    </select>
  );
}

export default ChangeLang;
