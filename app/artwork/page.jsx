import ArtworkBrowser from "@/components/ArtworkBrowser";
import { Suspense } from "react";
export default function Artworks() {
  return (
    <>
      <h1>Browse Artworks</h1>
      <p className="muted">
        Search below. This is an intentionally incomplete page.
      </p>
      <Suspense fallback={<p>Loading ...</p>}>
        <ArtworkBrowser />
      </Suspense>
    </>
  );
}
