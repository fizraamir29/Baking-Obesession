import { SearchBar } from "@/components/ui/search-bar";
import { ProductCard} from "@/components/ui/product-card"; // Default import for ProductCard
import { ResponsiveLayout } from "@/components/layout/responsive-layout";

const products = [
  {
    id: 1,
    name: "Cakes",
    image: "https://i.pinimg.com/736x/c2/f6/3b/c2f63b735793f7632e937af1d58cb240.jpg",
    price: 20,
  },
  {
    id: 2,
    name: "Cupcakes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVEr5UKVhHIgIZNetHnzNjogzZvZvvJTKNA&s",
    price: 15,
  },
  {
    id: 3,
    name: "Pastries",
    image: "https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2020/02/Eggless-Pineapple-pastry-recipe-01-1.jpg",
    price: 10,
  },
  {
    id: 4,
    name: "Cookies",
    image: "https://www.recipetineats.com/tachyon/2019/12/Christmas-Cookies-Sugar-Cookies_7.jpg?resize=500%2C375",
    price: 8,
  },
];

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return (
    <ResponsiveLayout>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1A1D26]">{categoryName}</h1>

        <SearchBar />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </ResponsiveLayout>
  );
}
