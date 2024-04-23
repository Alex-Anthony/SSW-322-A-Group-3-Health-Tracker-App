import React from "react";
import Link from "next/link";

const LoginBox = () => {
  return (
    <div className="hero min-h-screen bg-primary">
      <div className="hero-content flex-col">
        <div className="text-center w-full max-w-sm">
          <h1 className="text-5xl font-bold text-primary-content">Login</h1>
          <p className="py-6 text-primary-content">
            Enter your credentials or click <Link href="/sign-up"> here </Link>{" "}
            to create a new account.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <Link href="/user-portal">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
