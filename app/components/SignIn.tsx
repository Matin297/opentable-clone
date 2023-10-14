"use client";

import { useState, ChangeEvent } from "react";
import axios from "axios";

import { useAuthContext } from "@/contexts/auth";
import useAsync from "@/hooks/useAsync";
import { User } from "@/utils/prisma";

import Spinner from "@/components/Spinner";
import Alert from "@/components/Alert";
import Dialog from "@/components/Dialog";
import DialogHeader from "@/components/Dialog/Header";

type Error = {
  message?: string;
  password?: string;
  email?: string;
};

export default function SignIn() {
  const [isOpen, setIsOpen] = useState(false);

  const [, setAuth] = useAuthContext();

  const { run, isLoading, isFailed, error } = useAsync<User, Error>();

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  async function submitHandler(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target);

    run(axios.post("/api/signin", formData))
      .then(setAuth)
      .then(() => {
        event.target.reset();
        setIsOpen(false);
      });
  }

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 text-xs text-cyan-700 border border-cyan-700 rounded"
      >
        Sign In
      </button>
      <Dialog isOpen={isOpen} onClose={closeModal}>
        <DialogHeader>
          <h2 className="text-xl font-bold">Sign In</h2>
          <button onClick={closeModal}>X</button>
        </DialogHeader>

        <main>
          {isFailed && error?.message && (
            <Alert className="mb-2" message={error.message} />
          )}
          <form onSubmit={submitHandler} className="flex flex-col gap-2">
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
              {isLoading ? <Spinner /> : "Sign In"}
            </button>
          </form>
        </main>
      </Dialog>
    </>
  );
}
