export interface IGDBCover {
    id: number;
    image_id: string;
    url: string;
    width?: number;
    height?: number;
}

export interface IGDBGenre {
    id: number;
    name: string;
}

export interface IGDBPlatform {
    id: number;
    name: string;
    abbreviation?: string;
}

export interface IGDBGameMode {
    id: number;
    name: string;
}

export interface IGDBTheme {
    id: number;
    name: string;
}

export interface IGDBScreenshot {
    id: number;
    image_id: string;
    url: string;
    width?: number;
    height?: number;
}

export interface IGDBWebsite {
    id: number;
    url: string;
    category: number;
}

export interface IGDBReleaseDate {
    id: number;
    date?: number;
    human?: string;
    platform?: number | IGDBPlatform;
}

export interface IGDBInvolvedCompany {
    id: number;
    company: number | { id: number; name: string };
    developer: boolean;
    publisher: boolean;
}

export interface IGDBGame {
    id: number;
    name: string;
    slug: string;
    url: string;
    summary?: string;
    storyline?: string;
    checksum: string;
    game_type: number;

    // Fechas
    created_at: number;
    updated_at: number;
    first_release_date?: number;

    // Relaciones
    cover?: number | IGDBCover;
    genres?: number[] | IGDBGenre[];
    platforms?: number[] | IGDBPlatform[];
    game_modes?: number[] | IGDBGameMode[];
    themes?: number[] | IGDBTheme[];
    screenshots?: number[] | IGDBScreenshot[];
    websites?: number[] | IGDBWebsite[];
    release_dates?: number[] | IGDBReleaseDate[];
    involved_companies?: number[] | IGDBInvolvedCompany[];

    // Ratings
    rating?: number;
    rating_count?: number;
    aggregated_rating?: number;
    aggregated_rating_count?: number;
    total_rating?: number;
    total_rating_count?: number;

    // Opcionales menos frecuentes
    age_ratings?: number[];
    alternative_names?: number[];
    artworks?: number[];
    videos?: number[];
    similar_games?: number[];
    franchises?: number[];
    keywords?: number[];
    tags?: number[];
    external_games?: number[];
    parent_game?: number;
    collections?: number[];
    player_perspectives?: number[];
    game_engines?: number[];
    language_supports?: number[];
    game_localizations?: number[];
    status?: number;
    game_status?: number;
}

