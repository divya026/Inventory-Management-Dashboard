import FeatureCard from "../components/FeatureCards";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Product List Table",
      description:
        "Browse all inventory items in a table with sorting and pagination.",
      path: "/products",
    },
    {
      title: "Product Filtering",
      description: "Filter items by category or stock status easily.",
      path: "/filters",
    },
    {
      title: "Edit and Add Product",
      description: "Open the modal to create or edit product entries.",
      path: "/manage",
    },
    {
      title: "Confirmation Dialogs",
      description: "Delete single or multiple products with confirmation.",
      path: "/delete",
    },
    {
      title: "Bonus Features",
      description: "View low stock alerts and a chart of products by category.",
      path: "/bonus",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl font-bold mb-8 text-center text-800"
          style={{ color: "rgb(59 130 246" }}
        >
          Inventory Management Dashboard
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              onClick={() => navigate(feature.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
