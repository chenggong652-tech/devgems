"use client";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : url;
  const text = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}&via=devgems`;
  const redditShareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${text}`;

  return (
    <div className="flex items-center gap-4 my-8 pt-6 border-t border-border">
      <span className="text-sm text-muted-foreground">Share this:</span>
      <a
        href={twitterShareUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1DA1F2] text-white text-sm font-medium hover:bg-[#1a91da] transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.094 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.215 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.862 2.395c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21-.003-.42-.008-.63a9.936 9.936 0 002.42-2.548z"/>
        </svg>
        Share on X
      </a>
      <a
        href={redditShareUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4500] text-white text-sm font-medium hover:bg-[#e03d00] transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.005.19c0 2.692-3.135 4.872-6.997 4.872-3.862 0-6.997-2.18-6.997-4.872 0-.063.002-.125.005-.188a1.756 1.756 0 01-.915-1.544c0-.968.786-1.754 1.754-1.754.468 0 .898.196 1.207.49 1.195-.855 2.85-1.418 4.675-1.487l.8-3.77-.552.117c1.033.132 1.82.918 1.82 1.853 0 .591-.315 1.102-.784 1.39a.593.593 0 01-.747-.092.594.594 0 01.083-.82c.315-.264.48-.61.48-.986 0-.805-.667-1.458-1.498-1.458-.831 0-1.498.653-1.498 1.458 0 .376.165.722.48.986a.594.594 0 01.083.82.593.593 0 01-.747.092 1.555 1.555 0 01-.784-1.39c0-.935.787-1.72 1.82-1.853l-.552-.117-1.074-5.033a.596.596 0 01.635-.717.596.596 0 01.55.44l.636 3.006 2.113.445a1.25 1.25 0 011.195-.898z"/>
        </svg>
        Share on Reddit
      </a>
    </div>
  );
}
