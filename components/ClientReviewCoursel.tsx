import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from ".././data.js";

export function ClientReviewCoursel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent className="-ml-1">
        {testimonials.map((data) => {
          return (
            <div className=" cursor-pointer max-w-md   max-h-max">
              <div className="bg-[#1E1535] text-left relative space-y-4 max-w-sm min-w-max p-4 rounded-lg">
                <div className="flex  items-center space-x-5 ">
                  <div>
                    {/* <UserCircleIcon className="h-10 w-10 text-white" /> */}
                  </div>
                  <div>
                    <p className="text-xl  font-semibold tracking-wide text-left">
                      {data.name}
                    </p>
                    <p className="text-gray-300">{data.work}</p>
                  </div>
                </div>

                <p className="max-w-xs xl:max-w-sm mt-10">{data.text}</p>
              </div>
            </div>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
