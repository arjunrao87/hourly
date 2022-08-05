import { useRouter } from "next/router";

export function diyOrNot(router) {
  const salary_currency = router.query.salary_currency;
  const salary_amount = router.query.salary_amount;
  const salary_duration = router.query.salary_duration;
  const radio_enjoyment_index = router.query.radio_enjoyment_index;
  const task_duration = router.query.task_duration;
  const task_currency = router.query.task_currency;
  const task_amount = router.query.task_amount;
  const task_payment_duration = router.query.task_payment_duration;

  let diy = false;
  let message = "";

  return diy, message;
}

export default function Calculator() {
  const router = useRouter();
  let diy,
    message = diyOrNot(router);
  return (
    <div className="flex h-full mx-auto overflow-x-auto ">
      <div className="grid grid-cols-1 gap-6 p-4">
        <div className="text-xl">{diy ? "Yes!" : "No!!!!!"}</div>
      </div>
    </div>
  );
}
