import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  id: number
  name: string
  image: string
}

export function CategoryCard({ id, name, image }: CategoryCardProps) {
  return (
    <Link href={`/categories/${name.toLowerCase()}`} className="block group">
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="w-full h-32 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-60">
          <h3 className="text-white font-semibold text-lg md:text-xl">{name}</h3>
        </div>
      </div>
    </Link>
  )
}

