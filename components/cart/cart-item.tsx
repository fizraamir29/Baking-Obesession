import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CartItemProps {
  name: string
  price: number
  quantity: number
  image: string
  onUpdateQuantity: (quantity: number) => void
  onRemove: () => void
}

export function CartItem({ name, price, quantity, image, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 py-4">
      <div className="h-24 w-24 rounded-xl overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={96}
          height={96}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium text-[#1A1D26]">{name}</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6E7489]" onClick={onRemove}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-[#FE8160] font-semibold mt-1">${price}</p>
        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => onUpdateQuantity(quantity - 1)}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => onUpdateQuantity(quantity + 1)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

