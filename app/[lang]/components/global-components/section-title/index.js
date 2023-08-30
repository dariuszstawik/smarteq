export default function SectionTitle({ children }) {
  return (
    <div className="w-full flex justify-center items-center">
      <h2 className="inline-block text-4xl font-bold text-center uppercase border-b-2 border-smartOrange mx-auto mb-12">
        {children}
      </h2>
    </div>
  );
}
