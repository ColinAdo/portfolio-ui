"use client";

import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "@/data/reviews";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < rating ? "text-emerald-300" : "text-gray-600"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function Reviews() {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {duplicatedReviews.map((review, index) => (
                <CarouselItem
                  key={`${review.id}-${index}`}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="glass-morphism bg-gray-950 border-gray-800 hover:border-emerald-300/50 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="space-y-4 h-full flex flex-col">
                        <StarRating rating={review.rating} />

                        <p className="text-gray-300 leading-relaxed flex-grow">
                          "{review.review}"
                        </p>

                        <div className="flex items-center space-x-3 mt-auto">
                          <Avatar className="w-12 h-12">
                            <AvatarImage
                              src={review.avatar}
                              alt={review.name}
                            />
                            <AvatarFallback className="bg-emerald-300 text-black font-semibold">
                              {review.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-white font-semibold">
                              {review.name}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {review.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
