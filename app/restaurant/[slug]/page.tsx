import Link from "next/link";

export default function RestaurantDetails() {
  return (
    <main>
      <header className="grid h-[460px] grid-cols-4 grid-rows-2 gap-1 bg-zinc-700 px-1">
        <div className="col-span-2 row-span-2 bg-[url('https://resizer.otstatic.com/v2/photos/xlarge/1/23712963.webp')] bg-center bg-cover"></div>
        <div className="bg-[url('https://resizer.otstatic.com/v2/photos/xlarge/1/24715134.webp')] bg-center bg-cover"></div>
        <div className="bg-[url('https://resizer.otstatic.com/v2/photos/xlarge/1/24715133.webp')] bg-center bg-cover"></div>
        <div className="bg-[url('https://resizer.otstatic.com/v2/photos/xlarge/1/24715132.webp')] bg-center bg-cover"></div>
        <div className="bg-[url('https://resizer.otstatic.com/v2/photos/xlarge/1/24715131.webp')] bg-center bg-cover"></div>
      </header>
      <main className="flex items-start gap-6 max-w-5xl mx-auto mt-[-60px]">
        <section className="max-w-[70%] shadow-xl bg-white rounded-md p-5 flex flex-col gap-8">
          <nav className="flex gap-5 border-b font-medium">
            <Link
              className="text-rose-600 border-b-2 border-b-red-600"
              href="#overview"
            >
              Overview
            </Link>
            <Link className="pb-4" href="#photos">
              Photos
            </Link>
            <Link className="pb-4" href="#reviews">
              Reviews
            </Link>
          </nav>
          <article id="overview">
            <h1 className="pb-8 mb-4 border-b text-5xl font-semibold">
              Ruth's Chris Steak House - Marina Bay
            </h1>
            <div className="text-sm flex gap-4 font-medium mb-8">
              ⭐⭐⭐⭐⭐ <span>3.9</span> <span>90 Reviews</span>
            </div>
            <p>
              The best USDA Prime steak is at Ruth’s Chris Steak House in
              Singapore. With our special 500° sizzle and award-winning wine
              list, we make any occasion an extra-special one. Whether you’re
              joining us for a business dinner, a private party or just a drink
              at the bar, our Singapore steakhouse team looks forward to
              delivering superior service and a dining experience to remember.
            </p>
            <Link className="text-rose-600" href="/">
              Read more
            </Link>
          </article>
          <article id="photos">
            <h2 className="text-2xl font-bold pb-4 mb-4 border-b">29 Photos</h2>
            <section className="grid h-[320px] grid-cols-4 grid-rows-2 gap-1 bg-zinc-700 px-1">
              <div className="col-span-2 row-span-2 bg-[url('https://resizer.otstatic.com/v2/photos/xlarge/1/23712963.webp')] bg-center bg-cover"></div>
              <div className="bg-[url('https://resizer.otstatic.com/v2/photos/xlarge/1/24715134.webp')] bg-center bg-cover"></div>
              <div className="bg-[url('https://resizer.otstatic.com/v2/photos/xlarge/1/24715133.webp')] bg-center bg-cover"></div>
              <div className="bg-[url('https://resizer.otstatic.com/v2/photos/xlarge/1/24715132.webp')] bg-center bg-cover"></div>
              <div className="bg-[url('https://resizer.otstatic.com/v2/photos/xlarge/1/24715131.webp')] bg-center bg-cover"></div>
            </section>
          </article>
          <article id="reviews">
            <h2 className="text-2xl font-bold pb-4 border-b">
              What 50 people are saying
            </h2>
            <ul className="divide-y">
              <li className="text-sm flex gap-4 py-4">
                <section className="text-center w-[40%]">
                  <div className="bg-purple-800 mx-auto text-white w-[48px] h-[48px] leading-[48px] mb-2 rounded-full">
                    MM
                  </div>
                  <span className="font-medium">Matin Mir</span>
                </section>
                <section>
                  ⭐⭐⭐⭐⭐
                  <p className="mt-4">
                    It was such a treat to be able to have Chef Audrey
                    personally introduce her creations as part of the vegan
                    afternoon tea. A truly delectable and delightful mix of food
                    that enthralled my international companions. Most impressed
                    by the warm service and smiles - an afternoon well spent!
                    Thank you for having us!
                  </p>
                  <Link className="text-rose-600" href="/">
                    Read more
                  </Link>
                </section>
              </li>
              <li className="text-sm flex gap-4 py-4">
                <section className="text-center w-[40%]">
                  <div className="bg-pink-600 mx-auto text-white w-[48px] h-[48px] leading-[48px] mb-2 rounded-full">
                    MM
                  </div>
                  <span className="font-medium">Matin Mir</span>
                </section>
                <section>
                  ⭐⭐⭐⭐⭐
                  <p className="mt-4">
                    It was such a treat to be able to have Chef Audrey
                    personally introduce her creations as part of the vegan
                    afternoon tea. A truly delectable and delightful mix of food
                    that enthralled my international companions. Most impressed
                    by the warm service and smiles - an afternoon well spent!
                    Thank you for having us!
                  </p>
                  <Link className="text-rose-600" href="/">
                    Read more
                  </Link>
                </section>
              </li>
              <li className="text-sm flex gap-4 py-4">
                <section className="text-center w-[40%]">
                  <div className="bg-orange-600 mx-auto text-white w-[48px] h-[48px] leading-[48px] mb-2 rounded-full">
                    MM
                  </div>
                  <span className="font-medium">Matin Mir</span>
                </section>
                <section>
                  ⭐⭐⭐⭐⭐
                  <p className="mt-4">
                    It was such a treat to be able to have Chef Audrey
                    personally introduce her creations as part of the vegan
                    afternoon tea. A truly delectable and delightful mix of food
                    that enthralled my international companions. Most impressed
                    by the warm service and smiles - an afternoon well spent!
                    Thank you for having us!
                  </p>
                  <Link className="text-rose-600" href="/">
                    Read more
                  </Link>
                </section>
              </li>
              <li className="text-sm flex gap-4 py-4">
                <section className="text-center w-[40%]">
                  <div className="bg-lime-600 mx-auto text-white w-[48px] h-[48px] leading-[48px] mb-2 rounded-full">
                    MM
                  </div>
                  <span className="font-medium">Matin Mir</span>
                </section>
                <section>
                  ⭐⭐⭐⭐⭐
                  <p className="mt-4">
                    It was such a treat to be able to have Chef Audrey
                    personally introduce her creations as part of the vegan
                    afternoon tea. A truly delectable and delightful mix of food
                    that enthralled my international companions. Most impressed
                    by the warm service and smiles - an afternoon well spent!
                    Thank you for having us!
                  </p>
                  <Link className="text-rose-600" href="/">
                    Read more
                  </Link>
                </section>
              </li>
              <li className="text-sm flex gap-4 py-4">
                <section className="text-center w-[40%]">
                  <div className="bg-sky-600 mx-auto text-white w-[48px] h-[48px] leading-[48px] mb-2 rounded-full">
                    MM
                  </div>
                  <span className="font-medium">Matin Mir</span>
                </section>
                <section>
                  ⭐⭐⭐⭐⭐
                  <p className="mt-4">
                    It was such a treat to be able to have Chef Audrey
                    personally introduce her creations as part of the vegan
                    afternoon tea. A truly delectable and delightful mix of food
                    that enthralled my international companions. Most impressed
                    by the warm service and smiles - an afternoon well spent!
                    Thank you for having us!
                  </p>
                  <Link className="text-rose-600" href="/">
                    Read more
                  </Link>
                </section>
              </li>
            </ul>
          </article>
        </section>
        <aside className="sticky top-1 w-full max-w-[30%] shadow-xl bg-white rounded-md p-4">
          <h2 className="mb-4 text-lg font-semibold text-center border-b pb-4">
            Make a reservation
          </h2>
          <form className="text-sm">
            <div>
              <label className="font-semibold" htmlFor="party-size">
                Party Size:
              </label>
              <select
                name="sizes"
                id="party-size"
                className="pt-3 pb-2 border-b w-full"
              >
                <option value="1">1 person</option>
                <option value="2">2 persons</option>
                <option value="3">3 persons</option>
                <option value="4">4 persons</option>
                <option value="5">5 persons</option>
                <option value="6">6 persons</option>
              </select>
            </div>
            <section className="flex my-4">
              <div className="grow">
                <label className="font-semibold" htmlFor="date">
                  Date
                </label>
                <input className="pt-3 pb-2 border-b" id="date" type="date" />
              </div>
              <div className="grow">
                <label className="font-semibold" htmlFor="time">
                  Time
                </label>
                <input
                  className="w-full pt-3 pb-2 border-b"
                  id="time"
                  type="time"
                />
              </div>
            </section>
            <button className="w-full text-white font-semibold transition-[background-color] duration-300 ease-in-out bg-rose-600 hover:bg-rose-700 py-3 px-12 rounded">
              Find a time
            </button>
          </form>
        </aside>
      </main>
    </main>
  );
}
