import Stills from "@/components/Stills";

const data = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
];

export default function CommercialStills() {
  return (
    <main className="py-6 text-white w-[80%] mx-auto">
      <section>
        <h1 className="text-center mb-12 text-3xl uppercase">
          Commercial Stills
        </h1>
        <Stills stills={data} />
      </section>
    </main>
  );
}
