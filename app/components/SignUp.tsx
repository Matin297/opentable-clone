"use client";

import { useState, ChangeEvent } from "react";
import Spinner from "@/components/Spinner";
import Alert from "@/components/Alert";

import useSignup from "@/hooks/useSignup";

import Dialog from "@/components/Dialog";
import DialogHeader from "@/components/Dialog/Header";

export default function SignUp() {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, isFailed, error, signup } = useSignup();

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  async function submitHandler(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target);
    signup(formData).then(() => {
      event.target.reset();
      setIsOpen(false);
    });
  }

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 text-white text-xs bg-cyan-700 rounded"
      >
        Sign Up
      </button>
      <Dialog isOpen={isOpen} onClose={closeModal}>
        <DialogHeader>
          <h2 className="text-xl font-bold">Sign Up</h2>
          <button onClick={closeModal}>X</button>
        </DialogHeader>

        <main>
          {isFailed && error?.message && (
            <Alert className="mb-2" message={error.message} />
          )}
          <form onSubmit={submitHandler} className="flex flex-col gap-2">
            <div className="flex flex-1 flex-wrap gap-2">
              <div className="grow">
                <input
                  autoComplete="off"
                  className="border rounded p-2 w-full"
                  placeholder="First Name"
                  required
                  name="first_name"
                  disabled={isLoading}
                />
                {isFailed && error?.first_name && (
                  <Alert className="mt-2" message={error.first_name} />
                )}
              </div>
              <div className="grow">
                <input
                  autoComplete="off"
                  className="border rounded p-2 w-full"
                  placeholder="Last Name"
                  required
                  name="last_name"
                  disabled={isLoading}
                />
                {isFailed && error?.last_name && (
                  <Alert className="mt-2" message={error.last_name} />
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-wrap gap-2">
              <div className="grow">
                <input
                  autoComplete="off"
                  className="w-full border rounded p-2"
                  placeholder="City"
                  required
                  name="city"
                  disabled={isLoading}
                />
                {isFailed && error?.city && (
                  <Alert className="mt-2" message={error.city} />
                )}
              </div>
              <div className="grow ">
                <input
                  autoComplete="off"
                  className="w-full border rounded p-2"
                  placeholder="Phone"
                  required
                  name="phone"
                  disabled={isLoading}
                />
                {isFailed && error?.phone && (
                  <Alert className="mt-2" message={error.phone} />
                )}
              </div>
            </div>
            <div>
              <input
                autoComplete="off"
                className="w-full border rounded p-2"
                placeholder="Email"
                type="email"
                required
                name="email"
                disabled={isLoading}
              />
              {isFailed && error?.email && (
                <Alert className="mt-2" message={error.email} />
              )}
            </div>
            <div>
              <input
                autoComplete="off"
                className="w-full border rounded p-2"
                placeholder="Password"
                type="password"
                required
                name="password"
                disabled={isLoading}
              />
              {isFailed && error?.password && (
                <Alert className="mt-2" message={error.password} />
              )}
            </div>
            <button
              type="submit"
              className="bg-rose-600 text-white p-2 rounded hover:bg-rose-700 flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Sign Up"}
            </button>
          </form>
        </main>
      </Dialog>
    </>
  );
}
