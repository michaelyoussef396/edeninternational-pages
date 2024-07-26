import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HoveredLink, NavHoveredLink } from "@/components/ui/NavBar-Menu";
import { useTranslations } from "next-intl";

const HamburgerMenu = ({ locale }: { locale: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const t = useTranslations("floatingNav");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (item: string) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  const getLocalizedLink = (path: string) => `/${locale}${path}`;

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-[5001] p-4 text-red-600 text-2xl rounded-md md:hidden"
      >
        ☰
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[5000] bg-white text-black flex flex-col items-center justify-center space-y-8 overflow-hidden"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 p-4 text-black text-2xl rounded-md"
            >
              ✕
            </button>
            <NavHoveredLink href={getLocalizedLink("/")}>
              {t("home")}
            </NavHoveredLink>
            <div className="relative text-lg">
              <Link href={getLocalizedLink("/student-visa")} onClick={toggleMenu}>
                {t("studentVisa")}
              </Link>
              <button
                onClick={() => toggleSubMenu("Student Visa")}
                className="ml-2 text-red-600"
              >
                {activeMenuItem === "Student Visa" ? "▲" : "▼"}
              </button>
              {activeMenuItem === "Student Visa" && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  exit={{ width: 0 }}
                  className="absolute left-full top-0 bg-white shadow-lg p-4 rounded-md overflow-y-auto max-h-64"
                >
                  <div className="flex flex-col space-y-4 text-sm pl-4">
                    <HoveredLink href={getLocalizedLink("/study-in-australia")} onClick={toggleMenu}>
                      {t("studyInAustralia")}
                    </HoveredLink>
                    <HoveredLink href={getLocalizedLink("/study-in-canada")} onClick={toggleMenu}>
                      {t("studyInCanada")}
                    </HoveredLink>
                    <HoveredLink href={getLocalizedLink("/affiliate-institutions")} onClick={toggleMenu}>
                      {t("affiliatedInstitutions")}
                    </HoveredLink>
                    <HoveredLink href={getLocalizedLink("/Professional-year")} onClick={toggleMenu}>
                      {t("professionalYear")}
                    </HoveredLink>
                  </div>
                </motion.div>
              )}
            </div>
            <div className="relative text-lg">
              <Link href={getLocalizedLink("/migration")} onClick={toggleMenu}>
                {t("migration")}
              </Link>
              <button
                onClick={() => toggleSubMenu("Migration")}
                className="ml-2 text-red-600"
              >
                {activeMenuItem === "Migration" ? "▲" : "▼"}
              </button>
              {activeMenuItem === "Migration" && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  exit={{ width: 0 }}
                  className="absolute left-full top-0 bg-white shadow-lg p-4 rounded-md overflow-y-auto max-h-64"
                >
                  <div className="flex flex-col space-y-4 text-sm pl-4">
                    <HoveredLink href={getLocalizedLink("/temporary-skill-shortage-tss-visa-subclass-482")} onClick={toggleMenu}>
                      {t("temporarySkillShortageTssVisaSubclass482")}
                    </HoveredLink>
                    <HoveredLink href={getLocalizedLink("/training-visa-subclass-407")} onClick={toggleMenu}>
                      {t("trainingVisaSubclass407")}
                    </HoveredLink>
                    <HoveredLink href={getLocalizedLink("/skilled-work-regional-visa")} onClick={toggleMenu}>
                      {t("skilledWorkRegionalVisa")}
                    </HoveredLink>
                    <HoveredLink href={getLocalizedLink("/skilled-nominated-visa")} onClick={toggleMenu}>
                      {t("skilledNominatedVisa")}
                    </HoveredLink>
                    <HoveredLink href={getLocalizedLink("/skilled-independent-visa")} onClick={toggleMenu}>
                      {t("skilledIndependentVisa")}
                    </HoveredLink>
                    <HoveredLink href={getLocalizedLink("/temporary-graduate-visa-subclass-485")} onClick={toggleMenu}>
                      {t("temporaryGraduateVisaSubclass485")}
                    </HoveredLink>
                    <HoveredLink href={getLocalizedLink("/sponsored-jobs")} onClick={toggleMenu}>
                      {t("sponsoredJobs")}
                    </HoveredLink>
                  </div>
                </motion.div>
              )}
            </div>
            <div className="relative text-lg">
              <Link href={getLocalizedLink("/contact-us")} onClick={toggleMenu}>
                {t("contactUs")}
              </Link>
              <button
                onClick={() => toggleSubMenu("Contact Us")}
                className="ml-2 text-red-600"
              >
                {activeMenuItem === "Contact Us" ? "▲" : "▼"}
              </button>
              {activeMenuItem === "Contact Us" && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  exit={{ width: 0 }}
                  className="absolute left-full top-0 bg-white shadow-lg p-4 rounded-md overflow-y-auto max-h-64"
                >
                  <div className="flex flex-col space-y-4 text-sm pl-4">
                    <NavHoveredLink href={getLocalizedLink("/appointment")}>
                      {t("bookAnAppointment")}
                    </NavHoveredLink>
                    <NavHoveredLink href={getLocalizedLink("/booking")}>
                      {t("bookAZoom")}
                    </NavHoveredLink>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
