"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function StudentList({ allStudents, title }) {
  const [search, setSearch] = useState("");

  const currentStudents = search
    ? allStudents.filter((student) =>
        student.fullname
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      )
    : allStudents;

  return (
    <>
      <div className="flex flex-col items-center md:flex-row md:justify-around">
        <div className="max-md:w-[40%]">
          <h1 className=" text-blue-700 max-md:mb-[10px] bg-slate-400 p-[10px] rounded-xl text-center text-xl md:text-3xl font-bold leading-normal ">
            {title}
          </h1>
        </div>
        <div className="bg-slate-700 max-md:w-[55%] w-full md:w-1/3 p-1 flex justify-center align-middle rounded-2xl text-base ">
          <input
            value={search}
            onInput={(e) => setSearch(e.target.value)}
            className="p-1 w-full bg-white rounded-xl outline-none indent-3 "
            type="search"
            name=""
            id=""
          />
        </div>
      </div>

      <div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap pt-5 justify-evenly">
            {currentStudents.map((student) => (
              <div
                key={student._id}
                className=" mb-12 px-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
              >
                <Link href={`students/${student.department}/${student._id}`}>
                  <div className="rounded-xl bg-slate-400">
                    <img
                      alt={student.fullname}
                      src={student.image}
                      className="rounded-xl shadow-lg w-[200px] h-[296px] align-middle  border-none"
                      style={{ cursor: "auto" }}
                    />
                    <div className="pt-2 text-center">
                      <h1 className="text-gray-900 text-[16px] font-serif font-bold leading-normal mt-0 mb-1">
                        {student.fullname}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
