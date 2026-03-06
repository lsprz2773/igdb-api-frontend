type IGDBImageSize =
    | "t_thumb"
    | "t_cover_small"
    | "t_cover_big"
    | "t_screenshot_med"
    | "t_720p"
    | "t_1080p";

export function getIGDBImageUrl(imageId: string, size: IGDBImageSize): string {
    return `https://images.igdb.com/igdb/image/upload/${size}/${imageId}.jpg`;
}
