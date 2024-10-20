
import Link from "next/link";
import ContactForm from "./Contact-Form";
import "./styles.scss";

const Footer = () => {

  
 return (
    <footer className="w-full bg-muted">
        <ContactForm />
        <div className="shadow-md navbar mt-8">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800 font-mono">.ps</div>
        <p className="copyright-message">© 2024 Pawan Sharma. All rights reserved</p>
        </div>
      </div>
      </footer>
 )
}




export default Footer;