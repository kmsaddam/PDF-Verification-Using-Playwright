
import { test, expect } from '@playwright/test';

import { PDFParse } from 'pdf-parse';

test('Read PDF', async ({ request }) => {
  // const res = await request.get('https://kmsaddam.com/resume/Updated_SQA_Saddam_2026.pdf');
  // const buffer = await res.body();

  // const pdfData = await pdfParse(buffer);

  const parser = new PDFParse({ url: 'https://kmsaddam.com/resume/Updated_SQA_Saddam_2026.pdf' });

	const result = await parser.getText();
	//console.log(result.text);

  expect(result.text).toContain('dev.saddam@gmaill.com');
});