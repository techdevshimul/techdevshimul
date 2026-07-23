/* eslint-disable react/jsx-no-comment-textnodes */
export default function CodeShowcase() {
  return (
    <section className="mb-stack-lg py-stack-sm transition-all duration-1000 opacity-100 translate-y-0">
      <div className="glass-panel rounded-xl overflow-hidden shadow-2xl border-glass-border bg-surface-container-lowest">
        <div className="bg-surface-container-highest px-6 py-3 flex items-center justify-between border-b border-glass-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-tertiary"></div>
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
          </div>
          <span className="font-label-sm text-label-sm text-outline">
            server/controllers/resourceController.js
          </span>
          <div className="w-4"></div>
        </div>

        <div className="p-8 code-block">
          <pre className="text-sm leading-relaxed overflow-x-auto">
            <code className="text-on-surface-variant">
              <span className="text-primary">
                // Real-time resource sync with optimized aggregation
              </span>
              {"\n"}
              <span className="text-secondary">const</span> updateResourceStatus
              = <span className="text-secondary">async</span> (req, res) =&gt;{" "}
              {"{"}
              {"\n  "}
              <span className="text-secondary">const</span> session ={" "}
              <span className="text-secondary">await</span>{" "}
              mongoose.startSession();
              {"\n  "}
              <span className="text-outline">try</span> {"{"}
              {"\n    "}session.startTransaction();
              {"\n\n    "}
              <span className="text-primary font-bold px-1 rounded">
                // 1. Update primary status with optimistic locking
              </span>
              {"\n    "}
              <span className="text-secondary">const</span> updated ={" "}
              <span className="text-secondary">await</span>{" "}
              Resource.findOneAndUpdate(
              {"\n      "}
              {"{"} _id: req.params.id, version: req.body.version {"}"},
              {"\n      "}
              {"{"} <span className="text-tertiary-fixed-dim">$set</span>: {"{"}{" "}
              status: <span className="text-tertiary">&apos;active&apos;</span>{" "}
              {"}"}, <span className="text-tertiary-fixed-dim">$inc</span>:{" "}
              {"{"} version: 1 {"}"} {"}"},{"\n      "}
              {"{"} session, <span className="text-secondary">new: true</span>{" "}
              {"}"}
              {"\n    "});
              {"\n\n    "}
              <span className="text-primary font-bold px-1 rounded">
                // 2. Push update to Redis for Pub/Sub broadcast
              </span>
              {"\n    "}
              <span className="text-secondary">await</span> redisClient.publish(
              <span className="text-tertiary">
                &apos;resource_updates&apos;
              </span>
              , JSON.stringify(updated));
              {"\n\n    "}
              <span className="text-secondary">await</span>{" "}
              session.commitTransaction();
              {"\n    "}res.status(200).json(updated);
              {"\n  "}
              {"}"} <span className="text-outline">catch</span> (error) {"{"}
              {"\n    "}
              <span className="text-secondary">await</span>{" "}
              session.abortTransaction();
              {"\n    "}handleServerError(res, error);
              {"\n  "}
              {"}"} <span className="text-outline">finally</span> {"{"}
              {"\n    "}session.endSession();
              {"\n  "}
              {"}"}
              {"\n"}
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
