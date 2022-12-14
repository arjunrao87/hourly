import Link from "next/link";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 5;
const WEEKS_IN_BIWEEKLY = 2;
const WEEKS_IN_MONTH = 4;
const MONTHS_IN_YEAR = 12;

export function calculate(
  salary_currency,
  salary_amount,
  salary_duration,
  level_of_difficulty,
  task_duration,
  task_currency,
  task_amount,
  task_payment_duration
) {
  let salary_hourly_rate = 0;
  if (salary_duration == "Hourly") {
    salary_hourly_rate = salary_amount;
  } else if (salary_duration == "Daily") {
    salary_hourly_rate = salary_amount / HOURS_IN_DAY;
  } else if (salary_duration == "Weekly") {
    salary_hourly_rate = salary_amount / (HOURS_IN_DAY * DAYS_IN_WEEK);
  } else if (salary_duration == "Biweekly") {
    salary_hourly_rate =
      salary_amount / (HOURS_IN_DAY * DAYS_IN_WEEK * WEEKS_IN_BIWEEKLY);
  } else if (salary_duration == "Monthly") {
    salary_hourly_rate =
      salary_amount / (HOURS_IN_DAY * DAYS_IN_WEEK * WEEKS_IN_MONTH);
  } else if (salary_duration == "Annually") {
    salary_hourly_rate =
      salary_amount /
      (HOURS_IN_DAY * DAYS_IN_WEEK * WEEKS_IN_MONTH * MONTHS_IN_YEAR);
  }
  let what_it_would_take_you = Number(salary_hourly_rate * task_duration);
  what_it_would_take_you = Number(what_it_would_take_you.toFixed(2));

  let what_it_would_take_them = 0;
  if (task_payment_duration == "Hourly") {
    what_it_would_take_them = task_amount * task_duration;
  } else if (task_payment_duration == "Total") {
    what_it_would_take_them = task_amount;
  }
  what_it_would_take_them = Number(Number(what_it_would_take_them).toFixed(2));
  return [what_it_would_take_you, what_it_would_take_them];
}

export default function Calculator() {
  const router = useRouter();
  const salary_currency = router.query.salary_currency;
  const salary_amount = router.query.salary_amount;
  const salary_duration = router.query.salary_duration;
  const level_of_difficulty = router.query.level_of_difficulty;
  const task_duration = router.query.task_duration;
  const task_currency = router.query.task_currency;
  const task_amount = router.query.task_amount;
  const task_payment_duration = router.query.task_payment_duration;

  let [what_it_would_take_you, what_it_would_take_them] = calculate(
    salary_currency,
    salary_amount,
    salary_duration,
    level_of_difficulty,
    task_duration,
    task_currency,
    task_amount,
    task_payment_duration
  );

  let diy = false;
  if (level_of_difficulty == 0) {
    if (what_it_would_take_you <= what_it_would_take_them) {
      diy = true;
    }
  }
  if (level_of_difficulty == 1) {
    if (10 * what_it_would_take_you <= what_it_would_take_them) {
      diy = true;
    }
  }

  return (
    <div className="flex h-full mx-auto overflow-x-auto ">
      <div className="container mx-auto max-w-md">
        <div className="flex pt-6 justify-center text-3xl md:text-4xl   dark:text-slate-100">
          {diy ? "✅ Just do it yourself!" : "❌ Don't do it yourself!"}
        </div>
        <div className="pt-6 px-6 flex text-justify text-2xl md:text-2xl justify-center text-red-600 dark:text-amber-400">
          It will cost ${what_it_would_take_you} for your time and the
          professional will charge ${what_it_would_take_them}.{" "}
        </div>
        <div className="pt-2 px-6 text-justify flex text-2xl md:text-2xl justify-center dark:text-slate-100">
          {level_of_difficulty == 0
            ? "Since the task is easy and the disparity between your rate and the professional rate isn't high, we suggest you do it yourself!"
            : "Since the task is hard, the efficiency of a professional is worth the price. In fact, we think unless they charge more than 10x what your time is worth, don't do it yourself."}{" "}
        </div>
        <div className="pt-2 flex text-2xl md:text-2xl justify-center dark:text-slate-100">
          <Link
            href={
              level_of_difficulty == 0
                ? "https://medium.com/@arjunrao87/introducing-hourly-59d5649a1cef"
                : "https://medium.com/@arjunrao87/introducing-hourly-59d5649a1cef#:~:text=Why%2010x%3F%20This,the%20job%20yourself."
            }
          >
            <a target="_blank" class="underline">
              More details
            </a>
          </Link>
        </div>
        <div className="py-6 items-center px-8">
          <form action="/" method="post">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              🔁 Try again
            </button>
          </form>
        </div>
        <div className="flex pt-6 justify-center text-xl md:text-xl   dark:text-slate-100">
          Share Hourly with your friends!
        </div>
        <div className="flex justify-center py-6 px-8 space-x-4">
          <FacebookShareButton url={"https://usehourly.netlify.app/"}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <WhatsappShareButton url={"https://usehourly.netlify.app/"}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <LinkedinShareButton url={"https://usehourly.netlify.app/"}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <RedditShareButton url={"https://usehourly.netlify.app/"}>
            <RedditIcon size={32} round />
          </RedditShareButton>
        </div>
      </div>
    </div>
  );
}
