import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { SOLUTIONS } from "@/lib/constants";

export function SolutionsOverview() {
  return (
    <section className="relative min-h-screen bg-black py-32">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="relative grid gap-8 lg:grid-cols-3">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative col-span-1 lg:col-span-2"
          >
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-8">
              <div className="flex h-full flex-col justify-between">
                <div className="rounded-full bg-white/10 p-4 w-fit">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-medium text-white">Master Retail Agent</h3>
                  <p className="mt-2 text-lg text-gray-300">
                    Comprehensive AI solution for retail operations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Cards */}
          <div className="col-span-1 space-y-8">
            {SOLUTIONS.slice(0, 2).map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-6"
              >
                <div className="rounded-full bg-white/10 p-3 w-fit">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-white">{solution.title}</h3>
                <p className="mt-2 text-gray-300">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}