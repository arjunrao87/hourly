import Header from "../header/header";
import Footer from "../footer/footer";
import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

export default function Layout({ children }) {
  const router = useRouter();

  const [results_page, setResultsPage] = useState(false);
  const [salary_currency, setSalaryCurrency] = useState("USD ($)");
  const [salary_amount, setSalaryAmount] = useState(0);
  const [salary_duration, setSalaryDuration] = useState(0);
  const [radio_enjoyment_index, setRadioEnjoymentIndex] = useState(0);
  const [task_duration, setTaskDuration] = useState(0);
  const [task_currency, setTaskCurrency] = useState("USD ($)");
  const [task_amount, setTaskAmount] = useState(0);
  const [task_payment_duration, setPaymentDuration] = useState("Hourly");

  const onSubmit = (e) => {
    e.preventDefault();
    setResultsPage(true);
    setSalaryCurrency(e.target.elements.salary_currency.value);
    setSalaryAmount(e.target.elements.salary_amount.value);
    setSalaryDuration(e.target.elements.salary_duration.value);
    setTaskDuration(e.target.elements.task_duration.value);
    setTaskCurrency(e.target.elements.task_currency.value);
    setTaskAmount(e.target.elements.task_amount.value);
    setPaymentDuration(e.target.elements.task_payment_duration.value);
    e.target.elements.radio_enjoyment.forEach(function (value, index) {
      if (value.checked === true) {
        setRadioEnjoymentIndex(index);
        return;
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen">
        <div className="flex h-full">
          <div className="h-full hidden md:block md:w-60 items-center justify-center bg-gray-100">
            <h3> Left sidebar</h3>
          </div>
          <div className="mx-auto flex flex-col h-full w-full bg-gray-200 dark:bg-slate-700">
            <h1 className="py-4 text-xl text-left px-2 md:py-8 md:text-center md:items-center md:text-5xl font-bold dark:text-slate-100">
              <Link href="/">
                <a>🤑 Hourly</a>
              </Link>
            </h1>
            {results_page === false && (
              <div className="flex h-full mx-auto overflow-y-auto px-6">
                <form onSubmit={onSubmit.bind(this)}>
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
                              name="salary_currency"
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
                            <div className="flex flex-col">
                              <input
                                type="number"
                                required
                                name="salary_amount"
                                min="0"
                                className="mt-1
                                          block
                                          w-full
                                          rounded-md
                                          border-gray-300
                                          shadow-sm
                                          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Enter amount..."
                              />
                            </div>
                            <select
                              name="salary_duration"
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
                              name="radio_enjoyment"
                              className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="default-radio-1"
                              className="mt-1 ml-2 text-sm font-medium text-gray-700  dark:text-slate-100"
                            >
                              {" "}
                              Yes
                            </label>
                            <input
                              defaultChecked
                              id="default-radio-2"
                              type="radio"
                              value=""
                              name="radio_enjoyment"
                              className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="default-radio-2"
                              className="mt-1 ml-2 text-sm font-medium text-gray-700  dark:text-slate-100"
                            >
                              {" "}
                              No
                            </label>
                            <input
                              id="default-radio-3"
                              type="radio"
                              value=""
                              name="radio_enjoyment"
                              className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="default-radio-3"
                              className="mt-1 ml-2 text-sm font-medium text-gray-700  dark:text-slate-100"
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
                            How long would the task take to complete? (in hours)
                          </span>
                          <input
                            type="number"
                            required
                            min="0"
                            name="task_duration"
                            className="
                                      mt-1
                                      block
                                      w-full
                                      rounded-md
                                      border-gray-300
                                      shadow-sm
                                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                    "
                            placeholder="Enter time..."
                          />
                        </label>
                        <label className="block">
                          <span className="text-gray-700 dark:text-slate-100">
                            How much would you pay for the task to be done?
                          </span>
                          <span className="flex flex-row gap-x-2">
                            <select
                              name="task_currency"
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
                              name="task_amount"
                              required
                              min="0"
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
                              name="task_payment_duration"
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
                      onClick={() => router.replace("/results")}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
            {results_page === true && (
              <div className="text-xl">
                {" "}
                {salary_currency +
                  "," +
                  salary_amount +
                  "," +
                  salary_duration +
                  "," +
                  radio_enjoyment_index +
                  "," +
                  task_duration +
                  "," +
                  task_currency +
                  "," +
                  task_amount +
                  "," +
                  task_payment_duration}{" "}
              </div>
            )}
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
