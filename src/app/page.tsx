import { getGames } from "@/services/igdb.service";
import GameGrid from "@/components/game-grid/game.grid";

export default async function HomePage() {
    const games = await getGames();

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold text-white mb-6">Juegos</h1>
            <GameGrid games={games} />
        </main>
    );
}
