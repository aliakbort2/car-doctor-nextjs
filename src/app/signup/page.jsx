"use client";

import SocialSignin from "@/components/shared/SocialSignin";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [isMounted, setIsMounted] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();

    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    // console.log(resp);
    if (resp.status === 200) {
      event.target.reset();
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-2 sm:px-2.5 md:px-3">
        <div className="md:flex justify-between md:h-screen items-center">
          <div className="md:flex-1">
            <Image
              src="https://i.ibb.co/0GWgxFp/Frame.png"
              alt="image"
              width={400}
              height={500}
              className="hidden md:block"
              priority
            />
          </div>
          <div className="card-body flex-1 border mt-[35%] md:mt-0">
            <h1 className="text-3xl font-bold text-center mb-10">Sign Up</h1>
            <form onSubmit={handleSignUp} className="w-full md:w-4/5 mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-primary text-white hover:text-primary hover:font-semibold cursor-pointer rounded"
                  type="submit"
                  value="Signup"
                />
              </div>
            </form>
            <div>
              <SocialSignin />
            </div>
            <p className="my-4 text-center">
              Already have an account?{" "}
              <Link className="text-primary font-bold" href="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
