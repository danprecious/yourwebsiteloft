import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center">
      <strong className="flex text-center items-center justify-center text-[1.2rem] font-extrabold">
        yourwebsite<span className="text-amber-500">Loft</span>
      </strong>
    </Link>
  );
};

export default Logo;

export const LogoImage = () => {
  return (
    <Image
      loader={cloudinaryLoader}
      src="/images/logo.png"
      alt="Julie Party Planner Logo"
      width={200}
      height={50}
      className="object-contain ml-2"
    />
  );
};
