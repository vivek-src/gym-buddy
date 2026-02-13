import { HeartPulse, Activity } from "lucide-react";
export function TrainSmartSection() {
  return (
    <section className="container max-w-5xl mx-auto text-center py-20 px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-sm p-10">
        {/* Subtle glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />

        <div className="relative z-10">
          {/* Icon and Title */}
          <div className="flex flex-col items-center mb-6">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/20 mb-3">
              <HeartPulse className="w-7 h-7 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-semibold text-foreground">
              Train Smart,{" "}
              <span className="text-emerald-400">Respect Your Limits</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every body is different — your recovery, strength, and endurance
            will evolve with consistency. Follow these splits based on your
            current physical capacity, not someone else’s. Progress takes time —
            build gradually, train safely, and listen to your body.
          </p>

          {/* Subtle motivator */}
          <div className="mt-8 flex justify-center items-center gap-2 text-sm text-muted-foreground">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Consistency beats intensity — every single time.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
