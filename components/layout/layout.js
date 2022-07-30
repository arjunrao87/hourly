import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen">
        <div className="flex h-full">
          <div className="h-full hidden md:block md:w-60 items-center justify-center bg-gray-100">
            <h3> Left sidebar</h3>
          </div>
          <div className="mx-auto flex flex-col h-full w-full bg-gray-200 dark:bg-slate-700">
            <h1 className="py-4 text-left px-2 md:py-8 md:text-center md:items-center md:text-5xl font-bold dark:text-slate-100">
              🤑 Hourly
            </h1>
            <div className="flex h-full mx-auto overflow-y-auto px-6">
              <form action="/send-data-here" method="post">
                <div className="py-0">
                  <div className="mt-8 max-w-md">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="text-lg md:text-xl font-bold dark:text-slate-100">
                        About You
                      </div>
                      <label className="block">
                        <span className="text-gray-700  dark:text-slate-100">
                          How much do you make?
                        </span>
                        <span className="flex flex-row gap-x-2">
                          <select
                            className="
                                        block
                                        w-min
                                        mt-1
                                        rounded-md
                                        border-gray-300
                                        shadow-sm
                                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                      "
                          >
                            <option>USD ($)</option>
                            <option>GBP (￡)</option>
                            <option>EUR (€)</option>
                            <option>RUB (₽)</option>
                            <option>INR (₹)</option>
                            <option>Other</option>
                          </select>
                          <input
                            type="number"
                            className="
                                          mt-1
                                          block
                                          w-full
                                          rounded-md
                                          border-gray-300
                                          shadow-sm
                                          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                      "
                            placeholder="Enter amount..."
                          />
                          <select
                            className="
                                        block
                                        w-min
                                        mt-1
                                        rounded-md
                                        border-gray-300
                                        shadow-sm
                                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                      "
                          >
                            <option>Hourly</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Biweekly</option>
                            <option>Monthly</option>
                            <option>Annually</option>
                          </select>
                        </span>
                      </label>
                      <label className="block">
                        <span className="text-gray-700  dark:text-slate-100">
                          Do you like doing this type of task?
                        </span>
                        <span className="flex flex-row gap-x-2">
                          <input
                            id="default-radio-1"
                            type="radio"
                            value=""
                            name="default-radio"
                            className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="default-radio-1"
                            class="mt-1 ml-2 text-sm font-medium text-gray-700  dark:text-slate-100"
                          >
                            {" "}
                            Yes
                          </label>
                          <input
                            id="default-radio-2"
                            type="radio"
                            value=""
                            name="default-radio"
                            className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="default-radio-2"
                            class="mt-1 ml-2 text-sm font-medium text-gray-700  dark:text-slate-100"
                          >
                            {" "}
                            No
                          </label>
                          <input
                            id="default-radio-3"
                            type="radio"
                            value=""
                            name="default-radio"
                            className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="default-radio-3"
                            class="mt-1 ml-2 text-sm font-medium text-gray-700  dark:text-slate-100"
                          >
                            {" "}
                            Sometimes
                          </label>
                        </span>
                      </label>
                      <h3 className="text-lg md:text-xl font-bold  dark:text-slate-100">
                        Outsourcing your task
                      </h3>
                      <label className="block">
                        <span className="text-gray-700 dark:text-slate-100">
                          How long would the task take to complete?
                        </span>
                        <input
                          type="number"
                          className="
                                      mt-1
                                      block
                                      w-full
                                      rounded-md
                                      border-gray-300
                                      shadow-sm
                                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                    "
                          placeholder="Enter time in increments of 0.5 hr..."
                        />
                      </label>
                      <label className="block">
                        <span className="text-gray-700 dark:text-slate-100">
                          How much would you pay for the task to be done?
                        </span>
                        <span className="flex flex-row gap-x-2">
                          <select
                            className="
                                        block
                                        w-min
                                        mt-1
                                        rounded-md
                                        border-gray-300
                                        shadow-sm
                                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                      "
                          >
                            <option>USD ($)</option>
                            <option>GBP (￡)</option>
                            <option>EUR (€)</option>
                            <option>RUB (₽)</option>
                            <option>INR (₹)</option>
                            <option>Other</option>
                          </select>
                          <input
                            type="number"
                            className="
                                          mt-1
                                          block
                                          w-full
                                          rounded-md
                                          border-gray-300
                                          shadow-sm
                                          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                      "
                            placeholder="Enter amount..."
                          />
                          <select
                            className="
                                        block
                                        w-min
                                        mt-1
                                        rounded-md
                                        border-gray-300
                                        shadow-sm
                                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                      "
                          >
                            <option>Hourly</option>
                            <option>Lump sum</option>
                          </select>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="py-6 items-center">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="h-full hidden md:block md:w-60 items-center justify-center bg-gray-100">
            <h3> Right sidebar</h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
