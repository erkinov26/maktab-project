import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Person2Icon from "@mui/icons-material/Person2";
import PersonIcon from "@mui/icons-material/Person";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import TableViewIcon from "@mui/icons-material/TableView";
import CommentBankIcon from "@mui/icons-material/CommentBank";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ bgcolor: "white" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ color: "#000", mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ color: "#000" }}
            variant="h6"
            noWrap
            component="div"
          >
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ bgcolor: "#002540" }}>
          <h1>Hello World</h1>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ bgcolor: "#002540", height: "100%" }}>
          <ListItem disablePadding sx={{ color: "#fff" }}>
            <ListItemButton>
              <PeopleOutlineIcon />
              <ListItemText sx={{ m: 2 }}>Sinflar</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ color: "#fff" }}>
            <ListItemButton>
              <Person2Icon />
              <ListItemText sx={{ m: 2 }}>O`qituvchilar</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ color: "#fff" }}>
            <ListItemButton>
              <PersonIcon />
              <ListItemText sx={{ m: 2 }}>O`quvchilar</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ color: "#fff" }}>
            <ListItemButton>
              <LibraryBooksIcon />
              <ListItemText sx={{ m: 2 }}>Fanlar</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ color: "#fff" }}>
            <ListItemButton>
              <TableViewIcon />
              <ListItemText sx={{ m: 2 }}>Dars jadval</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ color: "#fff" }}>
            <ListItemButton>
              <SpeakerNotesIcon />
              <ListItemText sx={{ m: 2 }}>Jurnal</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ color: "#fff" }}>
            <ListItemButton>
              <CommentBankIcon />
              <ListItemText sx={{ m: 2 }}>KPI</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <h1>Hello World</h1>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
