import Link from "next/link";

export default function Sources() {
  return (
    <footer className="px-8 py-12 mt-4 text-white text-sm bg-gray-800">
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
  );
}
