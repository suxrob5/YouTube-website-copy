"use client";

import Link from "next/link";
import { useGlobalContext } from "@/Context/store";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";

interface Type {
  data: { items: [] };
}

const YouTubeData: React.FC<Type> = ({ data }) => {
  const pathName = usePathname();

  const { setpageItems }: any = useGlobalContext();
  const { items } = data;

  return (
    <div className="flex items-center justify-between">
      <h1>.</h1>
      <section className="flex items-center justify-between flex-wrap w-[90%]">
        {items == undefined ? (
          <div className="flex items-center justify-center w-[100%] mt-[200px]">
            <h1 className="text-[60px] font-[500]">Loading...</h1>
          </div>
        ) : (
          items.map(
            (
              item: {
                etag: string;
                snippet: {
                  title: string;
                  channelTitle: string;
                  thumbnails: { medium: { url: string } };
                };
                id: { videoId: string };
              },
              index: number
            ) => (
              <Link
                className="mt-5 rounded-xl w-[100%]"
                key={index}
                href={`${pathName}/${item.etag}`}
              >
                <div
                  onClick={() => setpageItems(item)}
                  className="active:border-white active:bg-opacity-10 border border-black rounded-xl flex w-[100%] hover:bg-white hover:bg-opacity-20"
                >
                  <div className="w-[500px] h-[300px]">
                    <Avatar className="w-[500px] h-[300px] rounded-xl p-5">
                      <AvatarImage src={item.snippet.thumbnails.medium.url} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>

                  <div>
                    <h1 className="text-3xl mt-3">{item.snippet.title}</h1>
                    <h1 className="text-2xl mt-3 text-gray-600">
                      {item.snippet.channelTitle}
                    </h1>
                  </div>
                </div>
              </Link>
            )
          )
        )}
      </section>
    </div>
  );
};

export default YouTubeData;
