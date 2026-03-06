import { getGames } from "@/services/igdb.service";
import GameGrid from "@/components/game-grid/game.grid";
import Pagination from "@/components/ui/pagination";

interface HomePageProps {
    searchParams: { page?: string };
}

export default async function HomePage({ searchParams }: HomePageProps) {
    const { page: pageParam } = await searchParams;
    const page = Number(pageParam ?? 1);
    const games = await getGames(page);

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold text-white mb-6">Juegos</h1>
            <GameGrid games={games} />
            <Pagination currentPage={page} />
        </main>
    );
}
