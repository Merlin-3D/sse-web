import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1581092919534-4e1c7f59b1d8?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070",
];

export default function BackgroundSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden bg-black`}
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070")`
       ,
      }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`
          absolute inset-0
          transition-opacity duration-1000 ease-in-out
          ${index === current ? "opacity-100" : "opacity-0"}
        `}
        >
          <Image
            src={img}
            alt=""
            fill
            priority
            sizes="100vw"
            className={`
            w-full h-full object-cover
            transition-transform duration-6000 ease-out
            ${index === current ? "scale-110" : "scale-100"}
          `}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
        </div>
      ))}
    </div>
  );
}
