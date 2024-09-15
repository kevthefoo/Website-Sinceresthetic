import React from "react";
import Image from "next/image";
import DoctorData from "../DoctorData";
import "./doctor.css";

interface DentistProps {
  params: {
    doctor: string;
  };
}

const Dentist: React.FC<DentistProps> = ({ params }) => {
  const { doctor } = params;
  const doctorName = DoctorData[doctor].chineseName;
  const doctorTitle = DoctorData[doctor].title;
  const doctorEducation = DoctorData[doctor].education;
  const doctorExperience = DoctorData[doctor].experience;

  const imagePath = `/images/dentist/${doctor}.png`;
  return (
    <section className="flex flex-col justify-center bg-gradient-to-b from-white to-gray-100 max-lg_tablet:pb-12 max-lg_tablet:pt-24">
      <h1>
        {doctorName} {doctorTitle}
      </h1>
      <div className="flex items-end justify-evenly max-lg_tablet:flex-col max-lg_tablet:items-center max-lg_tablet:justify-center max-lg_tablet:gap-12">
        <div className="relative aspect-[3/4] h-[330px] overflow-hidden rounded-xl border-4 border-slate-400 shadow-lg max-lg_tablet:aspect-square max-lg_tablet:h-auto max-lg_tablet:w-[200px] max-lg_tablet:rounded-full">
          <Image
            src={imagePath}
            alt={`澄臻美學牙醫診所 |  ${doctor}`}
            fill={true}
            priority={true}
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>

        <div className="">
          <div className="mb-4 flex">
            <p className="mr-2">專科:</p>

            <ol className="flex items-center justify-center text-xl">
              {DoctorData[doctor].speciality.map((speciality, index) => (
                <li key={index} className="mr-2">
                  <p>{speciality}/</p>
                </li>
              ))}
            </ol>
          </div>

          <p className="mb-4">學歷: {doctorEducation}</p>

          <p className="mb-4">經歷: {doctorExperience}</p>

          <div className="">
            <p>看診時間</p>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>時間</th>
                  <th>一</th>
                  <th>二</th>
                  <th>三</th>
                  <th>四</th>
                  <th>五</th>
                  <th>六</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09:00-12:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>15:00-18:00</td>
                  <td></td>
                  <td>✓</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>18:00-21:00</td>
                  <td></td>
                  <td>✓</td>
                  <td></td>
                  <td></td>
                  <td>✓</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dentist;
