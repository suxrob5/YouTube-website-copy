import { Dispatch, SetStateAction } from "react";

interface Type {
  menu: boolean;
  setmenu: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.FC<Type> = ({ menu, setmenu }) => {
  return (
    <div className="border w-[80px] h-screen absolute top-0">
      <h1>Sidebar</h1>
    </div>
  );
};

export default Sidebar;