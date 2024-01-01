"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectData } from ".././data.js";
import Image from "next/image";

export function CustomCarousel() {
  return (
    <Carousel className="w-full max-w-6xl ">
      <CarouselContent>
        {projectData.map((data, index) => (
          <CarouselItem className=" " key={index}>
            <div className="white-glassmorphism p-5 flex-col flex items-center justify-center self-center">
              <h1 className="text-white mt-5 font-bold text-3xl">
                {data.name}
              </h1>

              <div className="flex items-center justify-between w-full">
                <a className="mt-5" href={data.deployedLink} target="_blank">
                  <Image
                    src={data.image}
                    alt={`${data.name}'s image`}
                    className=" rounded-xl cursor-pointer border-2 border-yellow-300 flex items-center self-center justify-center "
                    height={300}
                    width={700}
                  />
                </a>
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-white mt-5">{data.description}</h3>
                  <div className="text-white flex space-x-4 mt-3 ">
                    <a href={data.deployedLink} target="_blank">
                      <div className="white-glassmorphism p-3 cursor-pointer flex items-center text-center justify-center">
                        <h1>Visit Site</h1>
                      </div>
                    </a>
                    <a href={data.gitRepoLink} target="_blank">
                      <div className="white-glassmorphism p-3 cursor-pointer flex items-center text-center justify-center">
                        <h1>View Code</h1>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
