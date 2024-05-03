"use client";

import { useEffect, useState } from "react";
import YouTubeData from "@/components/YouTubeData";
import { mainData } from "@/data/main";
import Header from "@/components/Header";
import { useGlobalContext } from "@/Context/store";
import Sidebar from "@/components/Sidebar/Sidebar";

const Search = () => {
  const { setdataContext, inputVal, setinputVal }: any = useGlobalContext();
  const [data, setdata] = useState<any>(mainData);
  const [menu, setmenu] = useState(true);

  const FetchData = async () => {
    const apiKey = "AIzaSyBbrJyYQh514o2dstYPPpOQHTfLV9pz4M4";
    const q = inputVal;

    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=${apiKey}`
    );

    const result = await res.json();
    setdata(result);
    setdataContext(result);
  };

  useEffect(() => {
    FetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header>
        <Header
          setinputVal={setinputVal}
          inputVal={inputVal}
          FetchData={FetchData}
          menu={menu}
          setmenu={setmenu}
        />
      </header>

      <main>
        <div>
          <Sidebar menu={menu} setmenu={setmenu} />
        </div>
        <section>
          <YouTubeData data={data} />
        </section>
      </main>
    </div>
  );
};

export default Search;
