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
    <div className="w-[60%]">
      <div className="flex flex-col items-center w-full md:flex-row md:justify-around">
        <div className="max-md:w-[40%]">
          <h2 className=" text-white max-md:mb-[10px] bg-blue-600 p-[10px] rounded-xl text-center text-xl md:text-3xl font-bold leading-normal ">
            {title}
          </h2>
        </div>
        <div className="bg-slate-700 max-md:w-[55%] w-full md:w-1/3 p-1 flex justify-center rounded-lg align-middle text-base ">
          <input
            value={search}
            onInput={(e) => setSearch(e.target.value)}
            className="p-1 w-full rounded-lg bg-white outline-none indent-3 "
            type="search"
            name=""
            id=""
          />
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap pt-5 justify-around">
          {currentStudents.map((student) => (
            <div
              key={student._id}
              className=" mb-12 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
            >
              <Link href={`students/${student.department}/${student._id}`}>
                <div className="rounded-xl w-[250px] bg-cover bg-blue-600 cursor-pointer">
                  <img
                    alt={student.fullname}
                    src={student.image}
                    className="rounded-xl shadow-lg bg-cover w-full h-[300px] align-middle border-none"
                  />
                  <h3 className="text-gray-200 text-[16px] text-center pt-2 font-serif font-bold leading-normal py-1">
                    {student.fullname}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
