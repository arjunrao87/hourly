import { useRouter } from "next/router";

const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 5;
const WEEKS_IN_BIWEEKLY = 2;
const WEEKS_IN_MONTH = 4;
const MONTHS_IN_YEAR = 12;

function calculate(
  salary_currency,
  salary_amount,
  salary_duration,
  radio_enjoyment_index,
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
  what_it_would_take_you = what_it_would_take_you.toFixed(2);

  let what_it_would_take_them = 0;
  if (task_payment_duration == "Hourly") {
    what_it_would_take_them = task_amount * task_duration;
  } else if (task_payment_duration == "Lump sum") {
    what_it_would_take_them = task_amount;
  }
  what_it_would_take_them = Number(what_it_would_take_them).toFixed(2);
  return [what_it_would_take_you, what_it_would_take_them];
}

export function diyOrNot(
  salary_currency,
  salary_amount,
  salary_duration,
  radio_enjoyment_index,
  task_duration,
  task_currency,
  task_amount,
  task_payment_duration
) {
  let [what_it_would_take_you, what_it_would_take_them] = calculate(
    salary_currency,
    salary_amount,
    salary_duration,
    radio_enjoyment_index,
    task_duration,
    task_currency,
    task_amount,
    task_payment_duration
  );
  let diy = false;
  let message =
    "You = " +
    salary_currency +
    " " +
    what_it_would_take_you +
    ", Them = " +
    task_currency +
    " " +
    what_it_would_take_them;

  return diy, message;
}

export default function Calculator() {
  const router = useRouter();
  const salary_currency = router.query.salary_currency;
  const salary_amount = router.query.salary_amount;
  const salary_duration = router.query.salary_duration;
  const radio_enjoyment_index = router.query.radio_enjoyment_index;
  const task_duration = router.query.task_duration;
  const task_currency = router.query.task_currency;
  const task_amount = router.query.task_amount;
  const task_payment_duration = router.query.task_payment_duration;

  let diy,
    message = diyOrNot(
      salary_currency,
      salary_amount,
      salary_duration,
      radio_enjoyment_index,
      task_duration,
      task_currency,
      task_amount,
      task_payment_duration
    );
  return (
    <div className="flex h-full mx-auto overflow-x-auto ">
      <div className="grid grid-cols-1 gap-6 p-4">
        <div className="text-5xl">{diy ? "Yes!" : "No!"}</div>
        <div className="text-5xl">{message}</div>
      </div>
    </div>
  );
}
