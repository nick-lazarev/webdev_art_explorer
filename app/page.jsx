import Link from "next/link";
export default function Home() {
  return (
    <section className="panel">
      <h1>Discover Art from Around the World</h1>
      <p className="muted">
        Explore artworks from The Metropolitan Museum of Art.
      </p>
      <Link className="button" href="/artwork">
        Explore Artworks
      </Link>
      <div className="homeImageWrapper">
        <img alt="home image" src="/home.png"/>
      </div>
    </section>
  );
}
