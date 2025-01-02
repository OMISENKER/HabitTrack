export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <header className="w-full text-center py-4 bg-blue-600 text-white absolute top-0">
        <h1 className="text-4xl font-bold">HabitTrack</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-black absolute top-1/2 transform -translate-y-1/2">
        <h2 className="text-3xl font-semibold text-center sm:text-4xl">
          Build Good Habits, Break Bad Ones
        </h2>
        <p className="text-center sm:text-left max-w-lg">
          HabitTrack is a habit tracking app that helps you build good habits
          and break bad ones. Track your progress, set goals, and stay
          motivated.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          Get Started
        </button>
      </main>
      <footer className="w-full text-center py-4 bg-gray-800 text-white absolute bottom-0">
        <p>&copy; 2025 HabitTrack. All rights reserved.</p>
      </footer>
    </div>
  );
}
