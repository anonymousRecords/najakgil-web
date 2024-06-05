import GoodsItem from "@/components/GoodsItem";
import { GoodsElement } from "@/constants";
import React from "react";

function Goods() {
  return (
    <section className="flex flex-col justify-center px-10 xl:px-40">
      <div className="mb-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
        {GoodsElement.map((goods) => (
          <GoodsItem key={goods.id} goods={goods} />
        ))}
      </div>
    </section>
  );
}

export default Goods;
