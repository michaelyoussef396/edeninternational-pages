"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const Card: FC<CardProps> = ({ title, imageUrl, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black text-white text-lg font-bold"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            {title}
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-red-500 text-white p-4 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {description}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const CardGrid: FC = () => {
  const t = useTranslations("cards");

  const cards = [
    {
      title: t("0.title"),
      imageUrl: t("0.imageUrl"),
      description: t("0.description"),
    },
    {
      title: t("1.title"),
      imageUrl: t("1.imageUrl"),
      description: t("1.description"),
    },
    {
      title: t("2.title"),
      imageUrl: t("2.imageUrl"),
      description: t("2.description"),
    },
    {
      title: t("3.title"),
      imageUrl: t("3.imageUrl"),
      description: t("3.description"),
    },
    {
      title: t("4.title"),
      imageUrl: t("4.imageUrl"),
      description: t("4.description"),
    },
    {
      title: t("5.title"),
      imageUrl: t("5.imageUrl"),
      description: t("5.description"),
    },
    {
      title: t("6.title"),
      imageUrl: t("6.imageUrl"),
      description: t("6.description"),
    },
    {
      title: t("7.title"),
      imageUrl: t("7.imageUrl"),
      description: t("7.description"),
    },
    {
      title: t("8.title"),
      imageUrl: t("8.imageUrl"),
      description: t("8.description"),
    },
    {
      title: t("9.title"),
      imageUrl: t("9.imageUrl"),
      description: t("9.description"),
    },
    {
      title: t("10.title"),
      imageUrl: t("10.imageUrl"),
      description: t("10.description"),
    },
    {
      title: t("11.title"),
      imageUrl: t("11.imageUrl"),
      description: t("11.description"),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardGrid;
