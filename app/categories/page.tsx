import { SearchBar } from "@/components/ui/search-bar"
import { CategoryCard } from "@/components/ui/category-card"
import { ResponsiveLayout } from "@/components/layout/responsive-layout"

const categories = [
  { id: 1, name: "Cakes", image: "https://i.pinimg.com/736x/c2/f6/3b/c2f63b735793f7632e937af1d58cb240.jpg" },
    { id: 2, name: "Cupcakes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVEr5UKVhHIgIZNetHnzNjogzZvZvvJTKNA&s" },
    { id: 3, name: "Pastries", image: "https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2020/02/Eggless-Pineapple-pastry-recipe-01-1.jpg" },
    { id: 4, name: "Cookies", image: "https://www.recipetineats.com/tachyon/2019/12/Christmas-Cookies-Sugar-Cookies_7.jpg?resize=500%2C375" },
]

export default function Categories() {
  return (
    <ResponsiveLayout>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1A1D26]">Categories</h1>

        <SearchBar />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </ResponsiveLayout>
  )
}

