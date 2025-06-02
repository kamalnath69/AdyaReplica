import { motion } from "framer-motion";
import { Button } from "@/components/button";

export function CTA() {
  return (
    <section className="bg-gradient-to-b from-blue-950/90 to-black py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-8 md:p-12">
          {/* Background Elements */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
          
          <div className="relative text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to transform your business with AI?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Get started with Adya.ai today and unlock the full potential of AI for your enterprise.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="gradient" size="xl" className="w-full sm:w-auto">
                Schedule Demo
              </Button>
              <Button variant="gradient-outline" size="xl" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}