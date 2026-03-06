import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const offset = (page - 1) * 20;

    const res = await fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            "Client-ID": process.env.IGDB_CLIENT_ID!,
            "Authorization": `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
            "Content-Type": "text/plain",
        },
        body: `fields name, slug, cover.*, genres.*, platforms.*,
           total_rating, first_release_date; limit 20; offset ${offset};`,
    });

    const data = await res.json();
    return NextResponse.json(data);
}
