// The starter intentionally supplies just ONE simple API helper.
export async function getArtwork(id) {
  const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
  );
  if (!response.ok) throw new Error("Could not load artwork");
  return response.json();
}
// TODO: Write searchArtworkIDs(keyword) using v1.1/search, limit=6.

export async function searchArtworkIDs(search) {
  const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1.1/search?q=${search}&limit=6`,
  );
  if (!response.ok) throw new Error("Could not load artwork ids");

  const result = await response.json();
  return result?.objectIDs || [];
}