import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          TravelExplorer
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link
            href="/destinations"
            className="text-gray-700 hover:text-blue-500"
          >
            Destinations
          </Link>
          <Link href="/reviews" className="text-gray-700 hover:text-blue-500">
            Reviews
          </Link>
        </nav>
      </div>
    </header>
  );
}
