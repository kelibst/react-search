import Search from "../Search";
import MenuBar from "./MenuBar";
const Layout = () => {
  return (
    <div className="flex">
      <MenuBar />
      <div className="w-full">
        <div className="menu_header bg-slate-300">Home / DC / Item</div>
        <Search />
      </div>
    </div>
  );
};

export default Layout;