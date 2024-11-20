import { motion } from "motion/react"

const borderStyles = "border-2 border-almost-black rounded-lg";
const filledStyles = "text-almost-white bg-black rounded-lg font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-almost-black border 2 border-almost-black";

export default function Button({
    children = "",
    hasBorder = false,
    isFilled = false
}) {
    return (
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`text-medium-white px-5 py-2 ${hasBorder && borderStyles} ${isFilled && filledStyles}`}>{children}</motion.button>
    )
}