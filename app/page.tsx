import { SearchBar } from "@/components/ui/search-bar"
import {ProductCard }from "@/components/ui/product-card";
import { CategoryCard } from "@/components/ui/category-card"
import { ResponsiveLayout } from "@/components/layout/responsive-layout"
import Image from "next/image"
import Link from "next/link"

const products = [
  { id: 1, name: "Chocolate Cake", price: 35, image: "https://static.vecteezy.com/system/resources/previews/023/291/734/non_2x/the-chocolate-cake-and-strawberry-topping-with-ai-generated-free-photo.jpg" },
  { id: 2, name: "Strawberry Cheesecake", price: 40, image: "https://www.shutterstock.com/image-photo/no-bake-cheesecake-fresh-strawberries-260nw-2173347025.jpg" },
  { id: 3, name: "Vanilla Cupcakes", price: 20, image: "https://www.allrecipes.com/thmb/GsldgnTeewAv5eEqoxQ7E1iAKO8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/157877-vanilla-cupcakes-ddmfs-2X1-0399-1b671dfd598548b1b0339076d062a758.jpg" },
  { id: 4, name: "Red Velvet Cake", price: 38, image: "https://t4.ftcdn.net/jpg/03/33/11/05/360_F_333110548_FlBGumb5xN7XLvo31S5n9Kq5PHa20Yp5.jpg" },
  { id: 5, name: "Lemon Tart", price: 25, image: "https://media.istockphoto.com/id/541284238/photo/apricot-pie.jpg?s=612x612&w=0&k=20&c=z--aGs1mAOnWKy1GKlq5uvwa2Pa-VvfbdKcy47jwj3c=" },
  { id: 6, name: "Blueberry Muffins", price: 18, image: "https://img.freepik.com/premium-photo/blueberry-cake-hd-k-wallpaper-stock-graphic-image_974629-395914.jpg" },
  { id: 7, name: "Carrot Cake", price: 32, image: "https://images2.alphacoders.com/134/thumb-1920-1343843.png" },
  { id: 8, name: "Apple Pie", price: 28, image: "https://wildwildwhisk.com/wp-content/uploads/2020/12/Apple-Pie-Cake-2.jpg" },
  { id: 9, name: "Tiramisu", price: 36, image: "https://i.ytimg.com/vi/CzXUNtarRWI/maxresdefault.jpg" },
  { id: 10, name: "Black Forest Cake", price: 42, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0_tbrJhFqRBvlE7U2ICxmKMfmAS80QxP_naYKScnbLyK_zrqKmX7dRX5KbrHRUV0zhJE7OcXxrbn-phcibPiCD5rG5_S2dBiJrBfKgB1SxheGEdBFd_VfFOqFR9BPQqnp_ZIeWgtpX8L6/s640/DSC07710.JPG" },
  { id: 11, name: "Chocolate Mousse", price: 28, image: "https://www.sugarhero.com/wp-content/uploads/2015/08/chocolate-raspberry-mousse-cake-2.jpg" },
  { id: 12, name: "Key Lime Pie", price: 30, image: "https://i0.wp.com/lauramintz.com/wp-content/uploads/2021/05/IMG_1059.jpg?resize=1200%2C800&ssl=1" },
  { id: 13, name: "New York Cheesecake", price: 45, image: "https://img.taste.com.au/JykbG0mr/w643-h428-cfill-q90/taste/2016/11/new-york-cheesecake-40742-1.jpeg" },
  { id: 14, name: "Funfetti Cake", price: 33, image: "https://marisabakes.com/wp-content/uploads/2023/06/mini-funfetti-cake1594.jpg" },
  { id: 15, name: "German Chocolate Cake", price: 39, image: "https://www.littlesweetbaker.com/wp-content/uploads/2017/11/german-chocolate-cake-1-1-700x700.jpg" },
  { id: 16, name: "Boston Cream Pie", price: 31, image: "https://livforcake.com/wp-content/uploads/2018/05/boston-cream-pie-1-2.jpg" },
  // { id: 17, name: "Peanut Butter Cookies", price: 22, image: "/placeholder.svg" },
  // { id: 18, name: "Oatmeal Raisin Cookies", price: 19, image: "/placeholder.svg" },
  // { id: 19, name: "Chocolate Chip Cookies", price: 25, image: "/placeholder.svg" },
  // { id: 20, name: "Macarons", price: 40, image: "/placeholder.svg" },
]

const categories = [
  { id: 1, name: "Cakes", image: "https://i.pinimg.com/736x/c2/f6/3b/c2f63b735793f7632e937af1d58cb240.jpg" },
  { id: 2, name: "Cupcakes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVEr5UKVhHIgIZNetHnzNjogzZvZvvJTKNA&s" },
  { id: 3, name: "Pastries", image: "https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2020/02/Eggless-Pineapple-pastry-recipe-01-1.jpg" },
  { id: 4, name: "Cookies", image: "https://www.recipetineats.com/tachyon/2019/12/Christmas-Cookies-Sugar-Cookies_7.jpg?resize=500%2C375" },
]

export default function Home() {
  return (
    <ResponsiveLayout>
      <div className="space-y-8">
        <div className="">
          {/* <h1 className="text-2xl md:text-3xl font-bold text-[#1A1D26]">Hi there!</h1>
          <p className="text-[#6E7489]">What are you looking for today?</p> */}
        </div>

        <SearchBar />

        <div className="bg-[#FED2C7] rounded-2xl p-4 md:p-6">
          <div className="flex items-center gap-4">
            <Image src="https://www.giftacrossindia.com/media/catalog/product/new/GAICAK0146b.jpg" alt="Strawberry Cake" width={80} height={80} className="rounded-full" />
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#1A1D26]">Cake Tart Strawberries</h2>
              <p className="text-[#FE724C]">up to 50% OFF!</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold text-[#1A1D26]">Categories</h2>
            <Link href="/categories" className="text-[#FE724C]">
              See All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold text-[#1A1D26]">Popular Items</h2>
            <Link href="/products" className="text-[#FE724C]">
              See All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  )
}

