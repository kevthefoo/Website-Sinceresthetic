// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import smiling_girl from "@/public/images/appointment/appointment_image_0.png";
// import Reveal from "@/app/Components/Reveal/Reveal";

// const Introduction: React.FC = () => {
//     return (
//         <section
//             className="relative flex flex-col justify-start items-center bg-gradient-to-b from-white to-gray-100"
//             id="introduction"
//         >
//             <h1>微笑的藝術</h1>
//             <Image
//                 src={smiling_girl}
//                 alt="smiling_art"
//                 height={200}
//                 className="rounded-full border-2 border-slate-300 mb-8"
//             />

//             <Reveal>
//                 <div className="dialog flex flex-col w-fit items-center justify-center rounded-3xl py-12 px-8">
//                     <h2 className="mb-4 ">動人笑容，源於齒間散發的自信</h2>

//                     <p className="w-[500px]  mb-8">
//                         微笑的魅力如同一幅藝術傑作，笑容設計更被視為藝術創作的絕佳體現
//                         我們致力於追求完美的美學設計工藝，為你打造一個迷人且獨一無二的笑容。
//                     </p>
//                     <Link
//                         href="https://page.line.me/920oaogn?openQrModal=true"
//                         target="_blank"
//                         className="border-2 border-[var(--main-theme)] rounded-[50px] px-4 py-2 hover:bg-slate-300"
//                     >
//                         立即預約
//                     </Link>
//                 </div>
//             </Reveal>
//         </section>
//     );
// };

// export default Introduction;
import React from "react";
import Image from "next/image";
import Link from "next/link";
import smiling_girl from "@/public/images/appointment/appointment_image_0.png";
import Reveal from "@/app/Components/Reveal/Reveal";

const Introduction: React.FC = () => {
    return (
        <section
            className="relative flex flex-col justify-start items-center bg-gradient-to-b from-white to-gray-100 pb-8"
            id="introduction"
        >
            <h1 className="text-gray-800 mb-8">微笑的藝術</h1>
            <Image
                src={smiling_girl}
                alt="smiling_art"
                height={200}
                className="rounded-full border-4 border-slate-300 mb-8 shadow-lg"
            />

            <Reveal>
                <div className="dialog flex flex-col w-full max-w-lg items-center justify-center bg-white rounded-3xl py-8 px-8 shadow-xl">
                    <h2 className="text-2xl font-medium	 text-gray-700 mb-4 text-center">
                        動人笑容，源於齒間散發的自信
                    </h2>

                    <p className="text-gray-600 text-center mb-4">
                        微笑的魅力如同一幅藝術傑作，笑容設計更被視為藝術創作的絕佳體現。
                        我們致力於追求完美的美學設計工藝，為你打造一個迷人且獨一無二的笑容。
                    </p>
                    <Link
                        href="https://page.line.me/920oaogn?openQrModal=true"
                        target="_blank"
                        className="border-2 border-[var(--main-theme)] rounded-[50px] px-6 py-3 hover:bg-[var(--main-theme)] hover:text-white transition-colors duration-300"
                    >
                        立即預約
                    </Link>
                </div>
            </Reveal>
        </section>
    );
};

export default Introduction;
