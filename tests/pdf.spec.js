
import { test, expect } from '@playwright/test';

import { PDFParse } from 'pdf-parse';

// test('Check Specific Email ID in a Resume(PDF Format)', async ({ request }) => {
//   const parser = new PDFParse({ url: 'https://kmsaddam.com/resume/Updated_SQA_Saddam_2026.pdf' });
// 	const result = await parser.getText();
//   expect(result.text).toContain('dev.saddam@gmaill.com');
// });


test('Check Specific Invoice number in a PDF', async ({ request }) => {
  const parser = new PDFParse({ url: 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf' });
  // page.waitForResponse()
  const result = await parser.getText();

  // Extract invoice number in the format 'INV-3337'
  const invoiceMatch = result.text.match(/INV-\d{4}/);
  console.log(invoiceMatch[0]);
  // if (invoiceMatch) {
  //   const invoiceNumber = invoiceMatch[0];
  //   console.log('Invoice Number:', invoiceNumber);
  // } else {
  //   console.log('Invoice number in format INV-3337 not found.');
  // }
expect(invoiceMatch[0]).toContain('INV-3337');
});