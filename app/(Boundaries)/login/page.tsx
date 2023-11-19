"use client";

import {
  isPenjualAvailable,
  redirectMainPage,
} from "@/app/(Controls)/KantinHandler/handler";
import { useRouter } from "next/navigation";
import { ReactElement, useEffect, useState } from "react";
const HalamanLogin = () => {
  const router = useRouter();
  const [errorElement, setErrorElement] = useState<ReactElement | undefined>();
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  useEffect(() => {
    handleLogin(username, password);
  }, [username, password]);
  useEffect(() => {
    setErrorElement(undefined);
  }, []);
  const isFormComplete = (username: String, password: String) => {
    return username !== "" && password !== "";
  };
  const createErrorElement = (message: String) => {
    setErrorElement(<div>{message}</div>);
  };
  const handleLogin = (username: String, password: String) => {
    if (isFormComplete(username, password)) {
      isPenjualAvailable(username, password).then((res) => {
        if (res === true) {
          redirectMainPage(router);
        }
      });
    } else {
      createErrorElement("username dan/atau password tidak boleh kosong");
    }
  };
  return (
    <div className="z-10 h-screen w-screen flex flex-col justify-center items-center ">
      <div className="">
        <h1>Login</h1>
      </div>
      <div className="">Selamat Datang Kembali!</div>
      <form
        className="flex flex-col "
        onSubmit={(event: any) => {
          event.preventDefault();
          setUsername(event.target.username.value);
          setPassword(event.target.password.value);
        }}
      >
        <input placeholder="Username" id="username" type="text" />
        <input placeholder="Password" id="password" type="password" />
        <button>Masuk</button>
      </form>
      <div>{errorElement ? errorElement : ""}</div>
    </div>
  );
};
export default HalamanLogin;
