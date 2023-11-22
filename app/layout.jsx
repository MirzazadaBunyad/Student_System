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
        <div className="flex">
          <div className="flex max-md:flex-col max-md:items-center">
            <Sidebar studentList={studentData.data} />
            <main className="p-5 ">{children}</main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
