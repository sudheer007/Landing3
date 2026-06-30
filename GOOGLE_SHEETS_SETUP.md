# Email signups → Google Sheets setup

The "Get Early Access" form on the landing page and footer posts to `/api/subscribe`
(a Next.js API route), which forwards each signup to a Google Apps Script Web App.
The script appends a row to a Google Sheet. No Google API keys or service accounts
are needed.

## 1. Create the sheet

1. Create a new Google Sheet (or use an existing one).
2. Rename the first tab to `Signups` (or update `SHEET_NAME` in the script below).
3. Add a header row: `Timestamp | Email | Source | User Agent`

## 2. Add the Apps Script

1. In the Sheet, go to **Extensions → Apps Script**.
2. Delete any boilerplate code and paste this:

```javascript
const SHEET_NAME = "Signups";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);

    if (!data.email) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false, error: "Missing email" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.email,
      data.source || "",
      data.userAgent || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (give the project a name, e.g. "GSR Signups").

## 3. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" → choose **Web app**.
3. Set:
   - **Execute as:** Me (your Google account)
   - **Who has access:** Anyone
4. Click **Deploy**, authorize the permissions Google asks for.
5. Copy the **Web app URL** — it looks like
   `https://script.google.com/macros/s/AKfycb.../exec`

   Keep this URL private-ish: anyone who has it can write rows to your sheet.
   It's not a secret in the cryptographic sense, but don't publish it publicly.

## 4. Configure the app

**Local development:**
```
cp .env.local.example .env.local
```
Paste the Web App URL as `GOOGLE_SCRIPT_URL` in `.env.local`.

**Production (Vercel):**
Project → Settings → Environment Variables → add
`GOOGLE_SCRIPT_URL` = `<your Web App URL>` for the Production (and Preview, if
you want) environment, then redeploy.

## 5. Test it

Run `npm run dev`, submit the form on the homepage or footer, and check that a
new row appears in the `Signups` tab.

## Updating the script later

If you ever edit the Apps Script code, you must create a **new deployment**
(or use "Manage deployments" → edit → new version) for the changes to take
effect — editing the code alone does not update the live Web App URL's
behavior.
