import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { toggleData } from "../../../data/departmentData";
import { all_department } from "../../../data/departmentData";
import Our_working_step from "./Our_working_step";

function Depart_details_content({ desc, img }) {
  const [toggleId, setToggleId] = useState(null);
  const handleToggle = (id) => {
    setToggleId(toggleId === id ? null : id); // Toggle the same section
  };

  const markData = [
    "mental health solutions",
    "Medical Advices & Check Ups",
    "Rapid Patient Improvement",
    "Trusted Medical Treatment",
    "World Class Treatment",
    "Emergency Help Available 24/7",
    "Medical Research Professionals",
  ];

  return (
    <div className="bg-bgsecondary pt-10 lg:pt-20">
      <div className="container mx-auto">
        <div className="basis-1/3 h-full bg-bgprimary m-10 pt-10 pb-20 rounded lg:hidden">
          <h2 className="text-3xl font-semibold text-textprimary text-center mb-10">
            All Departments
          </h2>
          <div className="flex flex-col gap-5 alldepartment">
            {all_department.map((dept, index) => (
              <NavLink
                key={index}
                className="bg-mobilemenubg mx-10 text-center rounded py-5"
                to={`/departments/${dept.slug}`}
              >
                <h3 className="text-2xl font-semibold text-textprimary capitalize">
                  {dept.name}
                </h3>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto flex">
        <div className="lg:basis-2/3 px-10">
          <img src={img} alt="" />
          <p className="mt-10 text-lg text-gray-600">{desc}</p>
          <div>
            <h2 className="text-5xl text-bgprimary font-semibold my-10">
              Health Care Plans.
            </h2>
            <div className="grid grid-cols-2">
              {markData.map((item, index) => (
                <p
                  key={index}
                  className="flex gap-3 text-lg items-center capitalize my-2"
                >
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-textsecondary"
                  />
                  <span className="text-gray-900">{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="basis-1/3 h-full bg-bgprimary m-10 pt-10 pb-20 hidden lg:block">
          <h2 className="text-3xl font-semibold text-textprimary text-center mb-10">
            All Departments
          </h2>
          <div className="flex flex-col gap-5 alldepartment">
            {all_department.map((dept, index) => (
              <NavLink
                key={index}
                className="bg-mobilemenubg mx-10 text-center rounded py-5"
                to={`/departments/${dept.slug}`}
              >
                <h3 className="text-2xl font-semibold text-textprimary capitalize">
                  {dept.name}
                </h3>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-10">
        <h2 className="text-5xl font-semibold text-bgprimary my-10">
          Key Benefits.
        </h2>
        {toggleData.map(({ id, title, content }) => (
          <div key={id} className="my-8">
            <h3
              className="flex items-center gap-3 text-xl text-bgprimary cursor-pointer"
              onClick={() => handleToggle(id)}
            >
              <FontAwesomeIcon icon={toggleId === id ? faMinus : faPlus} />
              <span className="font-semibold">{title}</span>
            </h3>
            <p
              className={`w-[800px] ml-5 mt-1 text-lg text-gray-600 overflow-hidden transition-all duration-300 ${
                toggleId === id ? "h-[80px]" : "h-0"
              }`}
            >
              {content}
            </p>
          </div>
        ))}
      </div>
      <Our_working_step />
    </div>
  );
}

export default Depart_details_content;
