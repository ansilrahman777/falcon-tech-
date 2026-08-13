export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="text-gray-900 antialiased bg-white dark:bg-gray-900 dark:text-white"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}