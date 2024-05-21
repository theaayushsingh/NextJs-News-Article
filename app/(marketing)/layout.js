import '../globals.css';
import Link from 'next/link';
export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <p style={{ textAlign: "center" }}>
          <Link href="https://www.linkedin.com/in/theaayushsingh" target="_blank" style={{ color: "white" }}>
            @Theaayushsingh
          </Link>
        </p>
      </body>
    </html>
  );
}
