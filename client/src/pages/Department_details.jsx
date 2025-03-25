import React from "react";
import Depart_detail_banner from "../components/department_details.jsx/Depart_details_banner";
import Depart_details_content from "../components/department_details.jsx/Depart_details_content";
import { all_department } from "../../data/departmentData";
import { useParams } from "react-router-dom";
import Our_working_step from "../components/department_details.jsx/Our_working_step";

function Department_details() {
  const params = useParams().name;
  const data = all_department.filter(
    (department) => department.slug === params
  );
  const { name } = data[0];
  return (
    <>
      <hr className="border-orange-100 border-t-2" />
      <Depart_detail_banner name={name} />
      <Depart_details_content {...data[0]} />
    </>
  );
}

export default Department_details;
