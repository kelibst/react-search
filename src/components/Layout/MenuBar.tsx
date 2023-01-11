import React from "react";

const MenuBar = () => {
  return (
    <div className="left_side_menu w-32 bg-[#00152F] h-[100vh] text-white p-2">
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            i <a href="#">Item search</a>
          </li>
          <li>
            i <a href="#">Item</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBar;
