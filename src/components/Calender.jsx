"use client";
import React, { useEffect } from "react";
import { left } from "@/Consonats";

export default function BasicDateCalendar({ setselectedDate, setshow }) {
  useEffect(() => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    const day = document.querySelector(".calendar-dates");
    const currdate = document.querySelector(".calendar-current-date");
    const prenexIcons = document.querySelectorAll(".calendar-navigation span");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const eventLisnerAdder = () => {
      const lis = document.querySelectorAll(".calendar-dates li");
      const Cdate = document.querySelector(".calendar-current-date").innerText;
      lis.forEach((it) => {
        it.addEventListener("click", (e) => {
          if (!it.className.includes("inactive")) {
            const SDate =
              Cdate.slice(0, Cdate.indexOf(",")) +
              " " +
              e.target.innerText.toString() +
              "," +
              " " +
              Cdate.slice(Cdate.indexOf(",") + 1);
            setselectedDate(SDate);
            const PreviousSelected = document.querySelector(".selectedLI");
            if (PreviousSelected != null) {
              PreviousSelected.classList.remove("selectedLI");
              PreviousSelected.style.color = "black";
            }
            it.classList.add("selectedLI");
            it.style.color = "white";
            setshow(false);
          }
        });
      });
    };
    const manipulate = () => {
      let dayone = new Date(year, month, 1).getDay();
      let lastdate = new Date(year, month + 1, 0).getDate();
      let dayend = new Date(year, month, lastdate).getDay();
      let monthlastdate = new Date(year, month, 0).getDate();
      let lit = "";
      for (let i = dayone; i > 0; i--) {
        lit += `<li  style="color : gray ; font-weight : 400" class="inactive">${
          monthlastdate - i + 1
        }</li>`;
      }
      for (let i = 1; i <= lastdate; i++) {
        let isToday =
          i === date.getDate() &&
          month === new Date().getMonth() &&
          year === new Date().getFullYear()
            ? true
            : false;
        lit += `<li style="color : black; ${
          isToday && "color: #2DB473"
        } " >${i}</li>`;
      }
      currdate.innerText = `${months[month]},${year}`;
      day.innerHTML = lit;
    };

    manipulate();
    eventLisnerAdder();
    prenexIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;
        if (month < 0 || month > 11) {
          date = new Date(year, month, new Date().getDate());

          year = date.getFullYear();

          month = date.getMonth();
        } else {
          date = new Date();
        }
        manipulate();
        eventLisnerAdder();
      });
    });
  }, []);

  return (
    <>
      <div
        style={{ boxShadow: "0px 0px 10px -1mm gray" }}
        className="flex   w-[21rem] items-center justify-start rounded-3xl bg-white  px-5 py-5 "
      >
        <div className="relative flex w-[18.5rem] flex-col items-center justify-start small:h-auto ">
          <header className="calendar-navigation relative flex w-full items-center justify-between">
            <span
              id="calendar-prev"
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full"
            >
              {left}
            </span>
            <p className="calendar-current-date font-pm font-med absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[0.95rem]  "></p>
            <span
              id="calendar-next"
              className="flex h-7 w-7 scale-[-1] cursor-pointer items-center  justify-center rounded-full"
            >
              {left}
            </span>
          </header>

          <div className="calendar-body flex w-full flex-col items-center justify-center">
            <ul className="font-pm mt-4 flex w-full items-center justify-between gap-0 px-1 text-center [&>li]:w-5 [&>li]:text-[0.9rem] [&>li]:text-gray-500 ">
              <li>S</li>
              <li>M</li>
              <li>T</li>
              <li>W</li>
              <li>T</li>
              <li>F</li>
              <li>S</li>
            </ul>
            <ul
              className="calendar-dates [&>li]:font-med mt-3 flex flex-wrap 
            items-center justify-start gap-[1.53rem] gap-y-[0.9rem] px-1 text-center larger:gap-y-[0.3rem] med:gap-y-[0.7rem] 
            [&>li]:w-5  [&>li]:text-[0.9rem] hover:[&>li]:!text-white
            "
            ></ul>
          </div>
        </div>
      </div>
    </>
  );
}
