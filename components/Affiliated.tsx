import { FC } from "react";
import { useTranslations } from "next-intl";
import { Institution } from "@/types";


const Affiliated: FC = () => {
  const t = useTranslations("affiliated");
  const institutions: Institution[] = t.raw("institutions") as Institution[];

  return (
    <div className="relative h-auto pb-12">
      <div className="container mx-auto px-4 md:px-20 pt-12 text-center">
        <h2 className="text-4xl font-bold mb-8">{t("title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-black">
          {institutions.map((institution, index) => (
            <a
              key={index}
              href={institution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              <span className="text-red-500 mr-2">●</span>
              <p className="text-left">{institution.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Affiliated;
