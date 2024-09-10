
interface Doctor {
    chineseName: string;
    englishName: string;
    title: string;
    education: string;
    experience: string;
    speciality: string[];
}

interface DoctorDataType {
    [key: string]: Doctor;
}

const DoctorData: DoctorDataType = {
    johnny: {
        chineseName: "林昌言",
        englishName: "Johnny",
        title: "院長",
        education: "國立台灣大學牙醫學系畢業",
        experience: "台北市立聯合醫院牙科住院醫師",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
    mary: {
        chineseName: "林昌言",
        englishName: "Mary",
        title: "院長",
        education: "國立台灣大學牙醫學系畢業",
        experience: "台北市立聯合醫院牙科住院醫師",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
    tom: {
        chineseName: "林昌言",
        englishName: "Tom",
        title: "院長",
        education: "國立台灣大學牙醫學系畢業",
        experience: "台北市立聯合醫院牙科住院醫師",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
    jerry: {
        chineseName: "林昌言",
        englishName: "Jerry",
        title: "院長",
        education: "國立台灣大學牙醫學系畢業",
        experience: "台北市立聯合醫院牙科住院醫師",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
    linda: {
        chineseName: "林昌言",
        englishName: "Linda",
        title: "院長",
        education: "國立台灣大學牙醫學系畢業",
        experience: "台北市立聯合醫院牙科住院醫師",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
    david: {
        chineseName: "林昌言",
        englishName: "David",
        title: "院長",
        education: "國立台灣大學牙醫學系畢業",
        experience: "台北市立聯合醫院牙科住院醫師",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
    jennifer: {
        chineseName: "林昌言",
        englishName: "Jennifer",
        title: "院長",
        education: "國立台灣大學牙醫學系畢業",
        experience: "台北市立聯合醫院牙科住院醫師",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
};

export default DoctorData;

