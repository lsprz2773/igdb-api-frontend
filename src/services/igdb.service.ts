import {IGDBGameExpanded} from "@/types/api/api.response";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

export async function getGames(page: number = 1): Promise<IGDBGameExpanded[]> {
    const res = await fetch(`${BASE_URL}/api/igdb/games?page=${page}`);
    return res.json();
}