import Search from "../Search";
import Breadcrumb from "./Breadcrumb";
import MenuBar from "./MenuBar";

const Layout = ({children}) => {
  return (
    <div className="">
      <MenuBar />
      <header className="ml-44 h-full">
        <Breadcrumb pages={["Home", "OC"]} currentPage="Item search" />
        {children}
      </header>
     
    </div>
  );
};

export default Layout;