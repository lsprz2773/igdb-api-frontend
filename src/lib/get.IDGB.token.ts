import {TwitchTokenResponse} from "@/types/twitch/auth.twitch";

let cachedToken: string | null = null;
let tokenExpiresAt: number = 0;

export async function getIGDBAccessToken(): Promise<string> {
    const now = Date.now();

    if (cachedToken && now < tokenExpiresAt) {
        return cachedToken;
    }

    const res = await fetch("https://id.twitch.tv/oauth2/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            client_id: process.env.IGDB_CLIENT_ID!,
            client_secret: process.env.IGDB_CLIENT_SECRET!,
            grant_type: "client_credentials",
        }),
    });

    if (!res.ok) throw new Error("No se pudo obtener el access token de IGDB");

    const data: TwitchTokenResponse = await res.json();

    cachedToken = data.access_token;
    tokenExpiresAt = now + (data.expires_in - 60) * 1000;

    return cachedToken;
}
