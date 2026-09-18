"use client";

import { useEffect, useState } from "react";

/** 每個瀏覽器分頁記一次訪問，並定期讀取其他訪客帶來的總數變化。 */
export default function VisitorCount() {
  const [count, setCount] = useState<string>("------");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    const update = async (increment: boolean) => {
      try {
        const response = await fetch("/api/views", { method: increment ? "POST" : "GET", cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data: unknown = await response.json();
        const value = data && typeof data === "object" && "count" in data ? data.count : undefined;
        if (typeof value !== "number" || !Number.isSafeInteger(value)) throw new Error("Invalid count");
        if (active) {
          setCount(String(value).padStart(6, "0"));
          setFailed(false);
        }
      } catch {
        if (active) setFailed(true);
      }
    };

    // sessionStorage 避免 Strict Mode 重跑 effect 或頁內導覽重複加一。
    const key = "kent-portfolio-homepage-visited";
    const firstVisit = sessionStorage.getItem(key) !== "1";
    if (firstVisit) sessionStorage.setItem(key, "1");
    void update(firstVisit);
    const timer = window.setInterval(() => void update(false), 15_000);
    return () => { active = false; window.clearInterval(timer); };
  }, []);

  return <span className="text-gray-400 group-hover:text-white transition-colors" title={failed ? "瀏覽次數暫時無法取得" : "本站瀏覽次數，每 15 秒更新"} aria-label={failed ? "瀏覽次數暫時無法取得" : `瀏覽次數 ${count}`}>
    {failed && count === "------" ? "------" : count}
  </span>;
}
