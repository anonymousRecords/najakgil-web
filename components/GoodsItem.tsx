import { Goods } from "@/type";
import Link from "next/link";
import Tag from "./Tag";
import Image from "next/image";

type GoodsItemProps = {
  goods: Goods;
};

export default function GoodsItem({ goods }: GoodsItemProps) {
  const { id, category, description, imgUrl, title } = goods;
  return (
    <Link
      className="flex flex-col rounded-xl border-4 p-5 transition-all duration-300 ease-in-out hover:-translate-y-1.5 xl:p-10"
      href={`/goods/${id}`}
    >
      <div className="mb-3 flex">
        <Tag tag={category} />
      </div>
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
      <div className="mb-2 mt-3 flex flex-col items-start">
        <h3 className="text-[18px] font-semibold text-white xl:text-[22px]">
          {title}
        </h3>
        <p className="mt-3 text-[12px] text-white xl:text-[16px]">
          {description}
        </p>
      </div>
    </Link>
  );
}
