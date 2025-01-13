import Image from "next/image";
import { Lobster } from "next/font/google";
import Link from "next/link";
import TypeEffect from "@/components/TypeEffect";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="text-black">
      <section className=" grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 h-auto sm:h-[70vh] pt-10 sm:pt-0  bg-cyan-100">
        <div className="flex flex-col justify-center items-center gap-3 ">
          <div className="min-h-12  px-4">
          <TypeEffect/>
          </div>
          
          <p className={`text-center px-14 ${lobster.className}`}>
            Easily convert lengthy URLs into short, memorable links with
            Bitlinks<span className="hidden lg:inline">, making it simple to share and manage your links
            effortlessly.</span>
          </p>
          <div className="flex gap-5 text-sm text-white mt-5 ">
            <Link href="/shorten">
              <button className=" py-3 px-8 rounded-lg bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300   ">
               Generate
              </button>
            </Link>
           
          </div>
        </div>
        <div className="relative">
          <Image src={"/vector.png"} fill={true} alt="A img of shortner" />
        </div>
      </section>
      <section className="bg-cyan-100 mt-1 flex flex-col justify-center items-center pb-16 gap-10">
        <h1 className="text-3xl sm:text-5xl  font-bold my-8">About BitLinks</h1>
        <div className="container grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 gap-4 px-4 ">
          <article className="flex flex-col items-center px-10">
            <div className="rounded-full bg-cyan-300 inline-block p-5">
              <Image
                alt="image of easy"
                src={"/comfort.png"}
                width={66}
                height={66}
              />
            </div>
            <h3 className="text-xl font-semibold my-2 text-center">Easy to Use</h3>
            <p className="text-center">
              Simplify your workflow with an intuitive interface designed for
              straightforward URL management.
            </p>
          </article>
          <article className="flex flex-col items-center px-10">
          <div className="rounded-full bg-cyan-300 inline-block p-5">
              <Image
                alt="image of customize"
                src={"/customize.png"}
                width={66}
                height={66}
              />
            </div>
            <h3 className="text-xl font-semibold my-2 text-center">Customizable Links</h3>
            <p className="text-center">
              Create branded links tailored to your needs and reinforce your
              brand identity.
            </p>
          </article>
          <article className="flex flex-col items-center px-10">
          <div className="rounded-full bg-cyan-300 inline-block p-5">
              <Image
                alt="image of reliability"
                src={"/reliability.png"}
                width={66}
                height={66}
              />
            </div>
            <h3 className="text-xl font-semibold my-2 text-center">Quick and Reliable</h3>
            <p className="text-center">
              Ensure your links are always ready and accessible with Bitlinks'
              reliable service.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
