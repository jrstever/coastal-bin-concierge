import "./globals.css";

export const metadata = {
  title: "Coastal Bin Concierge",
  description: "Proudly Serving San Clemente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
