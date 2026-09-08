export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-16"><div className="mb-5 flex items-center gap-3"><span className="h-px w-5 bg-neutral-400" /><h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">{title}</h2></div>{children}</section>
}
