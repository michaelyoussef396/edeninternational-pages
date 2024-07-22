"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import { useTranslations } from "next-intl";

export function StudentTestimonials() {
  const t = useTranslations("studentTestimonials");

  const testimonials = [
    {
      quote: t("testimonials.0.quote"),
      name: t("testimonials.0.name"),
      imageUrl: t("testimonials.0.imageUrl"),
    },
    {
      quote: t("testimonials.1.quote"),
      name: t("testimonials.1.name"),
      imageUrl: t("testimonials.1.imageUrl"),
    },
    {
      quote: t("testimonials.2.quote"),
      name: t("testimonials.2.name"),
      imageUrl: t("testimonials.2.imageUrl"),
    },
    {
      quote: t("testimonials.3.quote"),
      name: t("testimonials.3.name"),
      imageUrl: t("testimonials.3.imageUrl"),
    },
    {
      quote: t("testimonials.4.quote"),
      name: t("testimonials.4.name"),
      imageUrl: t("testimonials.4.imageUrl"),
      title: t("testimonials.4.title"),
    },
  ];

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gradient-to-b from-white to-gray-400 items-center justify-center relative overflow-hidden">
      <h2 className="text-black text-4xl font-bold mb-4 text-center sm:text-5xl">
        {t("title")} <span className="text-red-500">{t("highlight")}</span>
      </h2>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}
