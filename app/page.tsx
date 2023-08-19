import Link from "next/link";

export default function Home() {
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
        <header className="min-h-[26rem] p-2 bg-hero bg-no-repeat bg-cover bg-[50%] text-white flex justify-center items-center">
          <form>
            <h1 className="text-5xl mb-4 font-bold">Make a free reservation</h1>
            <div className="flex flex-wrap gap-4">
              <input
                type="search"
                className="grow p-3 rounded text-black"
                placeholder="Location, Restaurant, or Cuisine"
              />
              <button className="transition-[background-color] duration-300 ease-in-out bg-rose-600 hover:bg-rose-700 py-3 px-12 rounded">
                Let’s go
              </button>
            </div>
          </form>
        </header>
        <section className="my-12 px-8">
          <ul className="grid grid-cols-auto gap-4">
            <li className="rounded-lg overflow-hidden border border-zinc-300">
              <Link href="/">
                <div className="h-[132px] bg-[url('https://resizer.otstatic.com/v2/photos/wide-medium/6/42547915.webp')] bg-no-repeat bg-cover"></div>
                <div className="p-2">
                  <h3 className="text-lg mb-1 font-bold">Title</h3>
                  <div className="mb-1">
                    ⭐⭐⭐⭐⭐
                    <span className="ml-1 text-xs font-medium">
                      100 reviews
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span>Mexican</span>
                    <span className="ml-1">$$$$</span>
                    <span className="ml-1">Toronto</span>
                  </div>
                  <div className="font-bold text-sm">Booked 29 times today</div>
                </div>
              </Link>
            </li>
            <li className="rounded-lg overflow-hidden border border-zinc-300">
              <Link href="/">
                <div className="h-[132px] bg-[url('https://resizer.otstatic.com/v2/photos/wide-medium/3/47581663.webp')] bg-no-repeat bg-cover"></div>
                <div className="p-2">
                  <h3 className="text-lg mb-1 font-bold">Title</h3>
                  <div className="mb-1">
                    ⭐⭐⭐⭐⭐
                    <span className="ml-1 text-xs font-medium">
                      100 reviews
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span>Mexican</span>
                    <span className="ml-1">$$$$</span>
                    <span className="ml-1">Toronto</span>
                  </div>
                  <div className="font-bold text-sm">Booked 29 times today</div>
                </div>
              </Link>
            </li>
            <li className="rounded-lg overflow-hidden border border-zinc-300">
              <Link href="/">
                <div className="h-[132px] bg-[url('https://resizer.otstatic.com/v2/photos/wide-medium/2/42423216.webp')] bg-no-repeat bg-cover"></div>
                <div className="p-2">
                  <h3 className="text-lg mb-1 font-bold">Title</h3>
                  <div className="mb-1">
                    ⭐⭐⭐⭐⭐
                    <span className="ml-1 text-xs font-medium">
                      100 reviews
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span>Mexican</span>
                    <span className="ml-1">$$$$</span>
                    <span className="ml-1">Toronto</span>
                  </div>
                  <div className="font-bold text-sm">Booked 29 times today</div>
                </div>
              </Link>
            </li>
            <li className="rounded-lg overflow-hidden border border-zinc-300">
              <Link href="/">
                <div className="h-[132px] bg-[url('https://resizer.otstatic.com/v2/photos/wide-medium/6/42547915.webp')] bg-no-repeat bg-cover"></div>
                <div className="p-2">
                  <h3 className="text-lg mb-1 font-bold">Title</h3>
                  <div className="mb-1">
                    ⭐⭐⭐⭐⭐
                    <span className="ml-1 text-xs font-medium">
                      100 reviews
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span>Mexican</span>
                    <span className="ml-1">$$$$</span>
                    <span className="ml-1">Toronto</span>
                  </div>
                  <div className="font-bold text-sm">Booked 29 times today</div>
                </div>
              </Link>
            </li>
            <li className="rounded-lg overflow-hidden border border-zinc-300">
              <Link href="/">
                <div className="h-[132px] bg-[url('https://resizer.otstatic.com/v2/photos/wide-medium/3/47581663.webp')] bg-no-repeat bg-cover"></div>
                <div className="p-2">
                  <h3 className="text-lg mb-1 font-bold">Title</h3>
                  <div className="mb-1">
                    ⭐⭐⭐⭐⭐
                    <span className="ml-1 text-xs font-medium">
                      100 reviews
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span>Mexican</span>
                    <span className="ml-1">$$$$</span>
                    <span className="ml-1">Toronto</span>
                  </div>
                  <div className="font-bold text-sm">Booked 29 times today</div>
                </div>
              </Link>
            </li>
            <li className="rounded-lg overflow-hidden border border-zinc-300">
              <Link href="/">
                <div className="h-[132px] bg-[url('https://resizer.otstatic.com/v2/photos/wide-medium/2/42423216.webp')] bg-no-repeat bg-cover"></div>
                <div className="p-2">
                  <h3 className="text-lg mb-1 font-bold">Title</h3>
                  <div className="mb-1">
                    ⭐⭐⭐⭐⭐
                    <span className="ml-1 text-xs font-medium">
                      100 reviews
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span>Mexican</span>
                    <span className="ml-1">$$$$</span>
                    <span className="ml-1">Toronto</span>
                  </div>
                  <div className="font-bold text-sm">Booked 29 times today</div>
                </div>
              </Link>
            </li>
            <li className="rounded-lg overflow-hidden border border-zinc-300">
              <Link href="/">
                <div className="h-[132px] bg-[url('https://resizer.otstatic.com/v2/photos/wide-medium/6/42547915.webp')] bg-no-repeat bg-cover"></div>
                <div className="p-2">
                  <h3 className="text-lg mb-1 font-bold">Title</h3>
                  <div className="mb-1">
                    ⭐⭐⭐⭐⭐
                    <span className="ml-1 text-xs font-medium">
                      100 reviews
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span>Mexican</span>
                    <span className="ml-1">$$$$</span>
                    <span className="ml-1">Toronto</span>
                  </div>
                  <div className="font-bold text-sm">Booked 29 times today</div>
                </div>
              </Link>
            </li>
            <li className="rounded-lg overflow-hidden border border-zinc-300">
              <Link href="/">
                <div className="h-[132px] bg-[url('https://resizer.otstatic.com/v2/photos/wide-medium/3/47581663.webp')] bg-no-repeat bg-cover"></div>
                <div className="p-2">
                  <h3 className="text-lg mb-1 font-bold">Title</h3>
                  <div className="mb-1">
                    ⭐⭐⭐⭐⭐
                    <span className="ml-1 text-xs font-medium">
                      100 reviews
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span>Mexican</span>
                    <span className="ml-1">$$$$</span>
                    <span className="ml-1">Toronto</span>
                  </div>
                  <div className="font-bold text-sm">Booked 29 times today</div>
                </div>
              </Link>
            </li>
            <li className="rounded-lg overflow-hidden border border-zinc-300">
              <Link href="/">
                <div className="h-[132px] bg-[url('https://resizer.otstatic.com/v2/photos/wide-medium/2/42423216.webp')] bg-no-repeat bg-cover"></div>
                <div className="p-2">
                  <h3 className="text-lg mb-1 font-bold">Title</h3>
                  <div className="mb-1">
                    ⭐⭐⭐⭐⭐
                    <span className="ml-1 text-xs font-medium">
                      100 reviews
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span>Mexican</span>
                    <span className="ml-1">$$$$</span>
                    <span className="ml-1">Toronto</span>
                  </div>
                  <div className="font-bold text-sm">Booked 29 times today</div>
                </div>
              </Link>
            </li>
            <li className="rounded-lg overflow-hidden border border-zinc-300">
              <Link href="/">
                <div className="h-[132px] bg-[url('https://resizer.otstatic.com/v2/photos/wide-medium/6/42547915.webp')] bg-no-repeat bg-cover"></div>
                <div className="p-2">
                  <h3 className="text-lg mb-1 font-bold">Title</h3>
                  <div className="mb-1">
                    ⭐⭐⭐⭐⭐
                    <span className="ml-1 text-xs font-medium">
                      100 reviews
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span>Mexican</span>
                    <span className="ml-1">$$$$</span>
                    <span className="ml-1">Toronto</span>
                  </div>
                  <div className="font-bold text-sm">Booked 29 times today</div>
                </div>
              </Link>
            </li>
            <li className="rounded-lg overflow-hidden border border-zinc-300">
              <Link href="/">
                <div className="h-[132px] bg-[url('https://resizer.otstatic.com/v2/photos/wide-medium/3/47581663.webp')] bg-no-repeat bg-cover"></div>
                <div className="p-2">
                  <h3 className="text-lg mb-1 font-bold">Title</h3>
                  <div className="mb-1">
                    ⭐⭐⭐⭐⭐
                    <span className="ml-1 text-xs font-medium">
                      100 reviews
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span>Mexican</span>
                    <span className="ml-1">$$$$</span>
                    <span className="ml-1">Toronto</span>
                  </div>
                  <div className="font-bold text-sm">Booked 29 times today</div>
                </div>
              </Link>
            </li>
            <li className="rounded-lg overflow-hidden border border-zinc-300">
              <Link href="/">
                <div className="h-[132px] bg-[url('https://resizer.otstatic.com/v2/photos/wide-medium/2/42423216.webp')] bg-no-repeat bg-cover"></div>
                <div className="p-2">
                  <h3 className="text-lg mb-1 font-bold">Title</h3>
                  <div className="mb-1">
                    ⭐⭐⭐⭐⭐
                    <span className="ml-1 text-xs font-medium">
                      100 reviews
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span>Mexican</span>
                    <span className="ml-1">$$$$</span>
                    <span className="ml-1">Toronto</span>
                  </div>
                  <div className="font-bold text-sm">Booked 29 times today</div>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <footer className="px-8 py-12 text-white text-sm bg-gray-800">
        <section className="flex flex-wrap gap-1 max-w-5xl mx-auto">
          <section className="grow">
            <h4 className="mb-2 font-bold uppercase">Discover</h4>
            <ul className="text-neutral-300 font-light">
              <li className="mb-2">
                <Link href="/">Dining rewards</Link>
              </li>
              <li className="mb-2">
                <Link href="/">Private Dining</Link>
              </li>
              <li className="mb-2">
                <Link href="/">Reserve for Others</Link>
              </li>
              <li className="mb-2">
                <Link href="/">Restaurants Near Me</Link>
              </li>
              <li className="mb-2">
                <Link href="/">Delivery Near Me</Link>
              </li>
            </ul>
          </section>
          <section className="grow">
            <h4 className="mb-2 font-bold uppercase">OpenTable</h4>
            <ul className="text-neutral-300 font-light">
              <li className="mb-2">
                <Link href="/">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/">Blog</Link>
              </li>
              <li className="mb-2">
                <Link href="/">Careers</Link>
              </li>
              <li className="mb-2">
                <Link href="/">Press</Link>
              </li>
            </ul>
          </section>
          <section className="grow">
            <h4 className="mb-2 font-bold uppercase">Our Sites</h4>
            <ul className="text-neutral-300 font-light">
              <li className="mb-2">
                <Link href="/">OpenTable.jp</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.de</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.es</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.ca</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.hk</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.ie</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.sg</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.nl</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.com.mx</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.co.uk</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.com.au</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.ae</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.co.th</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.it</Link>
              </li>
              <li className="mb-2">
                <Link href="/">OpenTable.com.tw</Link>
              </li>
            </ul>
          </section>
          <section>
            <section className="grow">
              <h4 className="mb-2 font-bold uppercase">Businesses</h4>
              <ul className="text-neutral-300 font-light">
                <li className="mb-2">
                  <Link href="/">Restaurant reservation</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">Software</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">Industry insights</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">Hospitality resources</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">Marketing resources</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">Operation resources</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">How to open a restaurant</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">For restaurants</Link>
                </li>
                <li className="mb-2">
                  <Link href="/">For restaurant groups</Link>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </footer>
    </>
  );
}
