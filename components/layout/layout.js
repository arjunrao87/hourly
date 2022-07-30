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
            <div className="flex h-full mx-auto overflow-y-auto">
              <div className="py-0">
                <div className="mt-8 max-w-md">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="text-lg md:text-xl font-bold">
                      About You
                    </div>
                    <label className="block">
                      <span className="text-gray-700  dark:text-slate-100">
                        How much do you make?
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
                        placeholder=""
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700  dark:text-slate-100">
                        Do you like doing this type of task?
                      </span>
                      <select
                        className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      >
                        <option>No</option>
                        <option>Yes</option>
                        <option>Sometimes</option>
                      </select>
                    </label>
                    <h3 className="text-lg md:text-xl font-bold">
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
                        placeholder="Values in increments of 0.5hr"
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700 dark:text-slate-100">
                        How much would you pay for the task to be done?
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
                        placeholder=""
                      />
                    </label>
                    <div className="block">
                      <div className="mt-2">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              className="
                          rounded
                          border-gray-300
                          text-indigo-600
                          shadow-sm
                          focus:border-indigo-300
                          focus:ring
                          focus:ring-offset-0
                          focus:ring-indigo-200
                          focus:ring-opacity-50
                        "
                              defaultChecked
                            />
                            <span className="ml-2  dark:text-slate-100">
                              Email me
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
