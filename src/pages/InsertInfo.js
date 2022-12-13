import React, { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { useFormik } from "formik";
import { InputField } from "../components/InputField/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getSectors } from "../services/insertInfo";
import { coreAxios } from "../utilities/axios";

const InsertInfo = () => {
  const [selectedCities1, setSelectedCities1] = useState(null);
  const [value2, setValue2] = useState("");
  const [sectorList, setSectorList] = useState([]);

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
      userName: "King",
      // sector: [{ sector: "Paris", code: "PRS" }],
    },
    onSubmit: async (values) => {
      console.log("values", values);
      try {
        const res = await coreAxios.post(`usersDetailInfo`, values);
        if (res?.status === 200) {
          toast.success("Successfully Submitted");
          formik.resetForm();
        }
      } catch (err) {
        toast.error(err);
      }
    },
    enableReinitialize: true,
  });
  return (
    <div>
      <div class="flex items-center justify-center h-screen">
        <div class="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
          <div class="mb-8 flex justify-center">
            <img
              class="w-24"
              src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
              alt=""
            />
          </div>
          <form className="" onSubmit={formik.handleSubmit}>
            <div class="flex flex-col text-sm rounded-md">
              <input
                class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                type="text"
                name="userName"
                placeholder="Username or Email id"
                onChange={formik.handleChange}
                value={formik.values.userName}
                required
              />
              <MultiSelect
                className="p-inputtext-sm"
                // value={selectedCities1}
                options={sectorList}
                name="sector"
                // onChange={(e) => setSelectedCities1(e.value)}
                optionLabel="sector"
                placeholder="Select Sectors"
                maxSelectedLabels={3}
                onChange={formik.handleChange}
                value={formik.values.sector}
                required
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
              class="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
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
        </div>
      </div>
    </div>
  );
};

export default InsertInfo;
