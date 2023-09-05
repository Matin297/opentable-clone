export default function SideMenu() {
  return (
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
  );
}
