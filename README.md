import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { ingredient } = await request.json();
    
    if (!ingredient) {
      return NextResponse.json({ error: 'Ingredient is required' }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful cooking assistant. Suggest a delicious meal based on the ingredient provided."
        },
        {
          role: "user",
          content: `I have ${ingredient} at home. What meal can I make for dinner tonight?`
        }
      ],
      max_tokens: 300,
    });

    const suggestion = response.choices[0].message.content;
    return NextResponse.json({ suggestion });
  } catch (error) {
    console.error('Error generating meal suggestion:', error);
    return NextResponse.json(
      { error: 'Failed to generate meal suggestion' },
      { status: 500 }
    );
  }
}# Welcome to Next.js

This is the most minimal starter for your Next.js project.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/hello-world&project-name=hello-world&repository-name=hello-world)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example hello-world hello-world-app
```

```bash
yarn create next-app --example hello-world hello-world-app
```

```bash
pnpm create next-app --example hello-world hello-world-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
