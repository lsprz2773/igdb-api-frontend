import { IGDBGameExpanded } from "@/types/api/api.response";
import GameCard from "@/components/game-card/game.card";

export default function GameGrid({ games }: { games: IGDBGameExpanded[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((game) => (
                    <GameCard
                        key={game.id}
                        name={game.name}
                        cover={game.cover}
                        genres={game.genres}
                        platforms={game.platforms}
                        total_rating={game.total_rating}
                        first_release_date={game.first_release_date}
                    />
            ))}
        </div>
    );
}
