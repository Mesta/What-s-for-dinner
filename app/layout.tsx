import './global.css';

export const metadata = {
  title: "What's for Dinner? - Recipe Suggestions",
  description: "Find delicious recipes based on ingredients in your fridge. Get personalized meal suggestions with dietary preferences.",
  keywords: "recipes, cooking, meal planning, ingredients, dinner ideas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body>{children}</body>
    </html>
  );
}

