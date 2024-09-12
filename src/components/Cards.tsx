import { Card } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Cards = ({ cards, page }: { cards: any; page: string }) => {
  console.log({ cards });
  return (
    <>
      {cards.map((card: Card, _i: number) => (
        <Link
          href={`${page}/${card.id}`}
          key={_i}
          className="flex flex-col mb-8 w-full"
        >
          <div className="flex justify-between">
            {card.images.map((image, _i) => (
              <Image
                key={`${card.id}-${_i}`}
                src={`/${image}`}
                width={500}
                height={500}
                alt={card.title}
              />
            ))}
          </div>
          <div className="flex gap-2 py-2 uppercase items-center">
            <h1 className="font-bold text-lg text-secondary">{card.title}</h1>
            <p>|</p>
            <p className="font-light text-text-secondary">{card.type}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Cards;
