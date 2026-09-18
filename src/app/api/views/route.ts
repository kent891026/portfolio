import { readVisitorCount } from "@/lib/visitor-counter";

// GET 僅讀取，供已開啟的頁面刷新；POST 才記錄一次頁面訪問。
export const dynamic = "force-dynamic";

async function respond(increment: boolean) {
  try {
    const count = await readVisitorCount(increment);
    return Response.json({ count }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Visitor counter failed:", error);
    return Response.json({ error: "瀏覽次數暫時無法取得" }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}

export async function GET() { return respond(false); }
export async function POST() { return respond(true); }
