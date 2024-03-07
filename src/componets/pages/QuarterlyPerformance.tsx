import React, { useState } from "react";
const data = [
  {
    Particulars: "Order Inflow",
    FYpre: 100,
    FYcurrent: 120,
    Growth: '50%',
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
  {
    Particulars: "Order Book",
    FYpre: 100,
    FYcurrent: 10,
    Growth: '50%',
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
  {
    Particulars: "Adjustments to opening Order Book",
    FYpre: 100,
    FYcurrent: 160,
    Growth: '50%',
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
  {
    Particulars: "Sales",
    FYpre: 100,
    FYcurrent: 170,
    Growth: '50%',
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
  {
    Particulars: "PAT",
    FYpre: 100,
    FYcurrent: 150,
    Growth: '50%',
    Q1FYCurrent: 25,
    Q2FYCurrent: 25,
    Q3FYCurrent: 25,
    Q4FYCurrent: 25,
  },
];

const QuarterlyPerformance = () => {
  const [allActivity, setAllActivity] = useState(data);
  const [selectedFY, setSelectedFY] = useState("2023");
  const handleFY = (e: any) => {
    // console.log(e.target.value);
    setSelectedFY(e.target.value);
  };
  const findGrowth = (cfy:number,pfy:number) =>{
    const growth = ((cfy-pfy)/pfy)*100;
    if(growth>=0){
        return {value: growth, isUp: true};
    }else{
        return {value: growth, isUp: false};
    }
  }
  return (
    <div>
      <h3>Quarterly Performance Report</h3>
      <div className={"card "} style={{ maxHeight: "80vh", padding: "10px" }}>
        <div
          style={{
            // padding: "10px",
            // borderRadius: "0.3px",
            // display: "flex",
            // flexWrap: "wrap",
            // justifyContent: "space-between",
            // alignItems: "center",
            marginBottom:'10px'
          }}
        >
          {/* <div className="row g-2">
            <div className="col-md"> */}
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                  onChange={handleFY}
                  value={selectedFY}
                >
                  <option disabled>---Select---</option>
                  <option value="2023">2022-2023</option>
                  <option value="2024">2023-2024</option>
                  <option value="2025">2024-2025</option>
                </select>
                <label htmlFor="floatingSelectGrid">Select FY</label>
              </div>
            {/* </div>
          </div> */}
        </div>
        {/* <div
          style={{ border: "0.6px solid #DFDFDF", marginTop: "-10px" }}
        ></div> */}
        <div
          className="ActionTakenDashboard"
          style={{ overflow: "auto", marginTop: "10px" }}
        >
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Particulars</th>
                <th scope="col">FY{Number(selectedFY)-1}</th>
                <th scope="col">FY{selectedFY}</th>
                <th scope="col">Growth %</th>
                <th scope="col">Q1 FY{selectedFY}</th>
                <th scope="col">Q2 FY{selectedFY}</th>
                <th scope="col">Q3 FY{selectedFY}</th>
                <th scope="col">Q4 FY{selectedFY}</th>
              </tr>
            </thead>
            <tbody>
              {allActivity.map((val, index) => {
                const info =  findGrowth(val.FYcurrent,val.FYpre);
                return (
                  <tr key={index}>
                    <th scope="row">{val.Particulars}</th>
                    <td>{val.FYpre}</td>
                    <td>{val.FYcurrent}</td>
                    <td>{info.value}% {info.isUp?<i style={{color:'green'}} className="fa-solid fa-arrow-trend-up fa-fade"></i>:<i style={{color:'red'}} className="fa-solid fa-arrow-trend-down fa-fade"></i>}</td>
                    <td>{val.Q1FYCurrent}</td>
                    <td>{val.Q2FYCurrent}</td>
                    <td>{val.Q3FYCurrent}</td>
                    <td>{val.Q4FYCurrent}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuarterlyPerformance;
