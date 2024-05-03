"use client";
// useContext
import { useGlobalContext } from "@/Context/store";
// components
import HeaderVideo from "@/components/HeaderVideo/HeaderVideo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// next
import Link from "next/link";
// react
import React, { useState } from "react";

const HomeID = ({ params: { id } }: { params: { id: number } }) => {
  const [className, setclassName] = useState(
    "bg-[#272727FF] p-5 rounded-lg mt-5"
  );
  const [isOpen, setisOpen] = useState(false);
  
  interface PageItemType {
    pageItems: any;
    setpageItems: any;
    dataContext: any;
  }
  const { pageItems, setpageItems, dataContext }: PageItemType =
    useGlobalContext();

  const [dates, setdates] = useState(pageItems.snippet.publishTime);

  console.log(dataContext);
  const date = new Date(dates);

  const handleClik = () => {
    if (isOpen == true) { 
      setisOpen(false);
      setclassName("bg-[#272727FF] p-5 rounded-lg mt-5");
    } else if (isOpen == false) {
      setisOpen(true);
      setclassName("bg-[#272727FF] p-5 h-[400px] rounded-lg mt-5");
    }
  };
  () => setdates(pageItems.snippet.publishTime);
  return (
    <div>
      <header>
        <HeaderVideo />
      </header>
      <main className="w-[90%] mx-auto flex justify-between mt-[20px]">
        <div>
          {pageItems !== null ? (
            <div>
              <div className="flex">
                <div>
                  <iframe
                    width="1000"
                    height="600"
                    src={`https://www.youtube.com/embed/${pageItems.id.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-[10px] border border-gray-800"
                  ></iframe>

                  <h1 className="text-3xl mt-5">{pageItems.snippet.title}</h1>

                  <div
                    className={`${className} cursor-pointer relative`}
                    onClick={handleClik}
                  >
                    <h1
                      className={`${
                        isOpen == true ? "text-3xl mt-5" : "text-xl"
                      } `}
                    >
                      {pageItems.snippet.channelTitle}
                    </h1>
                    <h1
                      className={`${
                        isOpen == true ? "text-3xl mt-5" : "text-xl"
                      } `}
                    >
                      {pageItems.snippet.description}
                    </h1>

                    <h1
                      className={`${
                        isOpen == true ? "text-3xl mt-5" : "hidden"
                      } `}
                    >
                      channelId:{" "}
                      <span className="text-blue-300">
                        {pageItems.snippet.channelId}
                      </span>
                    </h1>
                    <h1
                      className={`${
                        isOpen == true ? "text-3xl mt-5" : "hidden"
                      } text-gray-600 font-[600] absolute bottom-5 right-5`}
                    >{`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`}</h1>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {/*  */}

        <section className="ml-10">
          {dataContext == null ? (
            <div>
              <h1 className="text-3xl font-[500]">Loading...</h1>
            </div>
          ) : (
            dataContext.items.map((item: any, index: number) => (
              <Link
                className="rounded-xl"
                key={index}
                href={`/search/${item.etag}`}
              >
                <div
                  onClick={() => setpageItems(item)}
                  className="active:border-white p-5 w-[400px] items-center flex justify-between active:bg-opacity-10 border border-black rounded-xl hover:bg-white hover:bg-opacity-20"
                >
                  <div className="w-[250px]">
                    <Avatar className="rounded-[10px] border border-gray-700 w-[150px] h-[100px]">
                      <AvatarImage src={item.snippet.thumbnails.medium.url} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-3">
                    <h1 className="text-2xl">{item.snippet.channelTitle}</h1>
                    <h1 className="text-xl mt-3 text-gray-300">
                      {item.snippet.title}
                    </h1>
                  </div>
                </div>
              </Link>
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default HomeID;
