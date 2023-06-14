import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'El cumple de Matito!',
  description: 'Matito te invita a su cumple!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      <body>{children}</body>
    </html>
  )
}
