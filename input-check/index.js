document.addEventListener("DOMContentLoaded", () => {
  const formEvent = document.getElementById("niceForm");

  if (formEvent) {
    formEvent.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = new FormData(e.target);

      const name = form.get("name");
      const tel = form.get("tel");
      const email = form.get("email");
      const url = form.get("url");
      const number = form.get("number");
      const color = form.get("color");
      const search = form.get("search");
      const range = form.get("range");
      const select = form.getAll("select");
      const datetimeLocal = form.get("datetime-local");
      const date = form.get("date");
      const time = form.get("time");
      const week = form.get("week");

      console.log(typeof name, name);
      console.log(typeof tel, tel);
      console.log(typeof email, email);
      console.log(typeof url, url);
      console.log(typeof number, number);
      console.log(typeof color, color);
      console.log(typeof search, search);
      console.log(typeof range, range);
      console.log(typeof select, select);
      console.log(typeof datetimeLocal, datetimeLocal);
      console.log(typeof date, date);
      console.log(typeof time, time);
      console.log(typeof week, week);
    });
  }
});
