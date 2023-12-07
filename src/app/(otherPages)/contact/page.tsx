
//Import Needed Components
import Footer from "@/components/Footer";
import Heading from "@/components/contactComponents/Heading";
import Form from "@/components/contactComponents/Form";

const page = () => {
    return ( 
        <main className="h-screen w-full overflow-y-auto">
           <div className="max-w-[60rem] mx-auto bg-white">
                <Heading />
                <Form />
                <Footer />
            </div> 
        </main>
     );
}
 
export default page;