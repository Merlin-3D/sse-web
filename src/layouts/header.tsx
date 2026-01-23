import HeaderContact from "./header-contact";
import HeaderNavigate from "./header-naviagte";

export default function Header() {
  return (
    <div className="sticky top-0 w-full z-50">
      <HeaderContact />
      <HeaderNavigate />
    </div>
  );
}
