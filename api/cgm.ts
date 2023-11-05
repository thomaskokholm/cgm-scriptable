import excuteQuery from "../lib/db";

export async function GET() {
  try {
    const result = await excuteQuery({
      query: "SELECT * FROM `glucose` ORDER BY `id` DESC",
      values: [],
    });
    console.log("result", result);
    return new Response(
      JSON.stringify({
        data: {
          id: 226,
          time: "2023-11-05T18:19:27.000Z",
          val: 7.4,
          trend: "Flat",
          results: JSON.stringify(result),
        },
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}
