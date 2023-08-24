import Link from "next/link";

export default function ReserveRestaurant() {
  return (
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
              Sign me up to receive dining offers and news from this restaurant
              by email.
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
          We may contact you about this reservation, so please ensure your email
          and phone number are up to date.
        </p>
        <p>
          Your table will be reserved for 1 hour 30 minutes for parties of up to
          2; 2 hours for parties of up to 4; 2 hours 30 minutes for parties of
          up to 6; and 2 hours 45 minutes for parties of 7+.
        </p>
      </section>
    </main>
  );
}
