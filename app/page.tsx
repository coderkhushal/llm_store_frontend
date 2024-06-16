"use client";
import React, { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline';
import Link from "next/link";

const Home = () => {
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    if (typeof window !== "undefined") {
      updateScreenSize();
      window.addEventListener('resize', updateScreenSize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('resize', updateScreenSize);
      }
    };
  }, []);

  return (
    <>
      {isLgScreen && (
        <div>
          <Spline scene="https://prod.spline.design/mBj5JQrQ1ZWZuzBn/scene.splinecode"></Spline>
        </div>
      )}
      <div className="lg:hidden absolute inset-0">
        <video className="absolute inset-0 w-full h-full object-cover" src="/images/mob.mp4" autoPlay loop muted></video>
        <div className="absolute inset-x-0 bottom-0 flex justify-around mb-8">
          <Link href="/client">
            <button className="glass-button mb-4 scale-50">for client</button>
          </Link>
          <Link href="/seller">
            <button className="glass-button mb-4 scale-50">for Seller</button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-center lg:items-center mb-8">
        <div className="flex sm:scale-20 md:scale-100">
          <Link href="/client">
            <button className="glass-button transform translate-y-[75%] md:-translate-x-[75%] xl:-translate-y-3/4 lg:translate-y-[70%]">for client</button>
          </Link>
        </div>
        <div className="flex scale-20 md:scale-100">
          <Link href="/seller">
            <button className="glass-button transform md:translate-x-[25%] xl:-translate-y-3/4 lg:translate-y-[70%]">for Seller</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
