"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
    children: ReactNode;
    delayTime?: number;
    xTranslate?: number;
    yTranslate?: number;
}

const Reveal: React.FC<RevealProps> = ({
    children,
    delayTime = 0.25,
    xTranslate = 0,
    yTranslate = 150,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        console.log(isInView);
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);

    return (
        <motion.div
            ref={ref}
            className="h-full overflow-hidden border-2 rounded-3xl"
            variants={{
                hidden: { opacity: 0, x: xTranslate, y: yTranslate },
                visible: { opacity: 1, x: 0, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: delayTime }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
