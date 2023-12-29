import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex-center flex-col flex-between gap-4 text-center p-5 sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            height={38}
            width={128}
            alt="logo"
          />
        </Link>
        <p>2023 Evently All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
