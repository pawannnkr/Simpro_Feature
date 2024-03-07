import { NavLink } from "react-router-dom"


export const OffCanvas = () =>{
    return <div style={{width:'230px',backgroundImage:
    "url(https://img.freepik.com/free-photo/abstract-design-background-smooth-flowing-lines_1048-14640.jpg?w=826&t=st=1709389253~exp=1709389853~hmac=82738dc4ab4819cb46399b3ba6e44868b90e1f5b2117172c9fecd74c81a1297e)",
}} className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div className="offcanvas-header">
    <div><img src="http://simpro.co.in/wp-content/uploads/2022/06/simpro-logo1-1.png" alt="" /></div>
      {/* <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
    </div>
    <div className="offcanvas-body">
    
      <div className="sidebar">
        <NavLink className="nav-link" to={"/"}><i className="fa-solid fa-house sidebarIcon"></i>DASHBOARD</NavLink>

        <NavLink className="nav-link" to={"/page2"}><i className="fa-solid fa-credit-card sidebarIcon" ></i>CARDS</NavLink>
        <NavLink className="nav-link" to={"/c"}><i className="fa-solid fa-chart-line sidebarIcon"></i>CHARTS</NavLink>
      </div>
    </div>
  </div>
}