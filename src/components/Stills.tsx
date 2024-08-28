import Image from "next/image";

const Stills = ({ stills }: { stills: Array<string> }) => {
  console.log(stills);
  return (
    <div className="grid grid-cols-3 gap-4 place-items-center">
      {stills.map((still: string, _i: number) => (
        <Image
          key={_i}
          src={still}
          alt={_i.toString()}
          width={400}
          height={400}
        />
      ))}
    </div>
  );
};

export default Stills;
