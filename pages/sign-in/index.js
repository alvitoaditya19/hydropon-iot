import Image from 'next/image';
import Link from 'next/link';
import { SignInForm } from '../../components/molecules';
import { IcLogoIOT } from "../../public/Icon";

export default function SignIn() {
  return (
    <>
      <section className="sign-in mx-auto">
        <div className="row">
          <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
            <form action="">
              <div className="container mx-auto">
                <div className="pb-50">
                  <a className="navbar-brand" href="#">
                    <IcLogoIOT />
                  </a>
                </div>
                <SignInForm/>
              </div>
            </form>
          </div>
          <div className="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
            <Image src="/images/img-cover-sign-in.png" height={360} width={502} className="img-fluid" alt='img-iot'/>
            <h2 className="text-4xl fw-bold text-white mb-30 pt-50">
              Go To Digital World.
              <br />
              With IoT Technology.
            </h2>
            <p className="text-white m-0">
              Let’s to connect with our IoT
              <br /> technology for your garden system
              <br />
              for the best vegetable
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
