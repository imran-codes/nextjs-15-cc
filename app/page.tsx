import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold">Welcome to Next Travel</h1>
      <p className="text-lg text-gray-600 mt-2">Find your dream destination!</p>
      <Link
        href="/destinations"
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Let’s Go →
      </Link>
    </main>
  );
}
