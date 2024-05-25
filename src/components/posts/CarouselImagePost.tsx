import type { Media } from "@/interfaces/post";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselImagePost({ images }: { images: Media[] }) {
  return (
    <Carousel className="w-full border-0 p-6">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
            <div className="p-1">
              <Image
                src={image.url}
                alt={image.type || "image-post"}
                width={400}
                height={300}
                className=""
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
