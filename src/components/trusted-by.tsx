import { motion } from "framer-motion";
import { TRUSTED_COMPANIES } from "@/lib/constants";

export function TrustedBy() {
  return (
    <section className="bg-gradient-to-b from-black to-blue-950/80 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-medium text-gray-400"
          >
            Trusted by industry leaders
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {TRUSTED_COMPANIES.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-500"
              >
                {company}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}