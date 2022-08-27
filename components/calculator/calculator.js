import { useRouter } from "next/router";

const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 5;
const WEEKS_IN_BIWEEKLY = 2;
const WEEKS_IN_MONTH = 4;
const MONTHS_IN_YEAR = 12;
export const DIY_TOLERANCE_FOR_THINGS_YOU_LIKE = 0.2; // Willing to pay 20% more
export const DIY_TOLERANCE_FOR_THINGS_YOU_DONT_LIKE = 2.0; // Willing to pay triple
export const DIY_TOLERANCE_FOR_THINGS_YOU_LIKE_SOMETIMES = 1.0; // Willing to pay double

export function calculate(
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
  what_it_would_take_you = Number(what_it_would_take_you.toFixed(2));

  let what_it_would_take_them = 0;
  if (task_payment_duration == "Hourly") {
    what_it_would_take_them = task_amount * task_duration;
  } else if (task_payment_duration == "Lump sum") {
    what_it_would_take_them = task_amount;
  }
  what_it_would_take_them = Number(Number(what_it_would_take_them).toFixed(2));
  return [what_it_would_take_you, what_it_would_take_them];
}

export function diyOrNot(
  radio_enjoyment_index,
  what_it_would_take_you,
  what_it_would_take_them
) {
  let diy = true;
  let diy_tolerance = 0;
  if (radio_enjoyment_index == 0) {
    diy_tolerance = DIY_TOLERANCE_FOR_THINGS_YOU_LIKE;
  } else if (radio_enjoyment_index == 1) {
    diy_tolerance = DIY_TOLERANCE_FOR_THINGS_YOU_DONT_LIKE;
  } else if (radio_enjoyment_index == 2) {
    diy_tolerance = DIY_TOLERANCE_FOR_THINGS_YOU_LIKE_SOMETIMES;
  }
  let what_it_would_really_take_you =
    what_it_would_take_you * (1 + diy_tolerance);
  if (what_it_would_take_them <= what_it_would_really_take_you) {
    diy = false;
  }
  return [diy, what_it_would_really_take_you];
}

export function getMessage(
  salary_currency,
  what_it_would_take_you,
  what_it_would_really_take_you,
  task_currency,
  what_it_would_take_them
) {
  let message =
    "You = " +
    salary_currency +
    " " +
    what_it_would_take_you +
    ", Really You = " +
    salary_currency +
    " " +
    what_it_would_really_take_you +
    ", Them = " +
    task_currency +
    " " +
    what_it_would_take_them;
  return message;
}

export function getResults(
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
  let [diy, what_it_would_really_take_you] = diyOrNot(
    radio_enjoyment_index,
    what_it_would_take_you,
    what_it_would_take_them
  );
  let message = getMessage(
    salary_currency,
    what_it_would_take_you,
    what_it_would_really_take_you,
    task_currency,
    what_it_would_take_them
  );
  return [diy, message];
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

  let [diy, message] = getResults(
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
        <div className="text-5xl">
          {diy ? "Do It Yourself!" : "Let them do it!"}
        </div>
        <div className="text-3xl">{message}</div>
      </div>
    </div>
  );
}
