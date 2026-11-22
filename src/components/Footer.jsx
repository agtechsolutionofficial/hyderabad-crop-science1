import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Supporting growers with crop-care solutions, responsible practices and a commitment to agricultural progress.</p>
          <a className="footer-link" href="mailto:hyderabadcropscience@gmail.com">Start a conversation <ArrowUpRight size={16}/></a>
        </div>
        <div className="footer-col"><h4>Explore</h4><Link to="/about">About us</Link><Link to="/products">Products</Link><Link to="/gallery">Gallery</Link><Link to="/contact">Contact</Link></div>
        <div className="footer-col"><h4>Our commitment</h4><span>Serving Indian farmers since 2014</span><span>Quality-focused agro products</span><span>Timely delivery and customer care</span></div>
        <div className="footer-col contact-col"><h4>Get in touch</h4><span><MapPin size={16}/> 452/2, Shiv Shakti Apartment, Satya Nagar, Udhna, Surat, Gujarat 394210</span><a href="tel:8258808080"><Phone size={16}/> +91 82588 08080</a><a href="mailto:hyderabadcropscience@gmail.com"><Mail size={16}/> hyderabadcropscience@gmail.com</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Hyderabad Crop Science Pvt. Ltd. All rights reserved.</span><span>Growing a better tomorrow.</span></div>
    </footer>
  );
}
