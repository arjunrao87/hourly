import Link from "next/link";
import { useRouter } from "next/router";

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
      <div class="container mx-auto ">
        <div className="flex justify-center text-5xl  dark:text-slate-100">
          {diy ? "✅ Just do it yourself!" : "❌ Don't do it yourself!"}
        </div>
        <div className="pt-8 flex text-3xl justify-center	 dark:text-slate-100">
          Here's why
        </div>
        <div className="pt-4 flex text-2xl justify-center text-red-600 dark:text-amber-400">
          It will cost ${what_it_would_take_you} for your time and the
          professional will charge ${what_it_would_take_them}.{" "}
        </div>
        <div className="pt-2 flex text-2xl justify-center dark:text-slate-100">
          {level_of_difficulty == 0
            ? "Since the task is easy and the disparity between your rate and the professional rate isn't high, we suggest you do it yourself!"
            : "Since the task is hard, the efficiency of a professional is worth the price. In fact, we think unless they charge more than 10x what your time is worth, don't do it yourself."}{" "}
        </div>
        <div className="pt-8 flex text-2xl justify-center dark:text-slate-100">
          <Link
            href={
              level_of_difficulty == 0
                ? "https://onestepforward.beehiiv.com/p/ultimate-net-worth-guide"
                : "https://onestepforward.beehiiv.com/p/ultimate-net-worth-guide#Why%20is%20knowing%20your%20Net%20Worth%20important?:~:text=com/photos/BQHczaWvDYQ-,Wanna%20know%20more%3F,-I%20hope%20to"
            }
          >
            <a target="_blank" class="underline">
              Link for more details
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
