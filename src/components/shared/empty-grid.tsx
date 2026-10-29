import Link from "next/link";

export default function EmptyGrid() {
  return (
    <div className="my-16 max-w-md mx-auto text-center">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-xl font-semibold mb-2">No tools found</h3>
      <p className="text-muted-foreground mb-6">
        We couldn't find any AI coding tools matching your search. Try a different keyword, or browse all our curated tools below.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
      >
        Browse All 240+ Tools
      </Link>
    </div>
  );
}
