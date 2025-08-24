import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    
         <main className="p-10 space-y-4">
      <div>
        <Button>Subscribe</Button>
      </div>
      <div className="bg-red-500 text-white p-4">Tailwind Works</div>
    </main>
  );
}
