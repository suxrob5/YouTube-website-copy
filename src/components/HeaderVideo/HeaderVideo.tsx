import Image from "next/image";
import CoreIcon from "@/assets/images/icons/icons8-youtube.svg";
import Menu from "@/assets/images/icons/menu.png";
import Link from "next/link";
import SearchIcon from "@/assets/images/icons/search.svg";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/Context/store";

interface Type {
  inputVal: any;
  setinputVal: any;
}

const HeaderVideo = () => {
  const { inputVal, setinputVal }: Type = useGlobalContext();
  const [input, setinput] = useState<string>("");

  const router = useRouter();
  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    router.push("/search");
    setinputVal(input)
  };

  return (
    <div className="w-[100%] p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={Menu} alt="img" className="w-[30px]" />
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
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="Введите запрос"
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

export default HeaderVideo;
