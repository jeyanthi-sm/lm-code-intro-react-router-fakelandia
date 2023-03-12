import { Outlet,  NavLink } from "react-router-dom";
import FooterFakeLandia from "./FooterFakelandia";
const activeStyle = {
  textDecoration: "overline", color:"green",
}
const nonActiveStyle = {
   color:"gray",
}


const MainLayout: React.FC = () => (
 
  
  <>
  <header className="headerClass"> 
  <nav >
   <ul>
      <li> FAKELANDIA JUSTICE DEPARTMENT</li>
      <li> <NavLink to='/'  style={({ isActive }) =>
              isActive ? activeStyle : nonActiveStyle
            }> Home </NavLink></li>
      <li> <NavLink to='/Misdemean' style={({ isActive }) =>
              isActive ? activeStyle : nonActiveStyle
            }> Misdemeanour</NavLink></li>   
      <li> <NavLink to='/Confession' style={({ isActive }) =>
              isActive ? activeStyle : nonActiveStyle
            }> Confession to us</NavLink>        </li>
    </ul>
  </nav>
  

  



  </header>
  <body>
  <Outlet />
  </body>
  <footer className="footerClass">
    <FooterFakeLandia />
  </footer>
  </>
)
export default MainLayout;
