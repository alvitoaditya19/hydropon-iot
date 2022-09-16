import { useRouter } from "next/router";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setLogin } from "../../../services/auth";
import jwt_decode from "jwt-decode";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };

    if (!email || !password) {
      toast.error("Email dan Password wajib diisi!!!!!");
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message);
        console.log(response.message);
      } else {
        const response = await setLogin(data);
        if (response.error) {
          toast.error(response.message);
        } else {
          toast.success("Login Berhasil");
          const { token } = response.data;
          const tokenBase64 = btoa(token);

          const decodedHeader = jwt_decode(token);
          console.log(decodedHeader.user);

          Cookies.set("token", tokenBase64, { expires: 1 });
          // router.push('/');
        }
      }
    }
  };
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Please Sign-In for Access Your Dashboard
      </p>
      <div className="pt-50">
        <label
          htmlFor="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <input
          type="email"
        
          className="form-control rounded-pill text-lg"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>
        {/* <button type="submit"
                                className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                                role="button">Continue to Sign In</button> */}
        <a
          className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
          href="../src/sign-up.html"
          role="button"
        >
          Go To Home Page
        </a>
      </div>
    </>
  );
}
