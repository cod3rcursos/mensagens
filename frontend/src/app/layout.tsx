import type { Metadata } from 'next'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
    title: 'Mensagens',
    description: 'Mostrando como usar mensagens de erro e sucesso em uma aplicação Next.js',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <ToastContainer />
            </body>
        </html>
    )
}
