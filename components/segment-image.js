import { Image } from "react-bootstrap";

export default function SegmentImage({src}) {
  return (
    <div className="text-center my-3">
        <Image src={src} fluid rounded />
    </div>
  );
}