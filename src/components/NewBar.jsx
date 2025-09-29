import { Link } from "react-router-dom";

const Newbar = () => {
  return (
    <nav className="bg-sky-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">Real Estate</Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/list-property">List Your Home</Link>
      </div>
    </nav>
  );
};

export default Newbar;
