/** CounterAPI 的憑證只在伺服器使用，不可加 NEXT_PUBLIC_ 前綴。 */
const workspace = process.env.COUNTERAPI_WORKSPACE;
const token = process.env.COUNTERAPI_TOKEN;
const counterName = "homepage";

export async function readVisitorCount(increment: boolean): Promise<number> {
  if (!workspace || !token) {
    throw new Error("CounterAPI 尚未設定 COUNTERAPI_WORKSPACE 與 COUNTERAPI_TOKEN");
  }

  const url = `https://api.counterapi.dev/v2/${encodeURIComponent(workspace)}/${counterName}${increment ? "/up" : ""}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`CounterAPI 回應 ${response.status}`);

  // v2 回傳 value；兼容 API 將數值包在 data 內的回傳形式。
  const body: unknown = await response.json();
  const record = body && typeof body === "object" ? body as Record<string, unknown> : {};
  const nested = record.data && typeof record.data === "object" ? record.data as Record<string, unknown> : {};
  const value = record.value ?? nested.value;
  if (typeof value !== "number" || !Number.isSafeInteger(value) || value < 0) {
    throw new Error("CounterAPI 回傳的計數格式不正確");
  }
  return value;
}
