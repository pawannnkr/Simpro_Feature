import { useState } from "react";
import { AddDataForProjectUpdate } from "../Layout/AddDataForProjectUpdate";
const data1 = [
    {
      Customer: "Order Inflow",
      Project: "ANC",
      Value: 120,
      Bid_Submission_Qtr: 20,
      Order_Award_Qtr: 25,
      Winning_Probability: "25%",
      Status: "Open",
    },
    {
      Customer: "Order Inflow",
      Project: "ANsdfC",
      Value: 120,
      Bid_Submission_Qtr: 20,
      Order_Award_Qtr: 25,
      Winning_Probability: "25%",
      Status: "Closed",
    },
  ];


const ProjectUpdate = () =>{
    const [submittedData, setsubmittedData] = useState(data1);
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [showAddNewDataView, setShowAddNewData] = useState(false);
    const handleSelection = (e: any) => {
        // console.log(e.target.value);
        setSelectedStatus(e.target.value);
      };
    const showAddNewDataEntryView = () => {
        setShowAddNewData(!showAddNewDataView);
      };
    const filterData = (data: any) => {
        if (selectedStatus === "All") return data;
        const fdata = data.filter((val: any) => val.Status === selectedStatus);
        return fdata;
      };
    return <>
    <div>
        <h3>Project Update</h3>
        <div className={"card "} style={{ padding: "10px" }}>
          <div
            style={{
              padding: "10px",
              borderRadius: "0.3px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <p style={{ fontSize: "20px" }}> Activity Tracker</p> */}
            <div className="form-floating" style={{ width: "600px" }}>
              <select
                className="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
                onChange={handleSelection}
                value={selectedStatus}
              >
                <option disabled>---Select---</option>
                <option value="All">All</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
              </select>
              <label htmlFor="floatingSelectGrid">Select Status</label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <div className="input-group">
                {/* <label className="input-group-text" htmlFor="inputGroupFile01">
                Upload
              </label> */}
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                //   onChange={handleFileChange}
                />
              </div>
            </div>

            <div style={{ marginRight: "10px", marginTop: "10px" }}>
              <button
                // onClick={exportToExcel}
                style={{ backgroundColor: "white", borderWidth: "0" }}
              >
                <i
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  className="fa-solid fa-download fa-fade"
                ></i>
              </button>
            </div>
            <div style={{ marginRight: "10px", marginTop: "10px" }}>
              <button
                onClick={showAddNewDataEntryView}
                style={{ backgroundColor: "white", borderWidth: "0" }}
              >
                <i
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  className="fa-solid fa-plus fa-fade"
                ></i>
              </button>
            </div>
          </div>
          <div
            style={{ border: "0.6px solid #DFDFDF", marginTop: "0px" }}
          ></div>
          <div>
            <div style={{ textAlign: "center" }}>
              <h4>Part A - Bids Submitted</h4>
            </div>
            <div
              className="ActionTakenDashboard"
              style={{ overflow: "auto", marginTop: "10px", maxHeight: "80vh" }}
            >
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Project</th>
                    <th scope="col">Value</th>
                    <th scope="col">Bid Submission Qtr.</th>
                    <th scope="col">Order Award Qtr.</th>
                    <th scope="col">Winning Probability High / Medium / Low</th>
                    <th scope="col">Status </th>
                  </tr>
                </thead>
                <tbody>
                  {filterData(submittedData).map((val: any, index: number) => {
                    return (
                      <tr key={index}>
                        <th>{val.Customer}</th>
                        <td>{val.Project}</td>
                        <td>{val.Value}</td>

                        <td>{val.Bid_Submission_Qtr}</td>
                        <td>{val.Order_Award_Qtr}</td>
                        <td>{val.Winning_Probability}</td>
                        <td>{val.Status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showAddNewDataView && (
        <AddDataForProjectUpdate closeAddComponent={showAddNewDataEntryView} />
      )}
    </>
}

export default ProjectUpdate;