import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="pt">
      <head>
        <title>Eventos</title>
        {/* TODO: Adicionar media query */}
        {/* <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: mediaStyles }}
        /> */}
      </head>
      {/* TODO: Adicionar font */}
      {/* <body className={prompt.className} id="app"> */}
      <body id="app">
          {children}
      </body>
    </html>
  );
}

export default RootLayout;