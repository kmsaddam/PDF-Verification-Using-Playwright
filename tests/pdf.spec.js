

// import {pdfParse} from 'pdf-parse';



// test('Read specific text from PDF', async ({ page }) => {
//   await page.goto('https://kmsaddam.com/resume/Updated_SQA_Saddam_2026.pdf');

//   const [download] = await Promise.all([
//     page.waitForEvent('download'),
//     page.click('text=Download PDF')
//   ]);

//   const filePath = `downloads/${download.suggestedFilename()}`;
//   await download.saveAs(filePath);

//   const buffer = fs.readFileSync(filePath);
//   const pdfData = await pdfParse(buffer);

//   // ✅ Verify specific text
// //   expect(pdfData.text).toContain('Invoice Number: 12345');
//   expect(pdfData.text).toContain('dev.saddam@gmaill.com');

// });

import { test, expect } from '@playwright/test';
import pdfParse from 'pdf-parse';

test('Read PDF', async ({ request }) => {
  const res = await request.get('https://kmsaddam.com/resume/Updated_SQA_Saddam_2026.pdf');
  const buffer = await res.body();

  const pdfData = await pdfParse(buffer);

  expect(pdfData.text).toContain('dev.saddam@gmaill.com');
});