import Link from "next/link";

export default function Search() {
  return (
    <>
      <header>
        <nav className="flex gap-2 px-4 py-3">
          <Link href="/" className="mr-auto">
            <img
              className="h-9 w-auto"
              src="https://cdn.otstatic.com/cfe/14/images/opentable-logo-153e80.svg"
              alt="logo"
            />
          </Link>
          <button className="px-4 text-white text-xs bg-cyan-700 rounded">
            Sign in
          </button>
          <button className="px-4 text-xs border border-cyan-700 rounded">
            Sign up
          </button>
        </nav>
      </header>
      <main>
        <header className="py-4 px-16 bg-[url('https://cdn.otstatic.com/cfe/14/images/dtp-tablet-de6f07.png')] bg-no-repeat bg-cover bg-[50%] text-white flex justify-center items-center">
          <form className="w-full max-w-[600px] flex flex-wrap gap-4">
            <input
              type="search"
              className="basis-[290px] grow p-3 rounded text-black"
              placeholder="Location, Restaurant, or Cuisine"
            />
            <button className="transition-[background-color] duration-300 ease-in-out bg-rose-600 hover:bg-rose-700 py-3 px-12 rounded">
              Let’s go
            </button>
          </form>
        </header>
        <section className="flex gap-4 p-4 max-w-4xl mx-auto">
          <aside className="divide-y divide-zinc-300 text-base w-full max-w-[15rem]">
            <section className="py-4 font-light">
              <h4 className="font-semibold mb-2">Region</h4>
              <div className="flex">
                <button className="border rounded-tl rounded-bl p-3 basis-[33%] outline-offset-[-2px] hover:outline hover:outline-2 hover:bg-zinc-100 hover:rounded">
                  $$
                </button>
                <button className="border-t border-b p-3 basis-[33%] outline-offset-[-2px] hover:outline hover:outline-2 hover:bg-zinc-100 hover:rounded">
                  $$$
                </button>
                <button className="border rounded-tr rounded-br p-3 basis-[33%] outline-offset-[-2px] hover:outline hover:outline-2 hover:bg-zinc-100 hover:rounded">
                  $$$$
                </button>
              </div>
            </section>
            <section className="py-4 font-light">
              <h4 className="font-semibold mb-2">Region</h4>
              <div className="flex gap-2 mb-1">
                <input type="checkbox" id="toronto" />
                <label>Toronto</label>
              </div>
              <div className="flex gap-2 mb-1">
                <input type="checkbox" id="ottawa" />
                <label>Ottawa</label>
              </div>
              <div className="flex gap-2 mb-1">
                <input type="checkbox" id="montreal" />
                <label>Montreal</label>
              </div>
              <div className="flex gap-2 mb-1">
                <input type="checkbox" id="hamilton" />
                <label>Hamilton</label>
              </div>
              <div className="flex gap-2 mb-1">
                <input type="checkbox" id="kingston" />
                <label>Kingston</label>
              </div>
              <div className="flex gap-2 mb-1">
                <input type="checkbox" id="niagara" />
                <label>Niagara</label>
              </div>
            </section>
            <section className="py-4">
              <h4 className="font-semibold mb-2">Cuisine</h4>
              <div className="flex gap-2 mb-1">
                <input type="checkbox" id="mexican" />
                <label>Mexican</label>
              </div>
              <div className="flex gap-2 mb-1">
                <input type="checkbox" id="italian" />
                <label>Italian</label>
              </div>
              <div className="flex gap-2 mb-1">
                <input type="checkbox" id="chinese" />
                <label>Chinese</label>
              </div>
            </section>
          </aside>
          <section className="grow">
            <ul className="divide-y divide-zinc-300">
              <li className="flex gap-4 pt-4 mb-4 text-sm">
                <Link href="/" className="mb-1">
                  <img
                    className="rounded-md"
                    src="https://resizer.otstatic.com/v2/photos/medium/1/53136804.jpg"
                    alt="meal"
                  />
                </Link>
                <div className="grow">
                  <Link
                    href="/"
                    className="text-cyan-600 font-semibold text-lg underline"
                  >
                    <h2>Capitol Milk Bar</h2>
                  </Link>
                  <div className="my-1">
                    ⭐⭐⭐⭐⭐ <Link href="/">(0)</Link>
                  </div>
                  <div className="mb-4">
                    <span className="mr-[1px]">$</span>
                    <span className="mr-[1px]">$</span>
                    <span className="mr-[1px] text-zinc-300">$</span>
                    <span className="mr-[1px] text-zinc-300">$</span> • American
                    • Kembangan
                  </div>
                  <p>
                    …is a retro Singapore eatery that makes a wonderful first
                    impression. Located in the Arcade @ The{" "}
                    <strong>Capitol</strong> Kempinski, this fun Stamford Road
                    restaurant boasts a menu packed full of lip-smacking gems.
                    The …
                  </p>
                </div>
              </li>
              <li className="flex gap-4 pt-4 mb-4 text-sm">
                <Link href="/" className="mb-1">
                  <img
                    className="rounded-md"
                    src="https://resizer.otstatic.com/v2/photos/medium/1/53134941.jpg"
                    alt="meal"
                  />
                </Link>
                <div className="grow">
                  <Link
                    href="/"
                    className="text-cyan-600 font-semibold text-lg underline"
                  >
                    <h2>Capitol Milk Bar</h2>
                  </Link>
                  <div className="my-1">
                    ⭐⭐⭐⭐⭐ <Link href="/">(0)</Link>
                  </div>
                  <div className="mb-4">
                    <span className="mr-[1px]">$</span>
                    <span className="mr-[1px]">$</span>
                    <span className="mr-[1px] text-zinc-300">$</span>
                    <span className="mr-[1px] text-zinc-300">$</span> • American
                    • Kembangan
                  </div>
                  <p>
                    …is a retro Singapore eatery that makes a wonderful first
                    impression. Located in the Arcade @ The{" "}
                    <strong>Capitol</strong> Kempinski, this fun Stamford Road
                    restaurant boasts a menu packed full of lip-smacking gems.
                    The …
                  </p>
                </div>
              </li>
              <li className="flex gap-4 pt-4 mb-4 text-sm">
                <Link href="/" className="mb-1">
                  <img
                    className="rounded-md"
                    src="https://resizer.otstatic.com/v2/photos/medium/1/54314101.jpg"
                    alt="meal"
                  />
                </Link>
                <div className="grow">
                  <Link
                    href="/"
                    className="text-cyan-600 font-semibold text-lg underline"
                  >
                    <h2>Capitol Milk Bar</h2>
                  </Link>
                  <div className="my-1">
                    ⭐⭐⭐⭐⭐ <Link href="/">(0)</Link>
                  </div>
                  <div className="mb-4">
                    <span className="mr-[1px]">$</span>
                    <span className="mr-[1px]">$</span>
                    <span className="mr-[1px] text-zinc-300">$</span>
                    <span className="mr-[1px] text-zinc-300">$</span> • American
                    • Kembangan
                  </div>
                  <p>
                    …is a retro Singapore eatery that makes a wonderful first
                    impression. Located in the Arcade @ The{" "}
                    <strong>Capitol</strong> Kempinski, this fun Stamford Road
                    restaurant boasts a menu packed full of lip-smacking gems.
                    The …
                  </p>
                </div>
              </li>
              <li className="flex gap-4 pt-4 mb-4 text-sm">
                <Link href="/" className="mb-1">
                  <img
                    className="rounded-md"
                    src="https://resizer.otstatic.com/v2/photos/medium/1/53136804.jpg"
                    alt="meal"
                  />
                </Link>
                <div className="grow">
                  <Link
                    href="/"
                    className="text-cyan-600 font-semibold text-lg underline"
                  >
                    <h2>Capitol Milk Bar</h2>
                  </Link>
                  <div className="my-1">
                    ⭐⭐⭐⭐⭐ <Link href="/">(0)</Link>
                  </div>
                  <div className="mb-4">
                    <span className="mr-[1px]">$</span>
                    <span className="mr-[1px]">$</span>
                    <span className="mr-[1px] text-zinc-300">$</span>
                    <span className="mr-[1px] text-zinc-300">$</span> • American
                    • Kembangan
                  </div>
                  <p>
                    …is a retro Singapore eatery that makes a wonderful first
                    impression. Located in the Arcade @ The{" "}
                    <strong>Capitol</strong> Kempinski, this fun Stamford Road
                    restaurant boasts a menu packed full of lip-smacking gems.
                    The …
                  </p>
                </div>
              </li>
              <li className="flex gap-4 pt-4 mb-4 text-sm">
                <Link href="/" className="mb-1">
                  <img
                    className="rounded-md"
                    src="https://resizer.otstatic.com/v2/photos/medium/1/53134941.jpg"
                    alt="meal"
                  />
                </Link>
                <div className="grow">
                  <Link
                    href="/"
                    className="text-cyan-600 font-semibold text-lg underline"
                  >
                    <h2>Capitol Milk Bar</h2>
                  </Link>
                  <div className="my-1">
                    ⭐⭐⭐⭐⭐ <Link href="/">(0)</Link>
                  </div>
                  <div className="mb-4">
                    <span className="mr-[1px]">$</span>
                    <span className="mr-[1px]">$</span>
                    <span className="mr-[1px] text-zinc-300">$</span>
                    <span className="mr-[1px] text-zinc-300">$</span> • American
                    • Kembangan
                  </div>
                  <p>
                    …is a retro Singapore eatery that makes a wonderful first
                    impression. Located in the Arcade @ The{" "}
                    <strong>Capitol</strong> Kempinski, this fun Stamford Road
                    restaurant boasts a menu packed full of lip-smacking gems.
                    The …
                  </p>
                </div>
              </li>
              <li className="flex gap-4 pt-4 mb-4 text-sm">
                <Link href="/" className="mb-1">
                  <img
                    className="rounded-md"
                    src="https://resizer.otstatic.com/v2/photos/medium/1/54314101.jpg"
                    alt="meal"
                  />
                </Link>
                <div className="grow">
                  <Link
                    href="/"
                    className="text-cyan-600 font-semibold text-lg underline"
                  >
                    <h2>Capitol Milk Bar</h2>
                  </Link>
                  <div className="my-1">
                    ⭐⭐⭐⭐⭐ <Link href="/">(0)</Link>
                  </div>
                  <div className="mb-4">
                    <span className="mr-[1px]">$</span>
                    <span className="mr-[1px]">$</span>
                    <span className="mr-[1px] text-zinc-300">$</span>
                    <span className="mr-[1px] text-zinc-300">$</span> • American
                    • Kembangan
                  </div>
                  <p>
                    …is a retro Singapore eatery that makes a wonderful first
                    impression. Located in the Arcade @ The{" "}
                    <strong>Capitol</strong> Kempinski, this fun Stamford Road
                    restaurant boasts a menu packed full of lip-smacking gems.
                    The …
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </section>
      </main>
      <footer className="p-4 text-white text-sm bg-gray-800">
        <p>
          Copyright © 2023 OpenTable, Inc. 1 Montgomery St Ste 500, San
          Francisco CA 94104 - All rights reserved.
        </p>
      </footer>
    </>
  );
}
