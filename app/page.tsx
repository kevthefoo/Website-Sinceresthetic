import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Footer/Footer";
import Home from "@/app/Home/Home";

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </>
    );
}
