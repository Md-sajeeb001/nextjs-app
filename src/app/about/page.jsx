"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  const isLoggin = false;
  const handelNavigation = () => {
    if (isLoggin) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <p className="text-3xl font-bold">About Page</p>

      {/* <Link href='/about/address'>Address page</Link> */}

      <button type="button" onClick={handelNavigation}>
        Address page
      </button>
    </div>
  );
}
