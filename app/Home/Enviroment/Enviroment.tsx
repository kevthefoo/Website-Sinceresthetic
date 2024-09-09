import Image from "next/image";
import sincere_5 from "@/public/images/clinic/sincere_5.png";
import "./enviroment.css";

const Enviroment: React.FC = () => {
    return (
        <section className="relative">
            <Image
                src={sincere_5}
                fill={true}
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                alt="sincere_5"
                className="image__div  z-[-100]"
            />
            <h1 className="aaa">極致舒適的醫療體驗</h1>
        </section>
    );
};

export default Enviroment;
