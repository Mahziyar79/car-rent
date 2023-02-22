import { useRouter } from "next/router";
import React from "react";
import Select from "react-select";

const langOption = [
  { value: "en", label: "EN"},
  { value: "fa", label: "فارسی"},
];
const customStyles = {
  container: provided => ({
    ...provided,
    width: 130,
    fontFamily:"iransans",
  })
};

function ChangeLang({ setMenuOpen, manueState }) {
  const router = useRouter();
  const { locale } = useRouter();


  const changeLangHandler = (e) => {
    const locale = e.value;
    router.push("/", "/", { locale });
    if (manueState) {
      setMenuOpen(false);
    }
  };
  return (
    <>
      <Select
        style={{width: "400px"}}
        onChange={(e) => changeLangHandler(e)}
        // defaultValue={langOption[0]}
        value={{label : locale==="en" ? "EN" : "فارسی"}}
        options={langOption}
        isSearchable={false}
        hideSelectedOptions={true}
        styles={customStyles}
      />
      {/* <select
        className={`bg-transparent bg-gray-100 py-2 px-4 rounded-md text-gray-700 font-sans ${
          manueState && "w-full"
        }`}
        style={{ fontFamily: "iransans" }}
        onChange={changeLangHandler}
        value={locale}
      >
        <option value="en">EN</option>
        <option value="fa">فارسی</option>
      </select> */}
    </>
  );
}

export default ChangeLang;
