import Image from "next/image";
import { FaGithub, FaTwitter, FaMedium } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-64 p-2.5 border-2 border-white border-solid rounded text-center">
        <div className="mx-auto mb-4 w-20 h-20">
          <div className="rounded-full overflow-hidden w-full h-full">
            <Image src="/almighty.jpg" width={125} height={125} alt="seed" />
          </div>
        </div>
        <div className="text-sm p-4">
          <span className="text-rose-500 ">[Saul@g3ntry]</span>
          <br></br>
          Learning and Practicing Cybersecurity
        </div>
        <div className="flex mx-6 my-6">
          <a
            href="https://github.com/g3ntry1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} className="mx-2" />
          </a>
          <a
            href="https://twitter.com/g3ntry1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} className="mx-2" />
          </a>
          <a
            href="https://medium.com/@saul_x0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium size={30} className="mx-2" />
          </a>
          <a
            href="https://tryhackme.com/p/g3ntry1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTryhackme size={30} className="mx-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
