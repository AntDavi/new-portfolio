import { motion } from "framer-motion"

const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"],
    }
}

const reverseIndex = (index: number) => {
    const totalSteps = 8;
    return totalSteps - index - 1;
}

const Stair = () => {
    return (
        <>
            {/* 
            Renderiza 6 divs que representam os degraus da escada.
            As divs possuem a mesma animação stairAnimation, porém com um delay diferente que é calculado dinamicamente.
            */}

            {[...Array(8)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1
                        }}
                        className="h-full w-full bg-white relative"
                    >

                    </motion.div>
                )
            })}
        </>
    )
}

export default Stair