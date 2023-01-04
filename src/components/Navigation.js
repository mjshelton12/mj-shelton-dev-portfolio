// import { pageData } from "../data/pageData";
// import Pages from "./Pages";

export default function Navigation({ setCurrent }) {
  // const pages = pageData.map((option) => (
  //   <Pages
  //     key={option.id}
  //     page={option}
  //     setCurrent={setCurrent}
  //     current={current}
  //   />
  // ));
  return (
    <>
      <div className="fixed w-full bg-white">
        <div className="px-6 pt-6 lg:px-8">
          <div>
            <nav
              className="flex h-9 items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a href="google.com"><span></span></a>
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="font-semibold text-xl">MJ Shelton</span><span>, Fullstack Engineer</span>
                </a>
              </div>
              <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                  onClick={() => setCurrent("About")}
                >
                  <span>About BIG</span>
                </a>

                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                  onClick={() => setCurrent("Portfolio")}
                >
                  Portfolio BIG
                </a>

                <a
                  href="#"
                  className="font-semibold text-gray-900"
                  onClick={() => setCurrent("Blog")}
                >
                  Blog BIG
                </a>

                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900"
                  onClick={() => setCurrent("Contact/Resumé")}
                >
                  Resume/Contact BIG
                </a>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end"></div>
            </nav>
            <div role="dialog" aria-modal="true">
              <div
                focus="true"
                className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
              >
                <div className="flex h-9 items-center justify-between">
                  <div className="flex">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">MJ Shelton</span>
                    </a>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        onClick={() => setCurrent("About")}
                      >
                        About
                      </a>

                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        onClick={() => setCurrent("Portfolio")}
                      >
                        Portfolio
                      </a>

                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        onClick={() => setCurrent("Blog")}
                      >
                        Blog
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        onClick={() => setCurrent("Contact/Resumé")}
                      >
                        Contact/Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
