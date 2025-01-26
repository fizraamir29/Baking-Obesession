import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6E7489]" />
      <Input
        type="text"
        placeholder="Search cake, cookies, anything..."
        className="pl-10 bg-[#EFEFEF] border-none h-12 rounded-xl text-[#6E7489]"
      />
    </div>
  )
}

