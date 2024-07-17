import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2 className="text-slate-700 dark:text-slate-300 text-xl">
        Main Examples:
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <Link href="/csr">App router + client components</Link>
          🤩
        </li>
        <li>
          <Link href="/ssr">App router + server component</Link>
          🤩
        </li>
      </ul>
    </main>
  );
}
