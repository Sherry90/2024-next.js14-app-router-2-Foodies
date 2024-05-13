import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
        <div>
          <Link href={"/meals"}>meals</Link>
        </div>
        <div>
          <Link href={"/meals/share"}>meals share</Link>
        </div>
        <div>
          <Link href={"/community"}>community</Link>
        </div>
      </h1>
    </main>
  );
}
