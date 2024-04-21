import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import React from "react";
import SwiperContaier from "@/components/utils/Swiper";
import Sections from "@/components/Sections";
import Blog from "@/components/Blog";
import Categories from "@/components/Categories";
import HealthTips from "@/components/HealthTips";
import Packages from "@/components/Packages";

export default function Home() {
  return (
      <main className="flex flex-col gap-[1rem]">
          <Packages />
          <HealthTips />
          <Categories />
          <SwiperContaier />
          <Sections />
          <Blog />
          <Contact />
          <Footer />
      </main>
  );
}
