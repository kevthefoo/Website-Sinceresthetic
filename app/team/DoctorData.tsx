
interface Doctor {
    chineseName: string;
    englishName: string;
    title: string;
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
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
    jason: {
        chineseName: "林昌言",
        englishName: "Jason",
        title: "牙醫",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
    jerry: {
        chineseName: "林昌言",
        englishName: "Jerry",
        title: "牙醫",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
    jenny: {
        chineseName: "林昌言",
        englishName: "Jenny",
        title: "牙醫",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
    jessica: {
        chineseName: "林昌言",
        englishName: "Jessica",
        title: "牙醫",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
    jacky: {
        chineseName: "林昌言",
        englishName: "Jason",
        title: "牙醫",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
    jerome: {
        chineseName: "林昌言",
        englishName: "Jason",
        title: "牙醫",
        speciality: ["牙科手術", "植牙", "口腔美容"],
    },
};

export default DoctorData;

