export default function PageSegment({title, children}) {
  return (
    <>
      <h2 className="text-center text-md-left mb-4">{title}</h2>

      <div>
        {children}
      </div>
    </>
  );
}