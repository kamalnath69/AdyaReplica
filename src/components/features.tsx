import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";

export function Features() {
  return (
    <section className="bg-gradient-to-b from-blue-950/80 to-black py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center md:w-56"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-900/30 text-blue-400">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-blue-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}