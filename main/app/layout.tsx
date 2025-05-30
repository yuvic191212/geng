import './style.css';

export const metadata = {
    title: "yengine",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
           <header>
             <h1> YENGINE </h1>
             </header>
            {children}</body>
      </html>
    );
}