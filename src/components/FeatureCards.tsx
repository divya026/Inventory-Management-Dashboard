import React from "react";

interface FeatureCardsProps {
  title: string;
  description: string;
  onClick: () => void;
}

const FeatureCards: React.FC<FeatureCardsProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-blue-500 text-white rounded-2xl shadow-md hover:shadow-xl p-6 transition cursor-pointer border border-blue-600 hover:border-blue-400"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default FeatureCards;
