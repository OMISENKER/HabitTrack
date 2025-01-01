export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-5xl">
          HabitTrack
        </h1>
        <p className="text-center sm:text-left">
          A habit tracking app that helps you build good habits and break bad
          ones.
        </p>
      </main>
    </div>
  );
}
