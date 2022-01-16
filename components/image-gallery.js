import { Image } from "react-bootstrap";

export default function ImageGallery({imagesUrls}) {
  return (
    <div className="img-gallery">
      {imagesUrls.map(src => <div className="text-center py-3" key={src}><Image src={src} fluid rounded /></div>)}
    </div>
  );
}