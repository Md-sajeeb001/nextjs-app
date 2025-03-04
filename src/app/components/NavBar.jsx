import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <nav className="flex justify-center py-3">
        <ul className="flex items-center justify-between w-1/2">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
