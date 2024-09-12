import { getSingleContent } from "@/server/actions/common";
import { getNarrativeContentIDs } from "@/server/actions/narrative";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const ids = await getNarrativeContentIDs();
  return ids;
}

const SingleNarrativePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const content = await getSingleContent(id);
  if (!content) {
    return notFound();
  }
  return <div>page</div>;
};

export default SingleNarrativePage;
