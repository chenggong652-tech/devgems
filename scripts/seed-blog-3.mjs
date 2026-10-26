import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const today = new Date().toISOString();

async function createThirdBlog() {
  console.log('✍️  Creating third blog post...');

  const user = await client.fetch(`*[_type == "user"][0]`);

  const doc = {
    _type: 'blogPost',
    title: 'How to Use AI to Code 10x Faster: 7 Practical Tips for Developers',
    slug: { _type: 'slug', current: 'how-to-use-ai-to-code-10x-faster' },
    excerpt:
      'Want to code 10x faster with AI? These 7 practical tips will help you get the most out of Cursor, Copilot, and other AI coding tools.',
    featured: true,
    publishDate: today,
    author: { _type: 'reference', _ref: user._id },
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Every developer is using AI in 2026, but most are only scratching the surface. Just letting autocomplete suggest the next line of code leaves 90% of the productivity gains on the table. These 7 practical tips will help you actually code 10x faster with AI.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '1. Start with a Detailed Prompt, Not a Blank File' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The biggest mistake developers make is opening a blank file and asking AI to "write a function". Instead, describe the whole problem: what the input looks like, what the output should be, edge cases to handle, and what libraries you want to use. The more context you give, the better the output.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '2. Let AI Write Tests First' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Most developers write code first, then tests later (or never). Flip the workflow: ask AI to write unit tests for a function before you write the implementation. This forces you to think about the interface first, and AI is surprisingly good at generating comprehensive test cases.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '3. Use AI to Explain Unfamiliar Code' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Reading a new codebase? Instead of struggling through 500 lines of unfamiliar code, paste it into AI chat and ask: "Explain what this code does, what the edge cases are, and what could go wrong." This is 10x faster than reading every line yourself.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '4. Refactor in Small Steps, Not Big Bang' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Asking AI to "refactor this whole file" almost always produces broken code. Instead, ask for one small change at a time: "Extract this logic into a separate function", "Add error handling for the API call", "Rename this variable to be more descriptive". Small steps mean you can verify each change works before moving on.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '5. Use AI for Boilerplate, Not Business Logic' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'AI is amazing at writing boilerplate: CRUD endpoints, form validation, API clients, config files, TypeScript types. Let it do all the repetitive work, and you focus on the actual business logic and edge cases. Never let AI write payment processing or authentication code without careful review.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '6. Keep a Library of Good Prompts' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'You will notice certain prompts work really well for your team\'s code style. Save them in a snippet library or your tool\'s custom commands. Good prompts to save include: "Write React component with TypeScript", "Write unit test for this function", "Explain this error message", "Add JSDoc comments to this file".',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '7. Always Review AI Code Before Merging' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'AI code looks plausible but often has subtle bugs, security vulnerabilities, or incorrect assumptions about your codebase. Always read every line before merging. Think of AI as a junior developer who writes fast but needs your review — not as a replacement for your judgment.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Start Today' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The best way to get better at using AI to code is to start using it today. Pick one workflow from this list and try it on your next task. Over time, these small habits compound into massive productivity gains.',
          },
        ],
      },
    ],
  };

  const result = await client.create(doc);
  console.log(`✅ Created: ${doc.title} (${result._id})`);
}

createThirdBlog().catch(console.error);
