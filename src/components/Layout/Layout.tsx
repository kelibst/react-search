import Breadcrumb from "./Breadcrumb";
import MenuBar from "./MenuBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
      <MenuBar />
      <header className="ml-44 h-full">
        <Breadcrumb pages={["Home", "OC"]} currentPage="Item search" />
        {children}
      </header>
     
    </div>
  );
};

export default Layout;