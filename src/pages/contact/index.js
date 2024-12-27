import Transition from "@/components/Transition";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <Transition>
      <div className="h-screen flex items-center justify-center text-white">
        <Image
          src="/sence-1.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <span className="uppercase text-[10vw] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Contact
        </span>
      </div>
    </Transition>
  );
};

export default Contact;
