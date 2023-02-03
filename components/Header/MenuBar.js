import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Logo from "../../public/images/Logo.png";
import ListItemText from "@mui/material/ListItemText";
import { HomeIcon , TruckIcon , HeartIcon } from "@heroicons/react/24/outline";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function MenuBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
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
              <Image
                className="scroll-effect"
                src={Logo}
                alt="Logo Image"
                width={150}
                height={150}
              />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <Link className="w-full" href="/">
            <ListItemButton className="flex gap-x-2 items-center">
              <HomeIcon className="h-6 w-6 text-[#90A3BF]" />
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link className="w-full" href="/cars">
            <ListItemButton className="flex gap-x-2 items-center">
              <TruckIcon className="h-6 w-6 text-[#90A3BF]" />
              <ListItemText primary="Cars" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link className="w-full" href="/favourite">
            <ListItemButton className="flex gap-x-2 items-center">
              <HeartIcon className="h-6 w-6 text-[#90A3BF]" />
              <ListItemText primary="Favourite" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Bars3BottomRightIcon className="h-8 w-8 text-gray-600 border border-none rounded-full hover:bg-gray-100 cursor-pointer scroll-effect" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
