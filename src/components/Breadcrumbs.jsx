import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="list-reset flex">
        <li>
          <Link to="/gallery" className="text-blue-500 hover:text-blue-700">&#47; Back to Gallery</Link>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
