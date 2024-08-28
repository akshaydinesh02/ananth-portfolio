import { Card } from "@/types";
import Image from "next/image";

const Cards = ({ cards }: { cards: any }) => {
  return (
    <>
      {cards.map((card: Card, _i: number) => (
        <div key={_i} className="flex flex-col mb-8 w-full">
          <div className="flex justify-between">
            {card.images.map((image, _i) => (
              <Image key={_i} src={image} width={500} height={500} alt="Test" />
            ))}
          </div>
          <div className="flex gap-2 py-2 uppercase items-center">
            <h1 className="font-bold text-lg text-secondary">{card.title}</h1>
            <p>|</p>
            <p className="font-light text-text-secondary">{card.type}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
