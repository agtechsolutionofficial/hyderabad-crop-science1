import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Leaf, FlaskConical, ShieldCheck, Sprout, Microscope, Factory, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { products } from "../data/site";

const fade = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: .65, ease: "easeOut" } } };

function Reveal({ children, className = "" }) {
  return <motion.div className={className} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }}>{children}</motion.div>;
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .14 } } }}>
            <motion.div variants={fade} className="hero-kicker"><span /> GROWING A BETTER TOMORROW</motion.div>
            <motion.h1 variants={fade}>Science that protects.<br/><em>Innovation that grows.</em></motion.h1>
            <motion.p variants={fade}>Quality agro products and dependable service, supporting Indian farmers since 2014.</motion.p>
            <motion.div variants={fade} className="hero-actions">
              <Link to="/products" className="button button-gold">Explore our products <ArrowUpRight size={17}/></Link>
              <Link to="/about" className="text-link text-link-light">Discover our story <ArrowUpRight size={17}/></Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero-bottom container"><span>01 / 04</span><span>Crop protection · Plant nutrition · Innovation</span><a href="#intro" aria-label="Scroll to next section"><ArrowDown size={18}/></a></div>
        <div className="hero-vertical">HYDERABAD CROP SCIENCE PRIVATE LIMITED</div>
      </section>

      <section className="intro-section section-pad" id="intro">
        <div className="container intro-grid">
          <Reveal className="intro-image-wrap">
            <img src="https://hyderabadcropscience.com/wp-content/uploads/2022/03/about-1.jpg" alt="Agricultural field" />
            <div className="image-note"><span className="note-mark">H</span><span>Committed to<br/><strong>Indian agriculture</strong></span></div>
          </Reveal>
          <Reveal className="intro-copy">
            <span className="eyebrow">WHO WE ARE</span>
            <h2>Rooted in agriculture.<br/><em>Driven by science.</em></h2>
            <p className="lead">A trusted partner in the journey towards healthier crops and more productive farms.</p>
            <p>Hyderabad Crop Science Private Limited is an ISO 9001:2015 certified company, dedicated to serving the Indian farming community since 2014. Our portfolio includes pesticides, fungicides, herbicides, insecticides, plant growth regulators, fertilizers, organic manure and other agricultural products.</p>
            <p>We aim to support growers with solutions that improve farm productivity while respecting the balance of the environment.</p>
            <Link to="/about" className="text-link">More about our company <ArrowUpRight size={17}/></Link>
          </Reveal>
        </div>
      </section>

      <section className="values-band">
        <div className="container values-grid">
          <div className="value-intro"><span className="eyebrow eyebrow-gold">OUR COMMITMENT</span><h2>Built on trust.<br/>Focused on progress.</h2></div>
          <div className="value-item"><ShieldCheck/><h3>Quality first</h3><p>A consistent focus on quality and customer satisfaction.</p></div>
          <div className="value-item"><Leaf/><h3>Responsible growth</h3><p>Considering sustainability in the way we work.</p></div>
          <div className="value-item"><Sprout/><h3>Grower focused</h3><p>Working to understand the evolving needs of growers.</p></div>
        </div>
      </section>

      <section className="products-section section-pad">
        <div className="container">
          <div className="section-topline"><span className="eyebrow">OUR PORTFOLIO</span><Link to="/products" className="text-link">View all products <ArrowUpRight size={17}/></Link></div>
          <SectionHeading title={<>Solutions for every<br/><em>stage of growth.</em></>} text="Pesticides, fungicides, herbicides, weedicides, insecticides, plant growth regulators, fertilizers and organic manure."/>
          <div className="product-grid">
            {products.map((p, i) => <Reveal key={p.title} className="product-card">
              <Link to="/products" className="product-image"><img src={p.image} alt={p.title}/><span className="product-number">{p.number}</span><span className="product-arrow"><ArrowUpRight size={20}/></span></Link>
              <div className="product-info"><h3>{p.title}</h3><p>{p.text}</p><Link to="/products" className="small-link">Explore category <ArrowUpRight size={14}/></Link></div>
            </Reveal>)}
          </div>
        </div>
      </section>

      <section className="innovation-section">
        <div className="innovation-image"><img src="https://hyderabadcropscience.com/wp-content/uploads/2022/05/SRI-hybrid-rice-field.jpg" alt="Rice field"/></div>
        <div className="innovation-panel">
          <span className="eyebrow eyebrow-gold">FARMER FOCUSED</span>
          <h2>Effective and sustainable<br/><em>ways of farming.</em></h2>
          <p>Hyderabad Crop Science is determined to help growers improve productivity and sustainability without impacting environmental balance.</p>
          <Link to="/gallery" className="button button-outline-light">Explore our gallery <ArrowUpRight size={17}/></Link>
          <div className="innovation-stamp"><FlaskConical size={27}/><span>Research-led<br/>thinking</span></div>
        </div>
      </section>

      <section className="capabilities-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="OUR CAPABILITIES" title={<>Care in every detail.<br/><em>Confidence in every step.</em></>} text="A considered approach to product quality, operations and service."/>
          <div className="capability-grid">
            <Reveal className="capability-card"><div className="cap-icon"><Factory/></div><span>01 / SERVICE</span><h3>Skilled team</h3><p>Experienced professionals working to support farmers and customers.</p><Link to="/about" className="round-link"><ArrowUpRight/></Link></Reveal>
            <Reveal className="capability-card"><div className="cap-icon"><Microscope/></div><span>02 / DELIVERY</span><h3>On-time delivery</h3><p>A dependable approach to serving customers and distribution partners.</p><Link to="/contact" className="round-link"><ArrowUpRight/></Link></Reveal>
            <Reveal className="capability-card"><div className="cap-icon"><Globe2/></div><span>03 / COMMITMENT</span><h3>Ethical business</h3><p>Quality products, competitive pricing and a focus on customer satisfaction.</p><Link to="/about" className="round-link"><ArrowUpRight/></Link></Reveal>
          </div>
        </div>
      </section>

      <section className="field-cta">
        <div className="field-cta-bg"/>
        <div className="container field-cta-content">
          <span className="eyebrow eyebrow-gold">LET'S GROW TOGETHER</span>
          <h2>Every harvest begins<br/>with a better possibility.</h2>
          <p>Connect with Hyderabad Crop Science to learn more about our company and product portfolio.</p>
          <Link to="/contact" className="button button-gold">Connect with us <ArrowUpRight size={17}/></Link>
        </div>
      </section>
    </>
  );
}
