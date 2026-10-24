import ArtworkCard from "@/components/ArtworkCard";
import GoBackButton from "@/components/GoBackButton";
import { getArtwork } from "@/lib/metApi";

export default async function ArtworkDetailPage({ 
    params
 }) {
    const { id } = await params;
    let artwork = null;
    let errorMessage = '';

    try {
        artwork = await getArtwork(id);
    } catch (e) {
        errorMessage = e.message;
    }

  return (
    <>
        <section className="panel">
            <GoBackButton />
            {errorMessage && <p className="error">Error: {errorMessage}</p>}
            {artwork && <ArtworkCard isFullSize artwork={artwork} />}
        </section>
    </>
  );
}
