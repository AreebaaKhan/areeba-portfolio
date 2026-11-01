export default function DriveVideo({ id, title }) {
  return (
    <div>
      <div className="aspect-video overflow-hidden rounded-2xl border border-line bg-surface">
        <iframe
          src={`https://drive.google.com/file/d/${id}/preview`}
          title={`${title} demo video`}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      <a
        href={`https://drive.google.com/file/d/${id}/view`}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
      >
        Open video in Google Drive
      </a>
    </div>
  );
}