export default function NotFound() {
    return (
      <main className="flex flex-col items-center justify-center h-screen text-center p-6">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-lg text-gray-600 mt-2">
          Oops! The destination you are looking for does not exist.
        </p>
        <a href="/" className="mt-4 text-blue-600 hover:underline">
          Go back home
        </a>
      </main>
    );
  }
  