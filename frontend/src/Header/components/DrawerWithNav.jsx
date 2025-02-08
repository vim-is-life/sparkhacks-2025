import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Akknoledge-Logo.png";
import TideLogo from "../../Logo/Logo.png";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

// 1. Import your AuthContext
import { useAuth } from "../../components/AuthContext";

function DrawerWithNav() {
  // 2. Access the current user object
  const { currentUser } = useAuth();

  // State of Drawer
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <button onClick={openDrawer} className="mt-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </button>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <img src={TideLogo} alt="Akknoledge Logo" className="w-48" />
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>

          <Link to={'/'} onClick={closeDrawer}>
            <ListItem>
              <ListItemPrefix>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </ListItemPrefix>
              Home
            </ListItem>
          </Link>

          {currentUser && (
            <>
              <Link to={'/home'} onClick={closeDrawer}>
                <ListItem>
                  <ListItemPrefix>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                    </svg>
                  </ListItemPrefix>
                  Find Businesses
                </ListItem>
              </Link>
            </>
          )}

          {/* Show Sign In/Sign Up ONLY IF NOT logged in */}
          {!currentUser && (
            <>
              <Link to="/sign-in" onClick={closeDrawer}>
                <ListItem>
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M10.5 11a1.5 1.5 0 1 1 3 0v2.5h2a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h2V11Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </ListItemPrefix>
                  Sign In
                </ListItem>
              </Link>

              <Link to="/sign-up" onClick={closeDrawer}>
                <ListItem>
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-1 10H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-2 0v2Z" />
                    </svg>
                  </ListItemPrefix>
                  Sign Up
                </ListItem>
              </Link>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
}

export default DrawerWithNav;
