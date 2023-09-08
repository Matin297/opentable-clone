"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main className="bg-red-100 text-red-500 p-4 mx-auto max-w-[500px] break-words rounded-md my-6">
      <h1 className="text-xl font-bold mb-6">{error.name}</h1>

      <h2 className="mb-1 font-semibold">Message:</h2>
      <p className="mb-6">{error.message}</p>

      <h2 className="mb-1 font-semibold">Stack:</h2>
      <p className="text-sm">{error.stack}</p>
    </main>
  );
}
