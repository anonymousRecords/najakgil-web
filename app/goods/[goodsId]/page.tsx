"use client";
import NotFound from "@/app/NotFound";
import Tag from "@/components/Tag";
import { GoodsElement } from "@/public";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function DetailedGoods() {
  const pathname = usePathname();

  const detailedGoodsData = () => {
    const goodsId = pathname.split("/").pop();
    const goods = GoodsElement.find((goods) => goods.id === goodsId);
    if (!goods) return null;
    return goods;
  };

  const goodsData = detailedGoodsData();

  if (!goodsData) {
    return <NotFound />;
  }

  const { id, title, description, imgUrl, category, downloadUrl } = goodsData;

  return (
    <div className="flex flex-col items-center gap-5 p-10 xl:gap-10 xl:px-40 xl:py-20">
      <h1 className="text-[22px] font-bold text-white xl:text-[42px]">
        {title}
      </h1>
      <div className="flex flex-col gap-6 md:flex-row xl:gap-12">
        <Image
          src={imgUrl}
          alt={id}
          width={550}
          height={0}
          style={{
            objectFit: "fill",
            aspectRatio: "16/9",
            borderRadius: "10px",
            margin: "0 auto",
          }}
        />
        <div className="flex flex-col gap-3">
          <div className="flex w-full items-center gap-3 xl:gap-6">
            <Tag tag={category} />
            <button
              className="flex justify-end"
              onClick={() => window.open(downloadUrl, "_blank")}
            >
              <Image
                src="/download.svg"
                alt="download"
                width={12}
                height={12}
                className="xl:size-6"
              />
            </button>
          </div>
          <p className="text-[12px] text-white xl:text-[18px]">{description}</p>
        </div>
      </div>
    </div>
  );
}
