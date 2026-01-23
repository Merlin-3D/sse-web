import Image from "next/image";

interface SectorsProps {
  urlImage: string;
  title: React.ReactNode;
}

export default function Sectors({ urlImage, title }: SectorsProps) {
  return (
    <div className="group bg-secondary hover:bg-primary transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={urlImage}
          height={1000}
          width={1000}
          alt="sst"
          className="min-w-full min-h-100 w-96 object-cover 
                     transition-transform duration-500 ease-in-out 
                     group-hover:scale-105"
        />
        {/* Overlay optionnel pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
      </div>
      <div className="py-6 group-hover:py-7 transition-all duration-300">
        <h1
          className="text-2xl font-bold text-center uppercase 
                       text-gray-800 group-hover:text-white 
                       transition-colors duration-300"
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
