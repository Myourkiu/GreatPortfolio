import Background from "./components/Background";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[750px] md:h-[850px] gap-20 overflow-x-hidden">
        <Background/>
      </div>
    </main>
  );
}
