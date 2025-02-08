import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
    Avatar,
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Typography,
} from "@material-tailwind/react";
import {
    PowerIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";

function Profile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    
    const logout = async () => {
        await auth.signOut();
        navigate('/');
    };


    const closeMenu = () => setIsMenuOpen(false);

    function handleClick() {
        closeMenu();
        logout();
    }

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center rounded-full p-0"
                >
                    <Avatar
                        variant="circular"
                        size="md"
                        withBorder={true}
                        color="blue-gray"
                        className="p-0.5"
                        src={'https://firebasestorage.googleapis.com/v0/b/akknoledge.appspot.com/o/WebsitePics%2Fai-generated-9030902_1280.jpg?alt=media&token=60324cc6-0b73-4e16-9f8c-08b9fc852cef'}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">

                <Link>
                    <MenuItem
                        onClick={closeMenu}
                        className={`flex items-center gap-2 rounded`}
                    >
                        <UserCircleIcon
                            className={`h-4 w-4`}
                            strokeWidth={2}
                        />
                        <Typography
                            as="span"
                            variant="h6"
                            className="font-normal"
                            color={"inherit"}
                        >
                            My Profile
                        </Typography>
                    </MenuItem>
                </Link>       

                <MenuItem
                    onClick={handleClick}
                    className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
                >
                    <PowerIcon
                        className={`h-4 w-4 text-red-500`}
                        strokeWidth={2}
                    />
                    <Typography
                        as="span"
                        variant="h6"
                        className="font-normal"
                        color={"red"}
                    >
                        Log Out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default Profile;
