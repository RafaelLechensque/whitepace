import { ReactNode } from "react"
import { LuArrowRight } from "react-icons/lu";
interface ButtonProps {
    children: ReactNode
    icon?: 'arrow-right' | 'none'
    bg: "primary" | "secondary" | "outline"
    // bg:"bg-secondary-y text-primary" | "bg-secondary-b text-white "
}

export default function Button({ children, icon, bg }: ButtonProps) {
    const background = {
        primary: "bg-secondary-y text-primary",
        secondary: "bg-secondary-b text-white",
        outline: "text-black border-2 border-secondary-y"
    }

    return (
        <button className={`${background[bg]} rounded-lg h-16 w-max px-10 py-4 flex items-center gap-3 z-10 opacity-100`}>
            {children}
            {icon == "arrow-right" ? <LuArrowRight /> : undefined}
        </button>
    )
}