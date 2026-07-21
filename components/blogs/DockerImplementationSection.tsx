import CopyCodeButton from "./CopyCodeButton";

export default function DockerImplementationSection() {
  return (
    <section className="scroll-mt" id="implementation">
      <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
        Dockerizing the Node.js Runtime
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-6">
        Efficiency starts with your{" "}
        <code className="bg-surface-variant px-1.5 py-0.5 rounded text-secondary">
          Dockerfile
        </code>
        . Multi-stage builds are non-negotiable for production environments to
        keep images lean and secure.
      </p>

      {/* Code Snippet */}
      <div className="rounded-xl overflow-hidden border border-glass-border bg-[#0d1117] shadow-xl">
        <div className="flex justify-between items-center px-6 py-3 bg-surface-container border-b border-glass-border">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-error"></span>
            <span className="w-3 h-3 rounded-full bg-tertiary"></span>
            <span className="w-3 h-3 rounded-full bg-secondary"></span>
            <span className="ml-4 font-label-sm text-label-sm text-outline">
              Dockerfile
            </span>
          </div>
          <CopyCodeButton />
        </div>

        <pre className="p-6 overflow-x-auto">
          <code className="text-sm font-mono leading-relaxed text-blue-200">
            {"\n"}
            <span className="text-pink-400"># Stage 1: Build</span>
            {"\n"}
            <span className="text-blue-400">FROM</span> node:20-alpine{" "}
            <span className="text-blue-400">AS</span> builder
            {"\n"}
            <span className="text-blue-400">WORKDIR</span> /app
            {"\n"}
            <span className="text-blue-400">COPY</span> package*.json ./
            {"\n"}
            <span className="text-blue-400">RUN</span> npm ci
            {"\n"}
            <span className="text-blue-400">COPY</span> . .{"\n"}
            <span className="text-blue-400">RUN</span> npm run build
            {"\n\n"}
            <span className="text-pink-400"># Stage 2: Production</span>
            {"\n"}
            <span className="text-blue-400">FROM</span> node:20-alpine
            {"\n"}
            <span className="text-blue-400">WORKDIR</span> /app
            {"\n"}
            <span className="text-blue-400">COPY</span> --from=builder /app/dist
            ./dist
            {"\n"}
            <span className="text-blue-400">COPY</span> --from=builder
            /app/package*.json ./
            {"\n"}
            <span className="text-blue-400">RUN</span> npm ci --only=production
            {"\n\n"}
            <span className="text-blue-400">EXPOSE</span> 3000
            {"\n"}
            <span className="text-blue-400">CMD</span> [&quot;node&quot;,
            &quot;dist/main.js&quot;]
            {"\n"}
          </code>
        </pre>
      </div>
    </section>
  );
}
