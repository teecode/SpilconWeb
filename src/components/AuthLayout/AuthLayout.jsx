import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../helpers/Routes";

export default function AuthLayout({ children }) {
  return (
    <Fragment>
      <div class="flex">
        <div class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r bg-orange-400">
          <h2 class="text-3xl font-semibold text-center text-white">
            Spilcon 2.0
          </h2>

          <div class="flex flex-col justify-between mt-6">
            <aside>
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200 hover:text-cyan-500`
                        : `flex items-center px-4 py-2 mt-5 text-white rounded-md hover:bg-gray-200 hover:text-cyan-500`
                    }
                    to={ROUTES.REGISTRATION}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>

                    <span class="mx-4 font-medium">Registration</span>
                  </NavLink>
                </li>

                <li>
                  <a
                    class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200 hover:text-cyan-500"
                    href="/register"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span class="mx-4 font-medium">Attendance</span>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>

        <div class="w-full h-full overflow-y-auto">
          <div class="px-40 py-20 border-4 border-orange-400 border-dotted">
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
