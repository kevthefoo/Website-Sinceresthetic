import React from "react";
const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
    return (
        <footer className="border-t-2 h-20 flex flex-col justify-end items-center px-32 py-2">
            <div>Copyright© {currentYear} 澄臻美學牙醫診所</div>
        </footer>
    );
};

export default Footer;
