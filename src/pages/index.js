import Transition from "@/components/Transition";
import Image from "next/image";

export default function Home() {
  return (
    <Transition>
      <div className="h-screen flex items-center justify-center relative text-white">
        <Image
          src="/sence-3.jpg"
          alt=""
          fill
          priority={true}
          className="object-cover"
        />
        <span className="uppercase text-[10vw] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Home
        </span>
      </div>
    </Transition>
  );
}
