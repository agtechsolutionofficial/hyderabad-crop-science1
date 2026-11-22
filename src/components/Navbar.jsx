import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { navigation } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Crop science for a stronger agricultural future</span>
          <div><a href="mailto:hyderabadcropscience@gmail.com">hyderabadcropscience@gmail.com</a><i /> <a href="tel:8258808080">+91 82588 08080</a></div>
        </div>
      </div>
      <div className="nav-wrap">
        <div className="container nav-inner">
          <Logo />
          <nav className={open ? "nav-links open" : "nav-links"}>
            {navigation.map(item => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                {item.label}
              </NavLink>
            ))}
            <Link className="nav-mobile-contact" to="/contact" onClick={() => setOpen(false)}>Get in touch <ArrowUpRight size={16}/></Link>
          </nav>
          <Link className="nav-cta" to="/contact">Let's talk <ArrowUpRight size={16}/></Link>
          <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
    </header>
  );
}
