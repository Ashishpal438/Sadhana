"use client";
import Image from "next/image";
import sadhanaLogo from "../../../assets/sadhana_home_logo.png";
import sangeetLogo from "../../../assets/sangeet_home_logo.png";
import satsangLogo from "../../../assets/satsang_home_logo.png";
import savadhyaLogo from "../../../assets/svadhyaya_home_logo.png";
import { useRouter } from "next/navigation";

const AppsContainer: React.FC = () => {
  const router = useRouter();
  return (
    <div className="h-fit bg-[#042843] flex flex-col justify-center items-center  pt-[28px] pb-[25px] md:py-[55px]">
      <div className="flex flex-col gap-[29px] md:gap-[20px] md:mb-[50px] mb-[31px]">
        <h1 className="text-[#FFE8BB] text-center font-[Open Sens] text-[37px] md:text-[45px] font-[300] leading-[43px] md:leading-[37px] tracking-[1.68px] md:tracking-[1.35px] capitalize px-[52px] md:px-0">
          Four Pre Installed Apps | Offerings
        </h1>
        <h5 className="text-base-white font-[Open Sens] text-[15px] md:text-[26px] font-[300] leading-[23px] tracking-[0.78px] text-center md:leading-[37px] md:tracking-[0.78px] px-[50px] md:px-0">
          Your gateway to secluded sadhana with apps for spiritual enrichment{" "}
        </h5>
      </div>

      <div className="grid grid-cols-2 gap-x-[105px] gap-y-[29.5px] md:flex flex-wrap md:gap-[95px] px-[100px]">
        <div
          className="flex flex-col gap-[11px] md:gap-[17px] items-center cursor-pointer"
          onClick={() => router.replace("/#sadhana")}
        >
          <Image
            src={sadhanaLogo}
            alt="Sadhana"
            className="md:w-[78px] md:h-[78px] w-[55px] h-[55px]"
          />
          <p className="text-base-white text-center font-[Open Sens] text-[15px] md:text-[27px] font-[600] leading-[37px] tracking-[-1.08] md:tracking-[-0.81px]">
            Sadhana
          </p>
        </div>
        <div
          className="flex flex-col gap-[11px] md:gap-[17px] items-center cursor-pointer"
          onClick={() => router.replace("/#satsang")}
        >
          <Image
            src={satsangLogo}
            alt="Sadhana"
            className="md:w-[78px] md:h-[78px] w-[55px] h-[55px]"
          />
          <p className="text-base-white text-center font-[Open Sens] text-[15px] md:text-[27px] font-[600] leading-[37px] tracking-[-1.08] md:tracking-[-0.81px]">
            Satsang
          </p>
        </div>
        <div
          className="flex flex-col gap-[11px] md:gap-[17px] items-center cursor-pointer"
          onClick={() => router.replace("/#svadhaya")}
        >
          <Image
            src={savadhyaLogo}
            alt="Sadhana"
            className="md:w-[78px] md:h-[78px] w-[55px] h-[55px]"
          />
          <p className="text-base-white text-center font-[Open Sens] text-[15px] md:text-[27px] font-[600] leading-[37px] tracking-[-1.08] md:tracking-[-0.81px]">
            Svadhaya
          </p>
        </div>
        <div
          className="flex flex-col gap-[11px] md:gap-[17px] items-center cursor-pointer"
          onClick={() => router.replace("/#sangeet")}
        >
          <Image
            src={sangeetLogo}
            alt="Sadhana"
            className="md:w-[78px] md:h-[78px] w-[55px] h-[55px]"
          />
          <p className="text-base-white text-center font-[Open Sens] text-[15px] md:text-[27px] font-[600] leading-[37px] tracking-[-1.08] md:tracking-[-0.81px]">
            Sangeet
          </p>
        </div>
      </div>
      <h4 className="text-base-white text-center text-[15px] md:text-[25px] font-[300] font-[Open Sens] leading-[30.5px] tracking-[0.75px] md:tracking-[0.75px] mt-[50px]">
        Experience A Proud Journey Within
      </h4>
    </div>
  );
};

export default AppsContainer;
