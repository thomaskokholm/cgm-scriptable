import excuteQuery from "../lib/db";

export async function GET() {
  try {
    const result = await excuteQuery({
      query: "SELECT * FROM `glucose` ORDER BY `id` DESC LIMIT 1",
      values: [],
    });
    console.log("result", result);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
