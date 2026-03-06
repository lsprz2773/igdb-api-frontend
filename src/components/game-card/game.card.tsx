import Image from "next/image";
import { getIGDBImageUrl } from "@/lib/get.img.IGDB";
import { GameCardProps} from "@/types/api/game.props";

function RatingColor(rating: number): string {
    if (rating >= 75) return "bg-green-500";
    if (rating >= 50) return "bg-yellow-500";
    return "bg-red-500";
}

export default function GameCard({
                                     name,
                                     cover,
                                     genres = [],
                                     platforms = [],
                                     total_rating,
                                     first_release_date,
                                 }: GameCardProps) {
    const year = first_release_date
        ? new Date(first_release_date * 1000).getFullYear()
        : null;

    const rating = total_rating ? Math.round(total_rating) : null;

    return (
        <div className="w-full max-w-lg flex flex-row bg-[rgb(19,20,25)] rounded-2xl border border-white/10 p-3 gap-4 items-stretch hover:border-white/30 hover:bg-[rgb(25,27,33)] transition-all duration-200 cursor-pointer">

            <div className="flex-shrink-0">
                {cover ? (
                    <Image
                        src={getIGDBImageUrl(cover.image_id, "t_cover_big")}
                        width={90}
                        height={128}
                        alt={`Portada de ${name}`}
                        className="rounded-xl object-cover w-[90px] h-[128px]"
                    />
                ) : (
                    <div className="w-[90px] h-[128px] rounded-xl bg-white/5 flex items-center justify-center">
                        <span className="text-white/20 text-xs text-center px-2">Sin portada</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col justify-between flex-1 min-w-0 py-1">
                <div className="flex flex-row items-start justify-between gap-2">
                    <h2 className="text-white font-semibold text-base leading-tight truncate">
                        {name}
                    </h2>
                    {year && (
                        <span className="text-white/50 text-sm flex-shrink-0">{year}</span>
                    )}
                </div>

                {genres.length > 0 && (
                    <div className="flex flex-row flex-wrap gap-1 mt-2">
                        {genres.slice(0, 3).map((genre) => (
                            <span
                                key={genre.id}
                                className="text-xs px-2 py-0.5 rounded-md bg-white/10 text-white/70"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex flex-row items-center gap-2 mt-2 flex-wrap">
                    {rating !== null && (
                        <span
                            className={`text-xs font-bold px-2 py-1 rounded-lg text-white ${RatingColor(rating)}`}
                        >
                            {rating}
                        </span>
                    )}
                    {platforms.slice(0, 3).map((platform) => (
                        <span
                            key={platform.id}
                            className="text-xs px-2 py-0.5 rounded-md bg-white/10 text-white/50"
                        >
                            {platform.abbreviation ?? platform.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
