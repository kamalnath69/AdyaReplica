import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PlatformOverview() {
  return (
    <section className="relative min-h-screen bg-black py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-16 flex justify-center">
            <div className="rounded-full bg-white/10 p-4">
              <Eye className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Discover a cutting-edge orchestration platform{" "}
            <span className="text-blue-400">that</span> empowers businesses to{" "}
            <span className="text-blue-400">build and</span> deploy customized AI{" "}
            <span className="text-blue-400">Agents and</span> enterprise apps in{" "}
            <span className="text-blue-400">minutes</span>.
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Button variant="outline" size="lg" className="rounded-lg text-lg">
              Check it out
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}