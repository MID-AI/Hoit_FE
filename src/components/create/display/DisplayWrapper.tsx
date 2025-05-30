function DisplayWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative grid h-full max-h-700 w-full max-w-700 grid-cols-2 grid-rows-2 items-center justify-center">
      {children}
    </div>
  );
}

export default DisplayWrapper;
