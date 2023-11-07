import excuteQuery from "../lib/db";
export const runtime = "edge";

export default async function (req, res) {
  res.setHeader("content-type", "application/json");
  res.setHeader("Cache-Control", "public, s-maxage=1");
  res.setHeader("CDN-Cache-Control", "public, s-maxage=10");
  res.setHeader("Vercel-CDN-Cache-Control", "public, s-maxage=100");
  try {
    const result = await excuteQuery({
      query: "SELECT * FROM `glucose` ORDER BY `id` DESC LIMIT 1",
      values: [],
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
