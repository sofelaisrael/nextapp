import "./globals.css";

export const metadata = {
  title: "Sofela Israel",
  description: "This is my personal portfolio",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark antialiased`}
      >
        {/* <div className="absolute left-1/2 top-1/2 w-[40%] h-[50%] bg-white">
        </div> */}
        {children}
      </body>
    </html>
  );
}
