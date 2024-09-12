import VideoPlayer from "@/components/VideoPlayer";
import { getCommercialAndMusicContentIDs } from "@/server/actions/commercial";
import { getSingleContent } from "@/server/actions/common";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactPlayer from "react-player";

export async function generateStaticParams() {
  const ids = await getCommercialAndMusicContentIDs();
  return ids;
}

const SingleCommercialPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  // const content = await getSingleContent(id);
  const content = {
    images: [
      "image2.jpg",
      "image3.jpg",
      "image1.jpg",
      "image2.jpg",
      "image3.jpg",
      "image1.jpg",
      "image2.jpg",
      "image3.jpg",
      "image1.jpg",
      "image2.jpg",
      "image3.jpg",
      "image1.jpg",
    ],
    title: "Saramsha - Nasheyo Naksheyo",
    type: "music",
  };
  console.log(content);

  if (!content) {
    return notFound();
  }
  return (
    <main className="w-[80%] text-white py-6 mx-auto">
      <section className="flex w-[100%] gap-12">
        <article className="w-[40%] flex flex-col gap-4">
          <h1 className="text-3xl font-extrabold">{content.title}</h1>
          <p className="uppercase font-medium">{content.type}</p>
        </article>
        <article className="w-[60%] flex flex-col gap-12">
          <VideoPlayer />
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 justify-center justify-items-center">
            {content.images.map((image, _i) => (
              <div key={_i} className="relative w-[50%] h-32">
                <Image
                  src={`/${image}`}
                  alt={`${content}-${image.toString()}`}
                  // layout="fill"
                  // objectFit="contain"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default SingleCommercialPage;
