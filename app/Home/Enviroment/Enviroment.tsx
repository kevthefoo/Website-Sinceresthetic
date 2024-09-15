import Image from "next/image";
import treatment_area_4 from "@/public/images/clinic/treatment_area_4.png";
import "./enviroment.css";
import Reveal from "@/app/Components/Reveal/Reveal";

const Enviroment: React.FC = () => {
  return (
    <section
      className="enviroment__section relative flex flex-col items-start justify-center max-rg_tablet:items-center"
      id="envoroment"
    >
      <Image
        src={treatment_area_4}
        fill={true}
        style={{ objectFit: "cover", objectPosition: "center" }}
        placeholder="blur"
        alt="澄臻美學牙醫診所 | 看診區"
        className="image__div z-[-100]"
      />

      <Reveal yTranslate={0} xTranslate={-100}>
        <div className="dialog flex w-[520px] flex-col items-center justify-start rounded-[50px] px-8 py-4 max-rg_tablet:w-[400px] max-rg_mobile:w-[300px]">
          <h1>極致舒適的醫療體驗</h1>
          <p className="text-wrap">
            在澄臻美學牙醫診所，我們提供最舒適的醫療環境，結合先進設備與溫馨設計，讓您在輕鬆愉快的氛圍中接受專業治療。我們的服務團隊貼心關注每一位患者，確保治療過程順暢且舒適，為您帶來無與倫比的醫療體驗。{" "}
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default Enviroment;
