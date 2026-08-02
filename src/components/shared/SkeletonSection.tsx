export function SkeletonSection() {
  return (
    <section className="py-16 bg-background animate-pulse">
      <div className="mx-auto max-w-7xl px-5 space-y-8">
        {/* Heading Skeleton */}
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="h-8 bg-muted/60 rounded-full w-2/3 mx-auto" />
          <div className="h-4 bg-muted/40 rounded-full w-5/6 mx-auto" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid gap-6 md:grid-cols-3 pt-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-3xl border border-border/50 bg-muted/20 p-6 space-y-4">
              <div className="h-48 bg-muted/50 rounded-2xl w-full" />
              <div className="h-6 bg-muted/60 rounded-md w-3/4" />
              <div className="h-4 bg-muted/40 rounded-md w-full" />
              <div className="h-4 bg-muted/40 rounded-md w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
