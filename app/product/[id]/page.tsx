import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResponsiveLayout } from "@/components/layout/responsive-layout";
import Image from "next/image";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const products = [
    {
      id: "1",
      name: "Chocolate Cake",
      price: 35,
      description: "A rich and moist chocolate cake, perfect for any occasion.",
      allergens: "Gluten, egg, dairy",
      image: "https://static.vecteezy.com/system/resources/previews/023/291/734/non_2x/the-chocolate-cake-and-strawberry-topping-with-ai-generated-free-photo.jpg",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: "2",
      name: "Strawberry Cheesecake",
      price: 40,
      description: "Creamy cheesecake topped with fresh strawberries and glaze.",
      allergens: "Gluten, egg, dairy",
      image: "https://www.shutterstock.com/image-photo/no-bake-cheesecake-fresh-strawberries-260nw-2173347025.jpg",
      rating: 4.7,
      reviews: 95,
    },
    {
      id: "3",
      name: "Vanilla Cupcakes",
      price: 20,
      description: "Soft vanilla cupcakes with a luscious buttercream frosting.",
      allergens: "Gluten, egg, dairy",
      image: "https://www.allrecipes.com/thmb/GsldgnTeewAv5eEqoxQ7E1iAKO8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/157877-vanilla-cupcakes-ddmfs-2X1-0399-1b671dfd598548b1b0339076d062a758.jpg",
      rating: 4.4,
      reviews: 80,
    },
    {
      id: "4",
      name: "Red Velvet Cake",
      price: 38,
      description: "A classic red velvet cake with cream cheese frosting.",
      allergens: "Gluten, egg, dairy",
      image: "https://t4.ftcdn.net/jpg/03/33/11/05/360_F_333110548_FlBGumb5xN7XLvo31S5n9Kq5PHa20Yp5.jpg",
      rating: 4.6,
      reviews: 110,
    },
    {
      id: "5",
      name: "Lemon Tart",
      price: 25,
      description: "Tangy and refreshing lemon tart with a buttery crust.",
      allergens: "Gluten, egg, dairy",
      image: "https://media.istockphoto.com/id/541284238/photo/apricot-pie.jpg?s=612x612&w=0&k=20&c=z--aGs1mAOnWKy1GKlq5uvwa2Pa-VvfbdKcy47jwj3c=",
      rating: 4.3,
      reviews: 65,
    },
    // Additional products as needed...
  ];

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <ResponsiveLayout>
        <div className="text-center py-10">
          <h1 className="text-2xl font-bold">Product Not Found</h1>
          <p className="text-[#6E7489]">The product you are looking for does not exist.</p>
        </div>
      </ResponsiveLayout>
    );
  }

  const sizes = [
    { size: "16 cm", active: false },
    { size: "20 cm", active: true },
    { size: "22 cm", active: false },
    { size: "24 cm", active: false },
  ];

  return (
    <ResponsiveLayout>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={800}
            height={800}
            className="w-full aspect-square object-cover rounded-2xl"
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1A1D26]">{product.name}</h1>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-[#FED060] text-[#FED060]" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-[#6E7489]">({product.reviews} reviews)</span>
            </div>
          </div>

          <p className="text-2xl font-bold text-[#FE8160]">${product.price}</p>

          <p className="text-[#6E7489]">{product.description}</p>

          <div className="text-[#6E7489]">
            <strong>Allergen:</strong> {product.allergens}
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-[#1A1D26]">Size</h3>
            <div className="flex gap-3">
              {sizes.map(({ size, active }) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-full border ${
                    active
                      ? "bg-[#FE724C] text-white border-[#FE724C]"
                      : "border-[#CBCFDD] text-[#6E7489]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-[#FE724C] text-white px-6 py-3">Add to Cart</Button>
            <Heart className="h-6 w-6 text-[#6E7489]" />
            <ShoppingCart className="h-6 w-6 text-[#6E7489]" />
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
}
