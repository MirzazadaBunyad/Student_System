"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Sidebar({ studentList }) {
  const deparments = ["9", "10", "11", "12"];

  return (
    <div className="w-[40%] px-4 pt-4 md:h-screen overflow-auto ">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Link href="/new-student">
          <h3 className="text-gray-800 hover:shadow-lg cursor-pointer p-2 border-[1px] transition-[0.3s] rounded-md hover:bg-gray-600 mb-2 hover:text-white font-bold text-[24px]">
            New Student
          </h3>
        </Link>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-cyan-600 transition-[0.3s] hover:bg-orange-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-[18px]">Students</span>
                <ChevronUpIcon
                  className={`${open ? "" : "transform rotate-180"
                    } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500">
                <Link
                  href="/students"
                  className="p-2 ml-2 my-8 w-full transition-[0.3] border border-orange-300 hover:bg-orange-500 rounded-md group cursor-pointer hover:shadow-lg  hover:text-white font-semibold  "
                >
                  View All ({studentList.length}) Students
                </Link>
                {deparments.map((department) => (
                  <Disclosure as="div" key={department}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-cyan-600 transition-[0.3s] hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mb-3 mt-6">
                          <span>Department {department}</span>
                          <ChevronUpIcon
                            className={`${open ? "" : "rotate-180 transform"
                              } h-5 w-5 text-blue-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="flex flex-col justify-start items-end border-b-2 border-orange-500 mb-2">
                          <Link
                            href={`/students/${department}`}
                            className="ml-2 p-2 mb-5 w-full border transition-[0.3s] border-orange-300 hover:bg-orange-500 rounded-md group cursor-pointer hover:shadow-lg  hover:text-white font-semibold  "
                          >
                            View All (
                            {
                              studentList.filter(
                                (item) => item.department === department
                              ).length
                            }
                            ) Students
                          </Link>
                          {studentList
                            .filter((item) => item.department === department)
                            .map((student) => (
                              <Link
                                key={student.id}
                                href={`/students/${department}/${student._id}`}
                                className="p-2 mb-2 w-full border transition-[.3] border-orange-200 hover:bg-orange-300 rounded-md group cursor-pointer hover:shadow-lg  hover:text-white font-semibold  "
                              >
                                {student.fullname}
                              </Link>
                            ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
