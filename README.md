# Kent Portfolio 維護指南

網站以 Next.js App Router 製作。首頁、作品彈窗與作品詳情共用 `src/data/projects/` 的資料，新增作品通常不需要改 UI 元件。

## 檔案地圖

| 想修改的內容 | 檔案 |
| --- | --- |
| 個人簡介、社群連結、側欄分類 | `src/data/siteConfig.ts` |
| 首頁作品排序 | `src/data/projects.ts` |
| 單一作品標題、敘述、圖庫、模型與連結 | `src/data/projects/<作品名稱>.ts` |
| 作品資料欄位與規則 | `src/data/project-types.ts` |
| 首頁滾動、選取作品與彈窗狀態 | `src/app/page.tsx` |
| 首頁各區塊 | `src/components/Home/` |
| 詳情頁版型、圖片與側欄 | `src/app/projects/[id]/page.tsx`、`src/components/ProjectDetail/` |
| 3D 模型檢視器 | `src/components/ProjectModel/` |
| 訪客計數顯示、API 路由、CounterAPI 呼叫 | `src/components/Home/VisitorCount.tsx`、`src/app/api/views/route.ts`、`src/lib/visitor-counter.ts` |
| 靜態圖片、模型、PDF | `public/images/projects/`、`public/models/`、`public/files/` |

## 新增作品

1. 在 `src/data/projects/` 新建一個 TypeScript 檔，匯出符合 `Project` 型別的物件。可複製 `air-monitor.ts` 作範例。
2. 在 `src/data/projects.ts` 匯入並加入 `projectsData`。陣列位置就是首頁排序；`id` 也是作品網址 `/projects/<id>`，發布後不要任意改名。
3. 圖片放在 `public/images/projects/`，資料中的路徑從 `/images/projects/` 開始。封面必填。`galleries` 的每一組會在詳情頁成為獨立段落；`modelUrl` 可使用 `public/models/` 下的 `.glb` 模型。
4. 若是新分類的起點，再編輯 `src/data/siteConfig.ts` 的 `sidebarCategories`。同分類作品不需修改側欄。
5. 執行 `npm run lint`、`npx tsc --noEmit`、`npm run build`，檢查首頁卡片、彈窗與詳情頁。

### 空氣檢測機範例

`src/data/projects/air-monitor.ts` 保留原本的 `05-temp-sensor` 網址，使用現有電路 SVG 作為封面與圖庫。介紹依提供的程式摘要描述 Wemos D1 Mini、SSD1306、BME280、BH1750、MQ-135、OpenWeather 與更新週期；原型階段的 MQ-135 相對 ADC 讀值沒有寫成已校正的 PPM。

現有 `.glb` 模型已放入 `public/models/`，並接到詳情頁 3D 檢視器。等三視圖、爆炸圖、成品照完成後，將檔案放入 `public/images/projects/空氣檢測機/`，在 `air-monitor.ts` 新增 `galleries` 段落與 `slides`。目前提供的韌體片段省略函式實作，不應當成完整可燒錄程式發布。

## 瀏覽次數

舊程式直接從瀏覽器呼叫 CounterAPI v1 `/up`，但 v1 已停用。現在首頁每個分頁工作階段呼叫一次本站 `POST /api/views` 記錄訪問，之後每 15 秒呼叫 `GET /api/views` 讀取總數。伺服器路由才帶憑證呼叫 CounterAPI v2。計數服務失敗時會保留虛線或最後一次成功讀值，不會用 `000000` 冒充真實統計。

上線前在 [CounterAPI](https://docs.counterapi.dev/api/endpoints/v2/) 建立 workspace 與具讀寫權限的 token，並在 Vercel 專案的 Environment Variables 設定：

| 變數 | 用途 |
| --- | --- |
| `COUNTERAPI_WORKSPACE` | CounterAPI workspace 名稱 |
| `COUNTERAPI_TOKEN` | 僅供伺服器使用的 Bearer token |

設定後重新部署。開發環境可在未追蹤的 `.env.local` 放相同變數。不要使用 `NEXT_PUBLIC_` 前綴，也不要將 token 提交到 Git。舊 v1 計數不會自動轉移；若要延續舊總數，需依 CounterAPI 後台可取得的數值另行初始化。CounterAPI v2 採緩衝更新，其他訪客帶來的增量可能延遲顯示；15 秒輪詢讓頁面持續讀取最新可用數值。

## 開發

```bash
npm ci
npm run dev
```

改作品內容時先編輯資料檔；只有要變更所有作品的呈現規則時才修改 UI 元件。
