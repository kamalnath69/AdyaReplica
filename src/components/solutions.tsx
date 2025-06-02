import { motion } from "framer-motion";
import { SOLUTIONS } from "@/lib/constants";
import { cardHover } from "@/lib/animations";

export function Solutions() {
  return (
    <section className="bg-gradient-to-b from-black to-blue-950/90 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            AI Agents for Every Business Need
          </h2>
          <p className="mt-4 text-gray-300">
            Pre-built solutions ready to deploy or customize
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={cardHover}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={`relative rounded-xl border ${
                solution.highlighted
                  ? "border-green-500/30 bg-gradient-to-br from-blue-900/30 to-green-900/20"
                  : "border-blue-500/20 bg-blue-950/10"
              } p-6 backdrop-blur-sm`}
            >
              {solution.highlighted && (
                <div className="absolute -top-2 -right-2 rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-black">
                  Featured
                </div>
              )}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  solution.highlighted
                    ? "bg-green-900/30 text-green-400"
                    : "bg-blue-900/30 text-blue-400"
                }`}
              >
                <solution.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">
                {solution.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}