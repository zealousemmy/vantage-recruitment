import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Nav from "../components/nav";
import SideBar from "../components/sidebar";
import { GlobalStyles } from "../lib/globalstyles";
import { lightTheme, darkTheme } from "../lib/theme";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const [show, setShow] = useState(true);
  const [close, setClose] = useState(false);
  const showSidebar = () => setClose(!close);
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const changeDisplay = () => {
    show ? setShow(false) : setShow(true);
    console.log(show);
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&family=Nunito+Sans:wght@200;300;400;600&family=Nunito:wght@200;500&family=Public+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
      <SideBar displayItem={show} close={close} sideDisplay={showSidebar} />
      <Nav changeMode={toggleTheme} sidebarDisplay={showSidebar} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
