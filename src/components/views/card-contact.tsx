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
    <div className=" bg-primary py-12 px-8 flex flex-col justify-center items-center">
      {icon}
      <h1 className="text-secondary text-xl font-extrabold mt-8">{name}</h1>
      <h6 className="text-secondary text-sm mt-4 text-center">{descritption}</h6>
      <h4 className="text-secondary font-semibold">{phone}</h4>
    </div>
  );
}
