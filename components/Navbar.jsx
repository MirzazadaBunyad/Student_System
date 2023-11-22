import Link from "next/link";

function Navbar() {
  return (
    <div className="w-[90%] mx-auto my-[20px]">
      <Link href="/students">
        <h1 className="text-white text-start text-4xl cursor-pointer font-bold border-b border-white pb-4 w-full">
          Student System
        </h1>
      </Link>
    </div>
  );
}
export default Navbar;
