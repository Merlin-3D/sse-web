interface ContactCardProps {
  icon: React.ReactNode;
  name: string;
  descritption: string;
  phone: string;
}
export default function ContactCard({
  icon,
  name,
  descritption,
  phone,
}: ContactCardProps) {
  return (
    <div
      className="ease-in-out transition-transform duration-500 cursor-pointer
         hover:scale-105 bg-primary py-12 px-8 flex flex-col justify-center items-center"
    >
      {icon}
      <h1 className="text-secondary text-xl font-extrabold mt-8">{name}</h1>
      <h6 className="text-secondary text-sm mt-4 text-center">
        {descritption}
      </h6>
      <h4 className="text-secondary font-semibold">{phone}</h4>
    </div>
  );
}
