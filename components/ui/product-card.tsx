// @/components/ui/product-card.tsx

type ProductCardProps = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export const ProductCard = ({ id, name, image, price }: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-gray-500">${price}</p>
    </div>
  );
};
