import { getIGDBAccessToken } from "@/lib/get.IDGB.token";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const offset = (page - 1) * 20;
    const token = await getIGDBAccessToken();

    const res = await fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            "Client-ID": process.env.IGDB_CLIENT_ID!,
            "Authorization": `Bearer ${token}`,
            "Content-Type": "text/plain",
        },
        body: `fields name, slug, cover.*, genres.*, platforms.name,
           platforms.abbreviation, total_rating, first_release_date;
           limit 20; offset ${offset};`,
    });

    const data = await res.json();
    return NextResponse.json(data);
}
