import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page max-h-screen">
      <div className="container">
        <div className="items-center justify-content-center h-screen">
          <div className="text-center">
            <Image src="/images/img-robot.png" className="img-fluid" height={400} width={500} alt='robot'/>
            <h1 className="title-home-page font-semibold">
              WELCOME TO OUR SERVER
            </h1>
            <h1 className="sub-title-home-page md:mt-6 mt-2 md:mb-8 mb-6">
              Connected to your Digital World with Us
            </h1>
            <Link href="/sign-in">
              <a className="btn-get-started">
                Get Started
              </a>
            </Link>
            <Link href="/dashboard">
              <a className="btn-get-started">
                Dashboard
              </a>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
