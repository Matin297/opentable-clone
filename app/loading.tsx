import SearchRestaurantForm from "./components/SearchRestaurantForm";

const PLACEHOLDER_CARDS = new Array(10).fill("1");

export default function Loading() {
  return (
    <main>
      <header className="min-h-[26rem] p-2 bg-hero bg-no-repeat bg-cover bg-[50%] text-white flex justify-center items-center">
        <SearchRestaurantForm title="Make a free reservation" />
      </header>
      <section className="my-12 px-8">
        <ul className="grid grid-cols-auto gap-4 animate-pulse">
          {PLACEHOLDER_CARDS.map((_, i) => (
            <li
              key={i}
              className="h-[276px] rounded-lg overflow-hidden bg-slate-200"
            >
              <div className="h-[150px] bg-slate-300"></div>
              <div className="p-2">
                <h3 className="h-[28px] w-[50%] bg-slate-300 rounded mb-1"></h3>
                <div className="h-[24px] bg-slate-300 rounded mb-1"></div>
                <div className="h-[20px] bg-slate-300 rounded mb-2"></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
