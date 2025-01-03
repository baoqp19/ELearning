
import { connectToDatabase } from "@/lib/mongodb";

export default async function Home() {
  const connect = connectToDatabase();
  console.log(connect);

  return (
    <main>
      HomePage
    </main>
  );
}
