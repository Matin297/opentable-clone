import SearchRestaurantForm from "../components/SearchRestaurantForm";
import SideBar from "./components/SideBar";

const PLACEHOLDER_CARDS = Array(10).fill("1");

export default function Loading() {
  return (
    <main>
      <header className="py-4 px-16 bg-[url('https://cdn.otstatic.com/cfe/14/images/dtp-tablet-de6f07.png')] bg-no-repeat bg-cover bg-[50%] text-white flex justify-center items-center">
        <SearchRestaurantForm />
      </header>
      <section className="flex gap-4 p-4 max-w-4xl mx-auto">
        <SideBar />
        <section className="grow">
          <ul className="divide-y divide-zinc-300 animate-pulse">
            {PLACEHOLDER_CARDS.map((_, i) => (
              <li key={i} className="flex gap-4 pt-4 mb-4">
                <div className="rounded-md w-[100px] h-[100px] bg-slate-300"></div>
                <div className="grow">
                  <div className="bg-slate-300 rounded h-[20px] w-[20%]"></div>
                  <div className="bg-slate-300 rounded h-[10px] w-[30%] my-1"></div>
                  <div className="bg-slate-300 rounded h-[15px] w-[40%] mb-4"></div>
                  <div className="bg-slate-300 rounded mb-1 h-[10px]"></div>
                  <div className="bg-slate-300 rounded mb-1 h-[10px]"></div>
                  <div className="bg-slate-300 rounded mb-1 h-[10px]"></div>
                  <div className="bg-slate-300 rounded h-[10px]"></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
