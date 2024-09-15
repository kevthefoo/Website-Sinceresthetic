interface Dentist {
  chineseName: string;
  englishName: string;
  title: string;
  education: string;
  experience: string;
  speciality: string[];
}

interface DentistDataType {
  [key: string]: Dentist;
}

const DentistData: DentistDataType = {
  johnny: {
    chineseName: "林昌言",
    englishName: "Johnny",
    title: "院長",
    education: "國立台灣大學牙醫學系畢業",
    experience: "台北市立聯合醫院牙科住院醫師",
    speciality: ["牙科手術", "植牙", "口腔美容"],
  },
  mary: {
    chineseName: "林森林",
    englishName: "Mary",
    title: "醫師",
    education: "國立台灣大學牙醫學系畢業",
    experience: "台北市立聯合醫院牙科住院醫師",
    speciality: ["牙科手術", "植牙", "口腔美容"],
  },
  tom: {
    chineseName: "林波波",
    englishName: "Tom",
    title: "醫師",
    education: "國立台灣大學牙醫學系畢業",
    experience: "台北市立聯合醫院牙科住院醫師",
    speciality: ["牙科手術", "植牙", "口腔美容"],
  },
  jerry: {
    chineseName: "江逆鱗",
    englishName: "Jerry",
    title: "醫師",
    education: "國立台灣大學牙醫學系畢業",
    experience: "台北市立聯合醫院牙科住院醫師",
    speciality: ["牙科手術", "植牙", "口腔美容"],
  },
  linda: {
    chineseName: "林強尼",
    englishName: "Linda",
    title: "醫師",
    education: "國立台灣大學牙醫學系畢業",
    experience: "台北市立聯合醫院牙科住院醫師",
    speciality: ["牙科手術", "植牙", "口腔美容"],
  },
  david: {
    chineseName: "林安海",
    englishName: "David",
    title: "醫師",
    education: "國立台灣大學牙醫學系畢業",
    experience: "台北市立聯合醫院牙科住院醫師",
    speciality: ["牙科手術", "植牙", "口腔美容"],
  },
  jennifer: {
    chineseName: "林波奇",
    englishName: "Jennifer",
    title: "醫師",
    education: "國立台灣大學牙醫學系畢業",
    experience: "台北市立聯合醫院牙科住院醫師",
    speciality: ["牙科手術", "植牙", "口腔美容"],
  },
};

export default DentistData;
