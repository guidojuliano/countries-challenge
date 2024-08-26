export const env = {
  ENDPOINT: "https://countries.trevorblades.com/",
  TILE_LAYER:
    process.env.TILE_LAYER ||
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};
