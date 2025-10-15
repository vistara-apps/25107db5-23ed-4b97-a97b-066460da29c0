export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full border-4 border-accent border-t-transparent animate-spin" />
        <p className="text-muted">Loading PixelPerfect Studios...</p>
      </div>
    </div>
  );
}
