import NavBar from "../components/NavBar";
import SideMenu from "../components/SideMenu";
import PhotosPlaceholder from "../components/PhotosPlaceholder";
import { SECTION_IDs } from "../utils";

export default function Loading() {
  return (
    <main>
      <PhotosPlaceholder className="h-[460px]" />
      <main className="flex items-start gap-6 max-w-5xl mx-auto mt-[-60px]">
        <section className="w-full max-w-[70%] shadow-xl bg-white rounded-md px-5 flex flex-col gap-8">
          <NavBar className="flex gap-5 border-b sticky top-0 bg-white" />
          <article id={SECTION_IDs.OVERVIEW} className="animate-pulse">
            <div className="pb-8 mb-4 h-[48px] w-[50%] bg-slate-300 rounded"></div>
            <div className="mb-8 bg-slate-300 rounded h-[20px]"></div>
            <div className="h-[20px] mb-1 bg-slate-300 rounded"></div>
            <div className="h-[20px] mb-1 bg-slate-300 rounded"></div>
            <div className="h-[20px] mb-1 bg-slate-300 rounded"></div>
            <div className="h-[20px] bg-slate-300 rounded"></div>
          </article>
          <article id={SECTION_IDs.MENU}>
            <div className="pb-4 mb-4 border-b">Menu</div>
            <ul className="grid grid-cols-2 gap-3 animate-pulse">
              <li className="border p-2 rounded">
                <div className="mb-2 bg-slate-300 rounded w-[50%] h-[20px]"></div>
                <div className="h-[15px] mb-1 bg-slate-300 rounded"></div>
                <div className="h-[15px] mb-1 bg-slate-300 rounded"></div>
                <div className="h-[15px] mb-1 bg-slate-300 rounded"></div>
                <div className="mt-3 bg-slate-300 w-[20%] rounded h-[20px]"></div>
              </li>
              <li className="border p-2 rounded">
                <div className="mb-2 bg-slate-300 rounded w-[50%] h-[20px]"></div>
                <div className="h-[15px] mb-1 bg-slate-300 rounded"></div>
                <div className="h-[15px] mb-1 bg-slate-300 rounded"></div>
                <div className="h-[15px] mb-1 bg-slate-300 rounded"></div>
                <div className="mt-3 bg-slate-300 w-[20%] rounded h-[20px]"></div>
              </li>
            </ul>
          </article>
          <article id={SECTION_IDs.PHOTOS}>
            <div className="pb-4 mb-4 border-b">Photos</div>
            <PhotosPlaceholder className="h-[320px]" />
          </article>
          <article id={SECTION_IDs.REVIEWS}>
            <div className="pb-4 border-b">What people are saying</div>
            <ul className="divide-y animate-pulse">
              <li className="flex gap-4 py-4">
                <section className="w-full max-w-[80px]">
                  <div className="bg-slate-300 mx-auto w-[48px] h-[48px] leading-[48px] mb-2 rounded-full"></div>
                  <div className="h-[10px] bg-slate-300 rounded mb-1"></div>
                  <div className="h-[10px] bg-slate-300 rounded"></div>
                </section>
                <section className="flex-1">
                  <div className="bg-slate-300 h-[10px] rounded w-[60px] mb-4"></div>
                  <div className="h-[15px] bg-slate-300 rounded mb-1"></div>
                  <div className="h-[15px] bg-slate-300 rounded mb-1"></div>
                  <div className="h-[15px] bg-slate-300 rounded"></div>
                </section>
              </li>
            </ul>
          </article>
        </section>
        <SideMenu />
      </main>
    </main>
  );
}
