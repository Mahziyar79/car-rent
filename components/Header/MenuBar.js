import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import LogoImg from "../../public/images/Logo.png";
import LogoDarkImg from "../../public/images/LogoDark.png";
import ListItemText from "@mui/material/ListItemText";
import {
  HomeIcon,
  TruckIcon,
  HeartIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import ChangeLang from "./ChangeLang";
import { useRouter } from "next/router";

export default function MenuBar() {
  const darkMode = useSelector((state) => state.carReducer.darkMode);
  const { locale } = useRouter();
  const [manueState, setMenuState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuState({ ...manueState, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem>
            <ListItemButton>
              <Link href="/">
                {darkMode ? (
                  <Image
                    className="scroll-effect"
                    src={LogoDarkImg}
                    alt="Logo Image"
                    width={150}
                    height={150}
                  />
                ) : (
                  <Image
                    className="scroll-effect"
                    src={LogoImg}
                    alt="Logo Image"
                    width={150}
                    height={150}
                  />
                )}
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <Link className="w-full" href="/">
              <ListItemButton className="flex gap-x-2 items-center font-iransans">
                <HomeIcon className="h-6 w-6 text-[#90A3BF]" />
                {locale === "en" ? (
                  <ListItemText primary="Home" />
                ) : (
                  <ListItemText primary="خانه" />
                )}
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link className="w-full" href="/cars">
              <ListItemButton className="flex gap-x-2 items-center">
                <TruckIcon className="h-6 w-6 text-[#90A3BF]" />
                {locale === "en" ? (
                  <ListItemText primary="Cars" />
                ) : (
                  <ListItemText primary="ماشین ها" />
                )}
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link className="w-full" href="/favourite">
              <ListItemButton className="flex gap-x-2 items-center">
                <HeartIcon className="h-6 w-6 text-[#90A3BF]" />
                {locale === "en" ? (
                  <ListItemText primary="Favourite" />
                ) : (
                  <ListItemText primary="علاقه مندی ها" />
                )}
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>
      <div className="mx-8">
        <ChangeLang manueState={manueState} setMenuOpen={setMenuState} />
      </div>
    </>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Bars3BottomRightIcon className="h-8 w-8 text-gray-600 dark:text-white dark:hover:bg-transparent border border-none rounded-full hover:bg-gray-100 cursor-pointer scroll-effect" />
          </Button>
          {darkMode ? (
            <Drawer
              anchor={anchor}
              open={manueState[anchor]}
              onClose={toggleDrawer(anchor, false)}
              PaperProps={{
                sx: {
                  backgroundColor: "#243137",
                  color: "white",
                },
              }}
            >
              {list(anchor)}
            </Drawer>
          ) : (
            <Drawer
              anchor={anchor}
              open={manueState[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
