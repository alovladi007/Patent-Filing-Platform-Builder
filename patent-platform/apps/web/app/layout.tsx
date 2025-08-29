export const metadata = {
  title: 'LUMA IP',
  description: 'Legal Utility for Machine Assisted IP Analysis',
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