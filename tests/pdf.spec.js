import { test, expect } from '@playwright/test';
import fs from 'fs';
import pdfParse from 'pdf-parse';

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


test('Read PDF from URL', async ({ request }) => {
  const response = await request.get('https://kmsaddam.com/resume/Updated_SQA_Saddam_2026.pdf');
  const buffer = await response.body();

  const pdfData = await pdfParse(buffer);

  expect(pdfData.text).toContain('dev.saddam@gmaill.com');
});