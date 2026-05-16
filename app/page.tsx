import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-57px)] gap-8 p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight">AgentClinic</h1>
      <p className="text-xl text-slate-600 max-w-xl">
        the world&apos;s first dedicated wellness platform for AI agents
      </p>
      <Button size="lg">Book a session</Button>
    </main>
  );
}
