import Cards from "@/components/Cards";
import { getNarrativeContent } from "@/server/actions/narrative";

const data = [
  {
    title: "Ready Player One",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    type: "commercial",
    id: "1",
  },
  {
    title: "Waterr - CZU Shadow",
    images: ["/image2.jpg", "/image3.jpg", "/image1.jpg"],
    type: "commercial",
    id: "2",
  },
  {
    title: "Apothic Red wine",
    images: ["/image3.jpg", "/image1.jpg", "/image2.jpg"],
    type: "commercial",
    id: "3",
  },
  {
    title: "Bluemoon",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    type: "commercial",
    id: "4",
  },
  {
    title: "Saramsha 0 Naseyo Naksheyo",
    images: ["/image2.jpg", "/image3.jpg", "/image1.jpg"],
    type: "music",
    id: "5",
  },
  {
    title: "Bira Spec Commercial",
    images: ["/image3.jpg", "/image1.jpg", "/image2.jpg"],
    type: "commercial",
    id: "6",
  },
  {
    title: "Slinky",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    type: "commercial",
    id: "7",
  },
];

export default async function Narrative() {
  // const docs = await getNarrativeContent();
  // console.log(docs);
  return (
    <main className="py-6 text-white w-[80%] mx-auto">
      <section>
        <h1 className="text-center mb-6 text-3xl uppercase">Narrative</h1>
        <Cards cards={data} page="/narrative" />
      </section>
    </main>
  );
}
