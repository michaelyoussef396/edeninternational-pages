"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { HoveredLink, MenuItem, NavHoveredLink } from "./NavBar-Menu";
import HamburgerMenu from "@/components/HamburgerMenu";
import { useTranslations } from "next-intl";
import { FloatingNavProps } from "@/types";



export const FloatingNav = ({ className, locale }: FloatingNavProps) => {
  const t = useTranslations("floatingNav");
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const [active, setActive] = useState<string | null>(null);
  const [hovering, setHovering] = useState<boolean>(false);

  useEffect(() => {
    if (!hovering && active) {
      const timer = setTimeout(() => setActive(null), 300);
      return () => clearTimeout(timer);
    }
  }, [hovering, active]);

  const getLocalizedLink = (path: string) => `/${locale}${path}`;

  return (
    <>
      <HamburgerMenu />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "hidden md:flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-24 inset-x-0 mx-auto px-10 py-5 rounded-full border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(255, 255, 255, 0.85)", // Updated to white
            borderRadius: "26px", // Increased radius for rounder corners
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          <NavHoveredLink href={getLocalizedLink("/")}>{t("home")}</NavHoveredLink>
          <MenuItem
            setActive={setActive}
            active={active}
            item={t("studentVisa")}
            setHovering={setHovering}
            href={getLocalizedLink("/student-visa")}
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href={getLocalizedLink("/study-in-australia")}>{t("studyInAustralia")}</HoveredLink>
              <HoveredLink href={getLocalizedLink("/study-in-canada")}>{t("studyInCanada")}</HoveredLink>
              <HoveredLink href={getLocalizedLink("/affiliate-institutions")}>{t("affiliatedInstitutions")}</HoveredLink>
              <HoveredLink href={getLocalizedLink("/Professional-year")}>{t("professionalYear")}</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item={t("migration")}
            setHovering={setHovering}
            href={getLocalizedLink("/migration")}
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href={getLocalizedLink("/temporary-skill-shortage-tss-visa-subclass-482")}>{t("temporarySkillShortageTssVisaSubclass482")}</HoveredLink>
              <HoveredLink href={getLocalizedLink("/training-visa-subclass-407")}>{t("trainingVisaSubclass407")}</HoveredLink>
              <HoveredLink href={getLocalizedLink("/skilled-work-regional-visa")}>{t("skilledWorkRegionalVisa")}</HoveredLink>
              <HoveredLink href={getLocalizedLink("/skilled-nominated-visa")}>{t("skilledNominatedVisa")}</HoveredLink>
              <HoveredLink href={getLocalizedLink("/skilled-independent-visa")}>{t("skilledIndependentVisa")}</HoveredLink>
              <HoveredLink href={getLocalizedLink("/temporary-graduate-visa-subclass-485")}>{t("temporaryGraduateVisaSubclass485")}</HoveredLink>
              <HoveredLink href={getLocalizedLink("/sponsored-jobs")}>{t("sponsoredJobs")}</HoveredLink>
              <HoveredLink href={getLocalizedLink("/point-calculation")}>{t("pointCalculation")}</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item={t("contactUs")}
            setHovering={setHovering}
            href={getLocalizedLink("/contact-us")}
          >
            <div className="flex flex-col space-y-4 text-sm">
              <NavHoveredLink href={getLocalizedLink("/booking")}>{t("bookAnAppointment")}</NavHoveredLink>
            </div>
          </MenuItem>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
