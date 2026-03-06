import GameCard from "@/components/game-card/game.card";

export default function Home() {
  return (
    <div className=" bg-black h-screen w-screen p-10">
        <div className="w-full h-full flex flex-col items-center justify-center">
            <GameCard></GameCard>
        </div>
    </div>
  );
}
