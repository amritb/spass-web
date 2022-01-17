export default function PageSegment({title, children}) {
  return (
    <div className="my-4">

      {title ? 
        <h2 className="text-center text-md-left mb-4 gradient-underline">{title}</h2>
      : null }

      <div>
        {children}
      </div>
    </div>
  );
}