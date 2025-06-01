import './style.css';

export const metadata = {
    title: "yengine",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
           <header>
             <div className='horizontal-layout'>
               <div className='box'>
                 <h1> YENGINE </h1>
               </div>
             </div>
           </header>
           {children}
        </body>
      </html>
    );
}