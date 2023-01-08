import { useState}  from 'react'

export default function Navigation({ setCurrent }) {
  return (
    <>
      <div className="relative fixed w-full bg-gradient-to-r from-sky-200 to-teal-100 inline-block">
        <div className="px-6 mt-6 block">
          <div>    
            <nav
              className="flex lg:h-9 items-center justify-between nav-bar"
              aria-label="Global"
            >
              <div className="lg:flex lg:min-w-0 lg:flex-1" aria-label="Global">
            
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="font-semibold text-xl">MJ Shelton</span><span> | Fullstack Engineer</span>
                </a>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900 mx-4"
                  onClick={() => setCurrent("About")}
                >
                  <span>About</span>
                </a>
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900 mx-4"
                  onClick={() => setCurrent("Portfolio")}
                >
                  Portfolio
                </a>

                <a
                  href="#"
                  className="font-semibold text-gray-900 mx-4"
                  onClick={() => setCurrent("Blog")}
                >
                  Blog
                </a>

                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:text-gray-900 mx-4"
                  onClick={() => setCurrent("Contact/Resumé")}
                >
                  Resume/Contact
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
                </div>
                <div className="mt-6 flow-root bg-gradient-to-r from-sky-200 to-teal-100">
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
