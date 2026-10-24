import dayjs from "dayjs";
import Link from "next/link";
export default function ArtworkCard({ artwork, isFullSize }) {
  return (
    <article className={`card ${isFullSize ? 'fullSize' : ''}`}>
      <h3>{artwork.title || "Untitled"}</h3>
      <p>{artwork.artistDisplayName || "Unknown artist"}</p>
      <p className="imgWrapper">
        <img
          className={isFullSize ? 'fullSize' : ''}
          alt="artwork image"
          src={artwork.primaryImageSmall || "/placeholder.png"}
        />
      </p>
      <p>{artwork.objectDate && dayjs(artwork.objectDate).format("MM/DD/YYYY")}</p>
      {!isFullSize ? <Link href={`/artwork/${artwork.objectID}`}>View Details</Link> : null}
    </article>
  );
}
