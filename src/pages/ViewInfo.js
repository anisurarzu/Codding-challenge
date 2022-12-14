import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useContext, useEffect, useState } from "react";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { useNavigate, useParams } from "react-router-dom";
import { getUserInfo } from "../services/viewInfo";
import { toast } from "react-toastify";
import splitButtonTemp from "../components/actionButton/SplitButtonTemp";
import { AppContext } from "../App";

export default function ViewInfo() {
  const { setEditedData } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAndGetSectorList();
  }, []);
  const fetchAndGetSectorList = async () => {
    try {
      setLoading(true);
      setUserInfo(await getUserInfo());
      setLoading(false);
    } catch (err) {
      toast.error(err);
    }
  }; // eslint-disable-line react-hooks/exhaustive-deps

  const statusTemplate = (rowData) => {
    return (
      <span
        className={`product-badge status-${
          rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : ""
        }`}
      >
        {rowData.inventoryStatus}
      </span>
    );
  };
  const edit = (rowData) => {
    navigate(`/updateInfo/${rowData?._id}`);
    console.log(rowData);
    setEditedData(rowData);
  };

  const actionBodyTemplate = (rowData) => {
    const buttonTemp = [
      {
        label: "Edit",
        icon: "",
        command: (e) => {
          edit(rowData);
        },
      },
    ];
    return (
      <>
        {splitButtonTemp(
          rowData,
          {
            defaultFunc: "",
            defaultLabel: "Actions",
            defaultColor: "button",
            defaultIcon: "",
          },
          buttonTemp
        )}
      </>
    );
  };
  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );
  return (
    <div className="p-2 xl:px-16">
      <div className="flex justify-between py-2">
        <button
          onClick={() => {
            navigate("/");
          }}
          class="m-4 border px-4 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 "
          type="submit"
        >
          Back
        </button>
        <h3 className="text-xl lg:text-2xl py-2 font-serif">
          Stored Information Of Users
        </h3>
      </div>

      <div className="card shadow ">
        <DataTable
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          value={userInfo}
          header="Stored Information"
          responsiveLayout="scroll"
          loading={loading}
        >
          <Column field="_id" header="User Id" />
          <Column field="userName" header="Name" />
          <Column field="sector" header="Selected Sector" />
          <Column field="tnc" header="Is Terms & Condition Checked" />
          <Column field="action" header="Action" body={actionBodyTemplate} />
        </DataTable>
      </div>
    </div>
  );
}
