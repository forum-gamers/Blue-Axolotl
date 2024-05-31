import SearchSvg from "@/components/static/svg/search";

export default function BlogNoData() {
  return (
    <section className="flex mt-6 text-center h-96 dark:border-gray-700">
      <header className="flex flex-col w-full max-w-sm pt-4 mt-4 mx-auto">
        <figure className="p-3 mx-auto text-blue-500 bg-blue-100 rounded-full">
          <SearchSvg />
        </figure>
        <h2 className="mt-3 text-lg text-t-color dark:text-d-t-color">
          No data found
        </h2>
      </header>
    </section>
  );
}
