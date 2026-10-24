"use client";
import { useCallback, useEffect, useState } from "react";
import ArtworkList from "./ArtworkList";
import { getArtwork, searchArtworkIDs } from "@/lib/metApi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ArtworkBrowser() {
  const searchParams = useSearchParams();
  const keywordParam = searchParams.get("q");
  const router = useRouter();
  const pathname = usePathname();

  const [keyword, setKeyword] = useState(keywordParam || ""); // PROVIDED: state 1
  // TODO: add artworks state, loading state, and error state
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const setQueryParam = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(key, value);

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  const getData = useCallback(async () => {
    const ids = await searchArtworkIDs(keywordParam);
    const getDetailsArr = [];
    ids.forEach((id) => {
      getDetailsArr.push(getArtwork(id));
    });

    const result = await Promise.all(getDetailsArr);
    setArtworks(result);
  }, [keywordParam]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      await getData();
    } catch (e) {
      setErrorMessage(e.message);
    }
    setIsLoading(false);
  }, [getData, setErrorMessage, setIsLoading]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = useCallback(() => {
    setQueryParam("q", keyword);
  }, [setQueryParam]);

  return (
    <section className="panel">
      <div className="row">
        <input
          className="field"
          aria-label="Artwork keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className={`button ${isLoading ? "inactive" : ""}`}
          type="button"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      {isLoading && <p>loading ...</p>}
      {errorMessage && <p className="error">Error: {errorMessage}</p>}
      {artworks.length ? <ArtworkList artworks={artworks} /> : <p>No data</p>}
    </section>
  );
}
