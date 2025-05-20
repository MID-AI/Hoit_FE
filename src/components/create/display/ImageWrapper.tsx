function ImageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full max-h-410 w-full max-w-410">{children}</div>
  );
}

export default ImageWrapper;
