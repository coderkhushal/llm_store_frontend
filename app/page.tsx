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
      <div className=""></div>
      <div className="flex justify-center mb-8 gap-12">
        <Link href="/client">
          <button className="glass-button transform md:-translate-x-[130%] md:-translate-y-3/4">for client</button>
        </Link>
        <Link href="/seller">
          <button className="glass-button transform md:translate-x-[25%] md:-translate-y-3/4">for Seller</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
