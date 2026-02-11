export default function PageContent({ children }) {
  return (
    <main className="flex-grow pt-16 bg-gray-50">
      {children}
    </main>
  );
}