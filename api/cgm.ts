import excuteQuery from "../lib/db";

export const config = {
  runtime: "edge",
};

export async function GET() {
  try {
    const result = await excuteQuery({
      query: "SELECT * FROM `glucose` ORDER BY `id` DESC",
      values: [],
    });
    console.log("result", result);
  } catch (error) {
    console.log(error);
  }

  return new Response(
    JSON.stringify({
      data: {
        id: 226,
        time: "2023-11-05T18:19:27.000Z",
        val: 7.4,
        trend: "Flat",
      },
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
