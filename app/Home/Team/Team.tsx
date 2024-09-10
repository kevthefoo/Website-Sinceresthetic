import TeamCarousel from "./TeamCarousel";

const Team: React.FC = () => {
    return (
        <section
            className="relative flex flex-col justify-start items-center pb-8"
            id="team"
        >
            <h1 className="aaa">最專業的醫療團隊</h1>
            <TeamCarousel />
        </section>
    );
};

export default Team;
