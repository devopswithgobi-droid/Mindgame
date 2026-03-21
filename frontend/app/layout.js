export const metadata = {
  title: "Mindgame App",
  description: "ECS Deployment Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
