import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="grid place-content-center">
      <Link
        to="/"
        className="text-4xl font-bold text-yellow-600 text-center my-12"
      >
        hepsiburda
      </Link>
      <div className="bg-yellow-100 py-10 px-12 shadow-lg rounded-md">
        <div className="my-4 flex bg-gray-50 py-1">
          <span className="font-bold p-3 text-2xl bg-indigo-600 block tracking-wider text-gray-800 font-mono">
            Giriş Yap
          </span>
          <span className="font-bold p-3 text-2xl block tracking-wider text-gray-800 font-mono">
            Üye Ol
          </span>
        </div>
        <form action="" className="flex flex-col items-center ">
          <input
            className="mb-4 rounded-md py-1 px-2 focus:border-solid focus:border-2  focus:border-blue-400"
            type="text"
            placeholder="Kullanıcı Adı"
          />
          <input
            className="mb-4 rounded-md py-1 px-2 focus:border-solid focus:border-2  focus:border-blue-400"
            type="text"
            placeholder="Şifre"
          />
        </form>
        <a className="text-blue-500 font-medium tracking-wide" href="">
          Şifremi unuttum
        </a>
      </div>
    </div>
  );
}

export default Login;
