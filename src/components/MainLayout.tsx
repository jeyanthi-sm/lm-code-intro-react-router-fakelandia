import { Outlet, Link } from "react-router-dom";
import MainBody from "./MainBody";
import FooterFakeLandia from "./FooterFakelandia";
const MainLayout: React.FC = () => (
  <>
  <header className="headerClass"> 
  <nav >
   <ul>
      <li> FAKELANDIA JUSTICE DEPARTMENT</li>
      <li> <Link to='/'> Home </Link></li>
      <li> <Link to='/Misdemeanour'> MisdeMeanour</Link></li>   
      <li> <Link to='/Confession'> Confession to us</Link>        </li>
    </ul>
  </nav>
  <Outlet />
  </header>
  <main className="mainClass">
    <MainBody />
  </main>
  <footer className="footerClass">
    <FooterFakeLandia />
  </footer>
  </>
);
export default MainLayout;
