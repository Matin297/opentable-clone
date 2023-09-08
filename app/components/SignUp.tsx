"use client";

import { useState } from "react";

import Dialog from "@/components/Dialog";
import DialogHeader from "@/components/Dialog/Header";

export default function SignUp() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  console.log(isOpen);

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
          <form className="flex flex-col gap-2">
            <div className="flex flex-1 flex-wrap gap-2">
              <input
                autoComplete="off"
                className="grow border rounded p-2"
                placeholder="First Name"
                required
                name="first_name"
              />
              <input
                autoComplete="off"
                className="grow border rounded p-2"
                placeholder="Last Name"
                required
                name="last_name"
              />
            </div>
            <div className="flex flex-1 flex-wrap gap-2">
              <input
                autoComplete="off"
                className="grow border rounded p-2"
                placeholder="City"
                required
                name="city"
              />
              <input
                autoComplete="off"
                className="grow border rounded p-2"
                placeholder="Phone"
                required
                name="phone"
              />
            </div>
            <input
              autoComplete="off"
              className="border rounded p-2"
              placeholder="Email"
              type="email"
              required
              name="email"
            />
            <input
              autoComplete="off"
              className="border rounded p-2"
              placeholder="Password"
              type="password"
              required
              name="password"
            />
            <button
              type="submit"
              className="bg-rose-600 text-white p-2 rounded hover:bg-rose-700"
            >
              Sign In
            </button>
          </form>
        </main>
      </Dialog>
    </>
  );
}
