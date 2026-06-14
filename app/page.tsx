import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-button";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Click Me</Button>
      {/* <ModeToggle /> */}
    </div>
  );
}
