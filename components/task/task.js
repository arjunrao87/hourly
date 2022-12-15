import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function TaskDetails() {
  const router = useRouter();

  const [salary_currency, setSalaryCurrency] = useState("USD ($)");
  const [salary_amount, setSalaryAmount] = useState();
  const [salary_duration, setSalaryDuration] = useState("Hourly");
  const [level_of_difficulty, setLevelOfDifficulty] = useState(0);
  const [task_duration, setTaskDuration] = useState();
  const [task_currency, setTaskCurrency] = useState("USD ($)");
  const [task_amount, setTaskAmount] = useState();
  const [task_payment_duration, setTaskPaymentDuration] = useState("Hourly");

  const handleParam = (setValue) => (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.elements.level_of_difficulty.forEach(function (value, index) {
      if (value.checked === true) {
        level_of_difficulty = index;
        return;
      }
    });
    router.push(
      {
        pathname: "/results",
        query: {
          salary_currency: salary_currency,
          salary_amount: salary_amount,
          salary_duration: salary_duration,
          level_of_difficulty: level_of_difficulty,
          task_duration: task_duration,
          task_currency: task_currency,
          task_amount: task_amount,
          task_payment_duration: task_payment_duration,
        },
      },
      "/results"
    );
  };

  return (
    <div className="flex h-full mx-auto overflow-y-auto px-6">
      <form onSubmit={onSubmit.bind(this)}>
        <div className="py-0">
          <div className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6">
              <span className="text-justify text-gray-700  dark:text-slate-100">
                Hourly helps you decide whether you should undertake a task on
                your own or outsource it to someone else.{" "}
                <Link href="https://medium.com/@arjunrao87/introducing-hourly-59d5649a1cef">
                  <a target="_blank" class="underline">
                    Read more.
                  </a>
                </Link>
              </span>
              <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700" />
              <label className="block">
                <span className="text-gray-700  dark:text-slate-100">
                  How much do you make? (in USD)
                </span>
                <span className="flex flex-row gap-x-2">
                  {/* <select
                    name="salary_currency"
                    value={salary_currency}
                    onChange={handleParam(setSalaryCurrency)}
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
                    <option disabled>GBP (￡)</option>
                    <option disabled>EUR (€)</option>
                    <option disabled>RUB (₽)</option>
                    <option disabled>INR (₹)</option>
                  </select> */}
                  <input
                    type="number"
                    required
                    name="salary_amount"
                    value={salary_amount}
                    onChange={handleParam(setSalaryAmount)}
                    min="0"
                    className="mt-1
                                  block
                                  w-full
                                  rounded-md
                                  border-gray-300
                                  shadow-sm
                                  slashed-zero
                                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Enter amount..."
                  />
                  <select
                    name="salary_duration"
                    value={salary_duration}
                    onChange={handleParam(setSalaryDuration)}
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
                  What is the level of difficulty of the task?
                </span>
                <span className="flex flex-row gap-x-2">
                  <input
                    id="default-radio-1"
                    type="radio"
                    required
                    name="level_of_difficulty"
                    onChange={handleParam(setLevelOfDifficulty)}
                    className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="mt-1 ml-2 text-sm font-medium text-gray-700  dark:text-slate-100"
                  >
                    {" "}
                    Easy
                  </label>
                  <input
                    id="default-radio-2"
                    type="radio"
                    name="level_of_difficulty"
                    onChange={handleParam(setLevelOfDifficulty)}
                    className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="mt-1 ml-2 text-sm font-medium text-gray-700  dark:text-slate-100"
                  >
                    {" "}
                    Hard
                  </label>
                </span>
              </label>
              <label className="block">
                <span className="text-gray-700 dark:text-slate-100">
                  How long would it take <b>you</b> to complete the task? (in
                  hours)
                </span>
                <input
                  type="number"
                  required
                  min="0"
                  name="task_duration"
                  value={task_duration}
                  onChange={handleParam(setTaskDuration)}
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
                  If you had to pay for the task, how much would it cost? (in
                  USD)
                </span>
                <span className="flex flex-row gap-x-2">
                  {/* <select
                    name="task_currency"
                    value={task_currency}
                    onChange={handleParam(setTaskCurrency)}
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
                    <option disabled>GBP (￡)</option>
                    <option disabled>EUR (€)</option>
                    <option disabled>RUB (₽)</option>
                    <option disabled>INR (₹)</option>
                  </select> */}
                  <input
                    type="number"
                    name="task_amount"
                    value={task_amount}
                    onChange={handleParam(setTaskAmount)}
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
                    value={task_payment_duration}
                    onChange={handleParam(setTaskPaymentDuration)}
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
                    <option>Total</option>
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
  );
}
