
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-gray-300 space-x-3 flex items-center justify-center w-full h-full">
      <Button variant={"outline"}>

<Link href="/client" >
Client Page
</Link>
      </Button>
      <Button variant={"outline"}>

<Link href="/seller">
Seller Page
</Link>
      </Button>
    </div>
  );
}
