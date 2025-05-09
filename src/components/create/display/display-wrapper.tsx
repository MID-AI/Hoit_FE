function DisplayWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full max-h-820 w-full max-w-820 items-center justify-center gap-44">
      {children}
    </div>
  );
}

export default DisplayWrapper;
