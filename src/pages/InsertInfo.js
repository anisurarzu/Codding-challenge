import React, { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { useFormik } from "formik";
import { InputField } from "../components/InputField/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getSectors } from "../services/insertInfo";
import { coreAxios } from "../utilities/axios";
import { Dropdown } from "primereact/dropdown";
import { Skeleton } from "primereact/skeleton";
import { Link, useNavigate } from "react-router-dom";

const InsertInfo = () => {
  const navigate = useNavigate();
  const [sectorList, setSectorList] = useState([]);
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    fetchAndGetSectorList();
  }, []);
  const fetchAndGetSectorList = async () => {
    try {
      setSectorList(await getSectors());
    } catch (err) {
      toast.error(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      tnc: false,
      sector: "",
      // sector: [{ sector: "Paris", id: "PRS" }],
    },
    onSubmit: async (values) => {
      console.log("values", values);

      if (!values?.sector) {
        toast.error("Please select  Sector!");
      } else if (values?.tnc === false) {
        toast.error("Please Checked Terms & Conditions!");
      } else {
        try {
          const res = await coreAxios.post(`usersDetailInfo`, values);
          if (res?.status === 200) {
            toast.success("Successfully Save");
            setIsSave(true);
            formik.resetForm();
            navigate("/viewInfo");
          }
        } catch (err) {
          toast.error(err);
        }
      }
    },
    enableReinitialize: true,
  });

  return (
    <div>
      <div class="flex items-center justify-center h-screen">
        {/*  */}

        <div class="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
          <h2 className="text-lg xl:text-l font-mono text-center py-2">
            Welcome To Challengers Home
          </h2>
          <form className="" onSubmit={formik.handleSubmit}>
            <div class="flex flex-col text-sm rounded-md">
              <input
                class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                type="text"
                name="userName"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.userName}
                required
              />
              {/* <MultiSelect
                className="p-inputtext-sm"
                options={sectorList}
                name="sector"
                optionLabel="sector"
                placeholder="Select Sectors"
                maxSelectedLabels={3}
                onChange={formik.handleChange}
                value={formik.values.sector}
                required
              /> */}
              <Dropdown
                name="sector"
                value={formik.values.sector}
                options={sectorList}
                onChange={formik.handleChange}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                placeholder="Select Sectors"
                // optionGroupTemplate={groupedItemTemplate}
              />
            </div>
            <div class="flex pt-4">
              <InputField
                id="tnc"
                name="tnc"
                type="checkbox"
                errors=""
                checked={formik.values.tnc}
                required={true}
                width="full"
                onChange={formik.handleChange}
                value={formik.values.tnc}
              />
              <div class="px-3 text-gray-500">I accept terms & conditions</div>
            </div>
            <button
              class="mt-5 w-full border p-2 bg-gradient-to-r from-green-800 bg-green-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
              type="submit"
            >
              Save
            </button>
          </form>

          <div class="mt-5 flex text-center text-sm text-gray-400">
            <p>
              Please enter your name and pick the Sectors you are currently
              involved in.
            </p>
          </div>
          <Link to="/viewInfo">
            <button
              class="mt-5 w-full border p-2 bg-gradient-to-r from-blue-800 bg-blue-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
              // type="submit"
            >
              Vew Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InsertInfo;
