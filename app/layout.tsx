import "./globals.css";

export const metadata = {
  title: "Sofela Israel",
  description: "This is my personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
