import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="brand" aria-label="Hyderabad Crop Science home">
      <svg className="brand-mark" viewBox="0 0 58 48" role="img" aria-label="HCS logo">
        <path d="M10 5v35M27 5v35M10 22h17" stroke="#c83e3a" strokeWidth="6" fill="none" strokeLinecap="square"/>
        <path d="M4 30c14-16 29-17 50-10" stroke="#2f754d" strokeWidth="5" fill="none" strokeLinecap="round"/>
      </svg>
      <span className="brand-copy">
        <strong>HYDERABAD</strong>
        <small>CROP SCIENCE PVT. LTD.</small>
      </span>
    </Link>
  );
}
