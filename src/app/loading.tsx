export default function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-line border-t-brand-400" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
