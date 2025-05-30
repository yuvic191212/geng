import './style.css';

export const metadata = {
    title: "yengine",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
}