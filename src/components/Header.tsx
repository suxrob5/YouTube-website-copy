import Image from "next/image";
import CoreIcon from "@/assets/images/icons/icons8-youtube.svg";
import Menu from "@/assets/images/icons/menu.png";
import Link from "next/link";
import SearchIcon from "@/assets/images/icons/search.svg";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface HeaderType {
  setinputVal: Dispatch<SetStateAction<string>>;
  inputVal: string;
  FetchData: () => Promise<void>;
  menu: boolean;
  setmenu: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderType> = ({
  setinputVal,
  inputVal,
  FetchData,
  menu,
  setmenu,
}) => {
  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    FetchData();
  };

  const handleSidebar = () => {
    if (menu == true) {
      setmenu(false);
    } else if (menu == false) {
      setmenu(true);
    }
  };

  return (
    <div className="w-[100%] p-5 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={handleSidebar} className="active:scale-75 w-[40px]">
            <Image src={Menu} alt="img" className="w-[40px]" />
          </button>
          <Link href="/search">
            <div className="flex items-center justify-between">
              <Image src={CoreIcon} alt="img" className="w-[50px] ml-10" />
              <h1 className="text-4xl">YouTube</h1>
            </div>
          </Link>
        </div>
        <form
          className="flex items-center justify-between"
          onSubmit={handleForm}
        >
          <input
            type="text"
            value={inputVal}
            placeholder="Введите запрос"
            onChange={(e) => setinputVal(e.target.value)}
            className="bg-[#121212FF] placeholder:text-[#838383FF] px-5 text-2xl py-3 w-[500px] focus:outline-none focus:border-cyan-800 border-2 rounded-l-[30px] border-[#222222FF]"
          />
          <button
            type="submit"
            className="rounded-r-[30px] bg-[#222222FF] border-[#222222FF] border-2 py-3 relative px-8"
          >
            <div className="">
              <span className="opacity-0 text-2xl font-[500]">d</span>
              <Image
                src={SearchIcon}
                alt="d"
                className="w-[20px] absolute top-3 left-5"
              />
            </div>
          </button>
        </form>
        <div>
          <button className="border rounded-[50%] p-3 px-5 text-2xl mx-1">
            A
          </button>
          <button className="border rounded-[50%] p-3 px-5 text-2xl mx-1">
            A
          </button>
          <button className="border rounded-[50%] p-3 px-5 text-2xl mx-1">
            A
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
