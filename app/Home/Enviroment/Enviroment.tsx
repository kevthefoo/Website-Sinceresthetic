import Image from "next/image";
import sincere_5 from "@/public/images/clinic/sincere_5.png";
import "./enviroment.css";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Link from "next/link";

const Enviroment: React.FC = () => {
    return (
        <section
            className="enviroment__section relative flex flex-col justify-center items-start"
            id="envoroment"
        >
            <Image
                src={sincere_5}
                fill={true}
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                alt="sincere_5"
                className="image__div  z-[-100]"
            />
            <div className="dialog w-2/5 rounded-[50px] flex flex-col justify-start items-center px-8 py-4">
                <h1>極致舒適的醫療體驗</h1>
                <p className="text-wrap">
                    在澄臻美學牙醫診所，我們提供最舒適的醫療環境，結合先進設備與溫馨設計，讓您在輕鬆愉快的氛圍中接受專業治療。我們的服務團隊貼心關注每一位患者，確保治療過程順暢且舒適，為您帶來無與倫比的醫療體驗。{" "}
                </p>
            </div>
            <div className="absolute bottom-2 left-[50%] translate-x-[-50%] float-animation z-10">
                <Link href="#team" title="介紹">
                    <i>
                        <FaArrowAltCircleDown className=" text-[2.5rem] text-blue-500 bg-white rounded-full border-2 border-white " />
                    </i>
                </Link>
            </div>
        </section>
    );
};

export default Enviroment;
