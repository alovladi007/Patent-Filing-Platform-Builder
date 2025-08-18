export const metadata = {
  title: 'Patent Filing Platform',
  description: 'Automated patent filing with AI assistance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}