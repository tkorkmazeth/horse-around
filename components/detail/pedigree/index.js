import Link from "next/link";
import { Space } from "antd";
import { BsFillShareFill } from "react-icons/bs";
import styles from "./styles.module.css";
import { useWeb3 } from "../../web3/providers/";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import {
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,
  WhatsappShareButton,
} from "react-share";
import { useRouter } from "next/router";
import { useState } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";

export default function Pedigree({ horse }) {
  const { query } = useRouter();
  const [show,setShow]=useState(false)

  //   if (typeof window !== 'undefined') {
  //     setShareUrl(window.location.hostname)
  //  }

  const { web3 } = useWeb3();
  return (
    <div className={styles.box}>
      <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 md:gap-10 sm:gap-0 text-white mb-10">
        <div className="border-r-2 mr-10 border-[#FFFFFF1A] pr-10 md:pr-0 sm:pr-0 md:border-0 sm:border-0">
          <div className={styles.pedigreeBox}>
            <div className="bg-[#39250B] border-goldMetallic w-[78px] border-2 rounded-lg flex items-center justify-center">
              <span className="-rotate-90 text-base 2xl:text-2xl ">
                {horse.horseName}
              </span>
            </div>
            <div className="flex flex-wrap w-full gap-0">
              <div className="flex w-full">
                <div
                  className="flex items-center justify-center border-goldMetallic rounded-lg border-2 border-b  px-10 2xl:px-10"
                  style={{ width: "150px" }}
                >
                  {horse.first}
                </div>
                <div className="border-t-2 border-b-2 rounded-l-lg border-goldMetallic">
                  <div
                    className="flex items-center justify-center border-goldMetallic rounded-t-lg border-2 border-t-0 border-b p-5 2xl:px-10 h-1/2"
                    style={{ width: "150px" }}
                  >
                    {horse.second}
                  </div>
                  <div
                    className="flex items-center justify-center border-goldMetallic rounded-b-lg border-2 border-b-0 border-t p-5 2xl:px-10 h-1/2"
                    style={{ width: "150px" }}
                  >
                    {horse.thirth}-
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border-goldMetallic border-t-2 border-b-2  p-4 2xl:px-8">
                    {horse.fourth}
                  </div>
                  <div
                    className="flex items-center justify-center border-goldMetallic text-goldMetallic border-b-2  p-4 2xl:px-8"
                    style={{ width: "250px" }}
                  >
                    {horse.fifth}
                  </div>
                  <div
                    className="flex items-center justify-center border-goldMetallic border-b-2  p-4 2xl:px-8"
                    style={{ width: "250px" }}
                  >
                    {horse.sixth}
                  </div>
                  <div
                    className="flex items-center justify-center border-goldMetallic border-b-2  p-4 2xl:px-8"
                    style={{ width: "250px" }}
                  >
                    {horse.seventh}
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div
                  className="flex items-center justify-center border-goldMetallic rounded-lg border-2 border-t  px-10 2xl:px-10"
                  style={{ width: "150px" }}
                >
                  {horse.eighth}
                </div>
                <div className="border-t border-b-2 rounded-l-lg border-goldMetallic">
                  <div
                    className="flex items-center justify-center border-goldMetallic rounded-t-lg border-2 border-t-0 border-b p-5 2xl:px-10 h-1/2"
                    style={{ width: "150px" }}
                  >
                    {horse.ninth}
                  </div>
                  <div
                    className="flex items-center justify-center border-goldMetallic rounded-b-lg border-2 border-b-0 border-t p-5 2xl:px-10 h-1/2"
                    style={{ width: "150px" }}
                  >
                    {horse.tenth}
                  </div>
                </div>
                <div className="">
                  <div
                    className="flex items-center justify-center border-goldMetallic border-t border-b-2  p-4 2xl:px-8"
                    style={{ width: "250px" }}
                  >
                    {horse.eleventh}
                  </div>
                  <div
                    className="flex items-center justify-center border-goldMetallic border-b-2  p-4 2xl:px-8"
                    style={{ width: "250px" }}
                  >
                    {horse.twelfth}
                  </div>
                  <div
                    className="flex items-center justify-center border-goldMetallic border-b-2  p-4 2xl:px-8"
                    style={{ width: "250px" }}
                  >
                    {horse.thirteenth}
                  </div>
                  <div
                    className="flex items-center justify-center border-goldMetallic border-b-2  p-4 2xl:px-8"
                    style={{ width: "250px" }}
                  >
                    {horse.fourteenth}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex w-full gap-4">
            <img
              src="https://nationaltoday.com/wp-content/uploads/2020/12/National-Horse-Day-1.jpg"
              className="w-[250px]"
            />
            <div>
              <Space className="w-full items-center justify-between mb-4">
                <h2 className="text-4xl text-white font-PoppinsSemiBold">
                  {horse.horseName}
                </h2>
                <span className="text-goldMetallic text-2xl">
                  ID {horse.horseId}
                </span>
              </Space>

              <Space className="w-full justify-between items-start">
                <Space className="gap-2 flex">
                  <img
                    src="https://i.pravatar.cc/40"
                    className="h-11 rounded-lg"
                  />
                  <a href={`/owner/${horse?.publicAddress}`}>
                    <span className="text-base 2xl:text-xl">{`@${horse.ownerName}`}</span>
                  </a>
                </Space>

               
                <div className="text-end mt-2 w-full flex flex-col  right-0 float-right  items-center">
                  <BsFillShareFill className="text-xl cursor-pointer mb-2" onClick={()=>setShow(prev=>!prev)}/>
                  {show &&
                  <>
                  <FacebookShareButton
                    url={`https://horse-around-blue.vercel.app/detail/${query.id}`}
                    quote={"フェイスブックはタイトルが付けれるようです"}
                    hashtag={"#hashtag"}
                    description={"aiueo"}
                    className="Demo__some-network__share-button mb-2"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <TwitterShareButton
                    title={"test"}
                    url={`https://horse-around-blue.vercel.app/detail/${query.id}`}
                    hashtags={["hashtag1", "hashtag2"]}
                    className="mb-2"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>

                  <WhatsappShareButton
                    title={"test"}
                    url={`https://horse-around-blue.vercel.app/detail/${query.id}`}
                    hashtags={["hashtag1", "hashtag2"]}
                    className="mb-2"
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  </>
                   }
                </div>

               

                <Space>
                  {horse?.saleInfo.price && (
                    <>
                      <span className={styles.badge}>
                        {web3?.utils?.fromWei(horse.saleInfo.price, "ether")}{" "}
                        ETH
                      </span>
                      <span>or 5564 $</span>
                    </>
                  )}
                </Space>
              </Space>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
