import {
    IGDBCover, IGDBGameMode,
    IGDBGenre,
    IGDBInvolvedCompany,
    IGDBPlatform, IGDBReleaseDate,
    IGDBScreenshot,
    IGDBTheme, IGDBWebsite
} from "@/types/api/api.response";

interface GameCardProps {
    id: number;
    name: string;
    slug: string;
    cover?: IGDBCover;
    genres?: IGDBGenre[]
    platforms?: IGDBPlatform[];
    total_rating?: number;
    first_release_date?: number;
    game_type: number;
}

interface GameDetailProps {
    id: number;
    name: string;
    slug: string;
    url: string;
    summary?: string;
    storyline?: string;
    cover?: IGDBCover;
    screenshots?: IGDBScreenshot[];
    genres?: IGDBGenre[];
    platforms?: IGDBPlatform[];
    game_modes?: IGDBGameMode[];
    themes?: IGDBTheme[];
    involved_companies?: IGDBInvolvedCompany[];
    release_dates?: IGDBReleaseDate[];
    websites?: IGDBWebsite[];
    rating?: number;
    aggregated_rating?: number;
    total_rating?: number;
    first_release_date?: number;
}
