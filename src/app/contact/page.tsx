import Offices from "@/components/Offices";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="w-full bg-blue-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-2 opacity-90">We are here to assist you worldwide</p>
      </section>

      <Offices />
    </main>
  );
}
