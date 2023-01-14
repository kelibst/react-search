const MenuBar = () => {
  return (
    <div className="fixed h-full top-0 left-0 w-44 bg-darkPrimary  text-white p-2">
      <div>Logo</div>
      <nav>
        <ul className="flex flex-col mt-4 gap-4 ">
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