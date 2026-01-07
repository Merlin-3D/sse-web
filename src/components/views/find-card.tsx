import Image from "next/image";
import { Button } from "../button";

interface FindCardProps {
  urlImage: string;
  title: string;
  description: string;
}

export default function FindCard({
  urlImage,
  title,
  description,
}: FindCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 mt-20">
      <Image
        src={urlImage}
        height={1000}
        width={1000}
        alt="sst"
        className="w-127.5 h-80.5 bg-cover"
      />
      <h1 className="max-w-sm mx-auto leading-6 uppercase font-bold text-secondary text-[22px] text-center">
        {title}
      </h1>
      <p className="text-white text-baser font-normal text-center my-4 w-127.5">
        {description}
      </p>
      <div>
        <Button size="xl">Contactez Nous {">"}</Button>
      </div>
    </div>
  );
}
