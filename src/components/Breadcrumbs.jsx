import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <nav aria-label="breadcrumb" className="mb-2">
      <ol className="list-reset flex">
        <li>
          <Link to="/Malerier" className="text-blue-500 hover:text-blue-700">
            &#47; Tilbage til Malerier
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
