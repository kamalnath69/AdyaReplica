import { motion } from "framer-motion";
import { Button } from "@/components/button";

interface InfoSectionProps {
  reverse?: boolean;
}

export function LastInfoSection({ reverse = false }: InfoSectionProps) {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className={`grid gap-12 items-center lg:grid-cols-2 ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`order-2 ${reverse ? 'lg:order-1' : 'lg:order-1'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Discover a cutting-edge
              <span className="text-blue-400"> orchestration platform </span>
              that empowers businesses
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Build and deploy customized AI Agents and enterprise apps in minutes.
              Our platform allows you to connect to any data source, create custom workflows,
              and scale seamlessly across your organization.
            </p>
            <Button variant="gradient-outline" size="lg">
              Check it out
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`order-1 ${reverse ? 'lg:order-2' : 'lg:order-2'}`}
          >
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-r from-blue-600/20 to-indigo-600/20 flex items-center justify-center">
                <div className="text-5xl font-bold text-white/50">Vanij</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}