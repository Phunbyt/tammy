import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="cta">
      <Link to="/mine" className="btn">
        Home
      </Link>
    </section>
  );
};

export default CTA;
