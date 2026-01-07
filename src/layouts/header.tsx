import HeaderContact from "./header-contact";
import HeaderNavigate from "./header-naviagte";

export default function Header() {
  return (
    <div className="fixed top w-full">
      <HeaderContact />
      <HeaderNavigate />
    </div>
  );
}
