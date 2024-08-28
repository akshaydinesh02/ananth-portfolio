import Image from "next/image";

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

export default function Home() {
  return (
    <main className="py-6 text-white w-[80%] mx-auto">
      {data.map((d, _i) => (
        <div key={_i} className="flex flex-col mb-8 w-full">
          <div className="flex justify-between">
            {d.images.map((image, _i) => (
              <Image key={_i} src={image} width={500} height={500} alt="Test" />
            ))}
          </div>
          <div className="flex gap-2 py-2 uppercase items-center">
            <h1 className="font-bold text-lg text-secondary">{d.title}</h1>
            <p>|</p>
            <p className="font-light text-text-secondary">{d.type}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
