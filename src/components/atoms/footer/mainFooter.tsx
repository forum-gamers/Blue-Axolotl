export default function MainFooter() {
  return (
    <footer className="w-full h-[5%] bottom-0 relative">
      <h1
        color="blue-gray"
        className="text-center text-lg text-neutral-800 dark:text-neutral-300 font-sora"
      >
        &copy; {new Date().getFullYear()} Forum Gamers
      </h1>
    </footer>
  );
}
