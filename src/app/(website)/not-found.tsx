import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Sorry, the page you're looking for doesn't exist. Let's get you back to browsing AI coding tools.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700">
          Browse All Tools
        </Link>
        <Link href="/blog" className="px-6 py-3 rounded-xl border font-medium hover:bg-muted">
          Read Our Blog
        </Link>
      </div>
    </div>
  );
}
