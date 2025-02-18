import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/NavBar";

const commonLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <>
            <Navbar/>
            <main className="min-h-screen">
            {children}
            </main>
            <Footer/>
        </>
    );
};

export default commonLayout;