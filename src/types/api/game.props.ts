import {
    IGDBCover,
    IGDBGenre,
    IGDBPlatform,
} from "@/types/api/api.response";

export interface GameCardProps {
    name: string;
    cover?: IGDBCover;
    genres?: IGDBGenre[]
    platforms?: IGDBPlatform[];
    total_rating?: number;
    first_release_date?: number;
}
