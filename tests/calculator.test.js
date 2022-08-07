import { calculate, diyOrNot } from "../components/calculator/calculator";

describe("Verify Calculator", () => {
  it("USD -> Hourly, USD -> Hourly", () => {
    const salary_currency = "USD ($)";
    const salary_amount = 100;
    const salary_duration = "Hourly";
    const radio_enjoyment_index = 0;
    const task_duration = 1;
    const task_currency = "USD ($)";
    const task_amount = 10;
    const task_payment_duration = "Hourly";

    const what_it_would_take_you = 100.00;
    const what_it_would_take_them = 10.00;

    let [returned_you, returned_them] = calculate(
      salary_currency,
      salary_amount,
      salary_duration,
      radio_enjoyment_index,
      task_duration,
      task_currency,
      task_amount,
      task_payment_duration
    );
    expect(returned_you).toEqual(what_it_would_take_you);
    expect(returned_them).toEqual(what_it_would_take_them);
  });

  it("USD -> Hourly, USD -> Lump sum", () => {
    const salary_currency = "USD ($)";
    const salary_amount = 100;
    const salary_duration = "Hourly";
    const radio_enjoyment_index = 0;
    const task_duration = 5;
    const task_currency = "USD ($)";
    const task_amount = 1000;
    const task_payment_duration = "Lump sum";

    const what_it_would_take_you = 500.00;
    const what_it_would_take_them = 1000.00;

    let [returned_you, returned_them] = calculate(
      salary_currency,
      salary_amount,
      salary_duration,
      radio_enjoyment_index,
      task_duration,
      task_currency,
      task_amount,
      task_payment_duration
    );
    expect(returned_you).toEqual(what_it_would_take_you);
    expect(returned_them).toEqual(what_it_would_take_them);
  });

  it("USD -> Biweekly, USD -> Hourly", () => {
    const salary_currency = "USD ($)";
    const salary_amount = 10000;
    const salary_duration = "Biweekly";
    const radio_enjoyment_index = 0;
    const task_duration = 10;
    const task_currency = "USD ($)";
    const task_amount = 100;
    const task_payment_duration = "Hourly";

    const what_it_would_take_you = 416.67;
    const what_it_would_take_them = 1000.00;

    let [returned_you, returned_them] = calculate(
      salary_currency,
      salary_amount,
      salary_duration,
      radio_enjoyment_index,
      task_duration,
      task_currency,
      task_amount,
      task_payment_duration
    );
    expect(returned_you).toEqual(what_it_would_take_you);
    expect(returned_them).toEqual(what_it_would_take_them);
  });

  it("USD -> Biweekly, USD -> Lump sum", () => {
    const salary_currency = "USD ($)";
    const salary_amount = 10_000;
    const salary_duration = "Biweekly";
    const radio_enjoyment_index = 0;
    const task_duration = 10;
    const task_currency = "USD ($)";
    const task_amount = 10000;
    const task_payment_duration = "Lump sum";

    const what_it_would_take_you = 416.67;
    const what_it_would_take_them = 10_000.00;

    let [returned_you, returned_them] = calculate(
      salary_currency,
      salary_amount,
      salary_duration,
      radio_enjoyment_index,
      task_duration,
      task_currency,
      task_amount,
      task_payment_duration
    );
    expect(returned_you).toEqual(what_it_would_take_you);
    expect(returned_them).toEqual(what_it_would_take_them);
  });

  it("USD -> Annually, USD -> Hourly", () => {
    const salary_currency = "USD ($)";
    const salary_amount = 100_000;
    const salary_duration = "Annually";
    const radio_enjoyment_index = 0;
    const task_duration = 10;
    const task_currency = "USD ($)";
    const task_amount = 100;
    const task_payment_duration = "Hourly";

    const what_it_would_take_you = 173.61;
    const what_it_would_take_them = 1000.00;

    let [returned_you, returned_them] = calculate(
      salary_currency,
      salary_amount,
      salary_duration,
      radio_enjoyment_index,
      task_duration,
      task_currency,
      task_amount,
      task_payment_duration
    );
    expect(returned_you).toEqual(what_it_would_take_you);
    expect(returned_them).toEqual(what_it_would_take_them);
  });

  it("USD -> Annually, USD -> Lump sum", () => {
    const salary_currency = "USD ($)";
    const salary_amount = 100_000;
    const salary_duration = "Annually";
    const radio_enjoyment_index = 0;
    const task_duration = 10;
    const task_currency = "USD ($)";
    const task_amount = 10_000;
    const task_payment_duration = "Lump sum";

    const what_it_would_take_you = 173.61;
    const what_it_would_take_them = 10_000.00;

    let [returned_you, returned_them] = calculate(
      salary_currency,
      salary_amount,
      salary_duration,
      radio_enjoyment_index,
      task_duration,
      task_currency,
      task_amount,
      task_payment_duration
    );
    expect(returned_you).toEqual(what_it_would_take_you);
    expect(returned_them).toEqual(what_it_would_take_them);
  });
});
