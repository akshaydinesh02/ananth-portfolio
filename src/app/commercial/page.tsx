import Cards from "@/components/Cards";

const data = [
  {
    title: "title 1",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    type: "type 1",
  },
  {
    title: "title 2",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    type: "type 2",
  },
  {
    title: "title 3",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    type: "type 3",
  },
  {
    title: "title 4",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    type: "type 4",
  },
  {
    title: "title 4",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    type: "type 5",
  },
  {
    title: "title 4",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    type: "type 6",
  },
  {
    title: "title 4",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    type: "type 7",
  },
  {
    title: "title 4",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    type: "type 8",
  },
];

export default function Commercial() {
  return (
    <main className="py-6 text-white w-[80%] mx-auto">
      <section>
        <h1 className="text-center mb-6 text-3xl uppercase">Commercial</h1>
        <Cards cards={data} />
      </section>
    </main>
  );
}
