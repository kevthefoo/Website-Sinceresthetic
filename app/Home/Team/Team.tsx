import TeamCarousel from "./TeamCarousel";

const Team: React.FC = () => {
    return (
        <section
            className="relative flex flex-col justify-start items-center pb-8 bg-gradient-to-b from-white to-gray-100"
            id="team"
        >
            <h1 className="mb-8">最專業的醫療團隊</h1>
            <TeamCarousel />
        </section>
    );
};

export default Team;
