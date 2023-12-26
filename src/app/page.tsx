import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <main className="">
      <h1>Hola mundo</h1>
      <h1 className={`${titleFont.className} font-bold text-3xl`}>Hola Mundo</h1>
    </main>
  );
}