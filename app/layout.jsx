import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function getAllStudents() {
  const res = await fetch("http://localhost:3000/api/students");

  if (!res.ok) {
    throw new Error("Failed to fetch students");
  }

  return res.json();
}

export default async function RootLayout({ children }) {
  const studentData = await getAllStudents();

  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main className="flex w-[90%] mx-auto my-[20px]">
          <div className="flex w-full">
            <Sidebar studentList={studentData.data} />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
