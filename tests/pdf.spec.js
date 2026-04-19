
import { test, expect } from '@playwright/test';

import { PDFParse } from 'pdf-parse';

test('Check Specific Email ID in a PDF', async ({ request }) => {
  const parser = new PDFParse({ url: 'https://kmsaddam.com/resume/Updated_SQA_Saddam_2026.pdf' });
	const result = await parser.getText();
  expect(result.text).toContain('dev.saddam@gmaill.com');
});