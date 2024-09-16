interface Service {
  chineseName: string;
  englishName: string;
  description: string;
}

interface ServicesDataType {
  [key: string]: Service;
}

const ServicesData: ServicesDataType = {
  teeth_whitening: {
    chineseName: "牙齒美白",
    englishName: "Teeth Whitening",
    description:
      "牙齒美白是一種讓牙齒變得亮白的美容療程，適合因飲食、老化或生活習慣導致牙齒變黃的人。專業美白由牙醫操作，效果快速而持久；家用美白產品則適合日常維護，效果較緩慢。美白過程簡單，風險低，但牙齒敏感者應諮詢牙醫。保持良好的口腔衛生習慣和避免染色食物，可延長美白效果，讓笑容更自信光彩。",
  },
  dental_implant: {
    chineseName: "全植牙",
    englishName: "Dental Implants",
    description:
      "全植牙體是一種取代缺牙的治療方法，透過手術將人工牙根植入牙槽骨，再安裝人工牙冠，恢復缺牙區的功能和美觀。植體手術後需等待骨組織與植體結合，過程需時數月。植體具有高度的成功率和耐用性，能提供穩固的咬合力，並避免鄰牙移位。植體維護簡單，需定期檢查和清潔，可維持長期穩定的效果。",
  },
  ceramic_crown: {
    chineseName: "全瓷冠",
    englishName: "Ceramic Crown",
    description:
      "全瓷冠是一種修復牙齒的方法，適用於牙齒破損、蛀牙或缺损的情況。全瓷冠具有天然美觀的外觀，與真牙相似，且不含金屬，適合前牙和顯示部位的修復。全瓷冠的適應性強，能提供良好的密合度和保護性，並恢復牙齒的功能和美觀。全瓷冠的製作過程需時數周，但效果持久耐用，可維持多年。",
  },
  family_dentist: {
    chineseName: "家庭牙醫",
    englishName: "Family Dentist",
    description:
      "家庭牙醫是提供全家人口腔健康護理的牙醫診所，包括兒童、青少年、成人和老年人。家庭牙醫提供預防、治療和美容的牙科服務，並提供牙齒保健指導和教育。家庭牙醫熟悉全家人的牙齒狀況和需求，能提供個性化的治療方案和建議。建立家庭牙醫的長期合作關係，有助於維護全家人的口腔健康，並享受美好的笑容。",
  },
  root_canal_treatment: {
    chineseName: "根管治療",
    englishName: "Root Canal Treatment",
    description:
      "根管治療是一種治療牙齒神經和根部感染的方法，適用於牙齒蛀牙、牙髓炎或根尖周炎的情況。根管治療通過清除感染組織、清潔根管、填充根管，恢復牙齒的功能和健康。根管治療能保留患牙，避免拔牙和牙齒移位，並減輕疼痛和感染。根管治療後需定期檢查和保養，可維持長期的效果和舒適感。",
  },
  children_dentist: {
    chineseName: "兒童牙醫",
    englishName: "Children Dentist",
    description:
      "兒童牙醫是專門照顧兒童牙齒健康的牙醫，提供預防、治療和教育的服務。兒童牙醫熟悉兒童口腔發育和特點，能提供專業的治療和建議。兒童牙醫診所環境友善、設施安全，讓兒童感到舒適和放心。建立兒童牙醫的長期合作關係，有助於培養良好的口腔衛生習慣，並享受健康的笑容。",
  },
};

export default ServicesData;
