import Link from "next/link";

export default function ReserveRestaurant() {
  return (
    <>
      <header className="border-b">
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
      <main className="grid grid-rows-[repeat(2, auto)] lg:grid-cols-3 gap-5 max-w-5xl mx-auto p-5">
        <section className="lg:col-span-2">
          <p className="text-lg font-semibold">You’re almost done!</p>
          <div className="flex gap-4 my-4">
            <img
              className="w-16 h-16 rounded-md"
              src="https://images.otstatic.com/prod1/52574603/3/small.jpg"
              alt="restraunt"
            />
            <div className="text-base font-medium">
              <h2 className="text-2xl font-bold mb-1">Eden Restaurant</h2>
              <div className="flex gap-4 flex-wrap">
                <span>Sat, Aug 19</span>
                <span>6:45 PM</span>
                <span>2 people (Standard seating)</span>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-4">
            <h3 className="font-medium text-base">Details</h3>
            <div className="flex gap-4">
              <input
                className="flex-1 border p-3 rounded"
                placeholder="First name"
              />
              <input
                className="flex-1 border p-3 rounded"
                placeholder="Last name"
              />
            </div>
            <div className="flex gap-4">
              <input
                className="flex-1 border p-3 rounded"
                placeholder="Phone number"
                type="tel"
              />
              <input
                className="flex-1 border p-3 rounded"
                placeholder="email"
                type="email"
              />
            </div>
            <div className="flex gap-4">
              <select
                className="flex-1 border p-3 rounded text-placeholder"
                name="occasion"
                id="occasion"
              >
                <option value="default">Select an occasion (optional)</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date">Date night</option>
                <option value="business_meal">Business Meal</option>
                <option value="special_occasion">Celebration</option>
              </select>
              <input
                className="flex-1 border p-3 rounded"
                placeholder="Last name"
              />
            </div>
            <div>
              <input
                type="checkbox"
                className="mr-1"
                id="optInEmailRestaurant"
                name="optIns"
              />
              <label htmlFor="optInEmailRestaurant">
                Sign me up to receive dining offers and news from this
                restaurant by email.
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="mr-1"
                id="optInEmailMarketing"
                name="optIns"
              />
              <label htmlFor="optInEmailMarketing">
                Sign me up to receive dining offers and news from OpenTable by
                email.
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="mr-1"
                id="optInSms"
                name="optIns"
              />
              <label htmlFor="optInSms">
                Yes, I want to get text updates and reminders about my
                reservations.
              </label>
            </div>
            <button
              type="submit"
              className="w-full text-white transition-[background-color] duration-300 ease-in-out bg-rose-600 hover:bg-rose-700 py-3 px-12 rounded"
            >
              Complete reservation
            </button>
          </form>
          <p className="mt-4 text-sm font-light">
            By clicking “Complete reservation” you agree to the{" "}
            <Link href="/" className="text-rose-600 hover:underline">
              OpenTable Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="/" className="text-rose-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            . Message & data rates may apply. You can opt out of receiving text
            messages at any time in your account settings or by replying STOP.
          </p>
        </section>
        <section className="flex flex-col gap-4 text-sm">
          <h4 className="font-bold text-base">What to know before you go</h4>
          <h5 className="font-bold">Important dining information</h5>
          <p>
            We have a 15 minute grace period. Please call us if you are running
            later than 15 minutes after your reservation time.
          </p>
          <p>
            We may contact you about this reservation, so please ensure your
            email and phone number are up to date.
          </p>
          <p>
            Your table will be reserved for 1 hour 30 minutes for parties of up
            to 2; 2 hours for parties of up to 4; 2 hours 30 minutes for parties
            of up to 6; and 2 hours 45 minutes for parties of 7+.
          </p>
        </section>
      </main>
      <footer className="mt-16 px-8 py-12 text-white text-sm bg-gray-800">
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
