import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { galleryImages } from "../data/site";

const content = {
  "About Us": ["Dedicated to Indian farmers since 2014", "Hyderabad Crop Science Private Limited is an ISO 9001:2015 certified company. Since 2014, we have served Indian farmers with pesticides, fungicides, herbicides, weedicides, insecticides, plant growth regulators, fertilizers, organic manure and other agro products.", "Our aim is to improve farming productivity and sustainability while respecting environmental balance.", "https://hyderabadcropscience.com/wp-content/uploads/2022/03/about-1.jpg"],
  "Products": ["Solutions for agriculture needs", "Our product range includes fungicides, insecticides, herbicides, weedicides, plant growth regulators, fertilizers and organic manure. For product-specific information, please contact our team and refer to the approved product label.", "Quality products, timely delivery and customer satisfaction are central to our approach.", "https://hyderabadcropscience.com/wp-content/uploads/2015/06/106903874product_group_6.jpg"],
  "Gallery": ["A closer look at the fields we serve", "Explore agriculture and crop imagery from the Hyderabad Crop Science website.", "Supporting Indian farmers since 2014.", "https://hyderabadcropscience.com/wp-content/uploads/2022/03/main-slide-cornfield-1000x500.png"],
  "Contact Us": ["We would be glad to hear from you", "Reach out for product information, business enquiries, dealer discussions or general questions. Our team will direct your enquiry to the appropriate contact.", "Hyderabad Crop Science Private Limited · Surat, Gujarat", "https://hyderabadcropscience.com/wp-content/uploads/2022/05/agric-1000x500.jpg"],
  "Page not found": ["This page could not be found", "The page may have moved or the address may be incorrect.", "Return to the homepage to continue exploring.", "https://hyderabadcropscience.com/wp-content/uploads/2022/03/main-slide-cornfield-1000x500.png"]
};

export default function InnerPage({ page }) {
  const [headline, body, note, image] = content[page] || content["Page not found"];
  return (
    <>
      <section className="inner-hero" style={{backgroundImage: `linear-gradient(90deg,rgba(13,39,30,.88),rgba(13,39,30,.3)),url(${image})`}}>
        <div className="container inner-hero-content"><span className="eyebrow eyebrow-gold">HYDERABAD CROP SCIENCE</span><h1>{page}</h1><p>{headline}</p><div className="breadcrumb"><Link to="/">Home</Link><span>/</span>{page}</div></div>
      </section>
      <section className="inner-content section-pad"><div className="container inner-content-grid"><div><span className="eyebrow">OUR APPROACH</span><h2>{headline}</h2><p className="lead">{body}</p><p>{note}</p><Link to="/contact" className="button button-dark">Talk to our team <ArrowUpRight size={17}/></Link></div><div className="inner-image"><img src={image} alt={page}/><div className="inner-image-note"><CheckCircle2/><span>Committed to quality<br/>and grower satisfaction</span></div></div></div></section>
      {page === "Gallery" && <section className="gallery-section section-pad"><div className="container"><div className="gallery-grid">{galleryImages.map((item) => <a className="gallery-item" href={item.src} target="_blank" rel="noreferrer" key={item.src}><img src={item.src} alt={item.alt} loading="lazy"/></a>)}</div></div></section>}
      {page === "Contact Us" && <section className="contact-details"><div className="container contact-detail-grid"><div><span className="eyebrow">CALL US</span><h3>82588 08080</h3><a href="tel:8258808080">Call our customer care team</a></div><div><span className="eyebrow">EMAIL US</span><h3>Let's connect</h3><a href="mailto:hyderabadcropscience@gmail.com">hyderabadcropscience@gmail.com</a></div><div><span className="eyebrow">VISIT US</span><h3>Surat, Gujarat</h3><p>452/2, Shiv Shakti Apartment, Satya Nagar, Udhna, Surat, 394210, Gujarat</p></div></div></section>}
    </>
  );
}
