import React from "react";
import Image from "next/image";
import DoctorData from "../DoctorData";
import './doctor.css';

interface DentistProps {
    params: {
        doctor: string;
    };
}

const Dentist: React.FC<DentistProps> = ({ params }) => {
    const { doctor } = params;
    const doctorName = DoctorData[doctor].chineseName;
    const doctorTitle = DoctorData[doctor].title;

    const imagePath = `/images/doctor/${doctor}.png`;
    return (
        <section className="border-2 border-red-500">
            <div className="flex justify-center items-start gap-12 border-2 border-green-500 pt-16">
                <Image src={imagePath} alt={doctor} width={300} height={300} />
                <div>
                    <h2>
                        {doctorName} {doctorTitle}
                    </h2>
                    <div className="flex">
                        <h2 className="mr-2">專科:</h2>

                        <ol className="flex items-center justify-center text-xl">
                            {DoctorData[doctor].speciality.map(
                                (speciality, index) => (
                                    <li key={index} className="mr-4">
                                        {speciality}
                                    </li>
                                )
                            )}
                        </ol>
                    </div>
                    <div>
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
