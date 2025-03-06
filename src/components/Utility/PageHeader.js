export default function PageHeader({
  title,
  subtitle = "Savali Bahuddyeshiy Sanstha",
}) {
  return (
    <div className="bg-secondary text-white py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-2">{subtitle}</p>
      </div>
    </div>
  );
}
