import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"
import { Box, Button, Drawer, List} from '@mui/material';
import { COMPANY, FEATURES } from '../header/menuData';
import ListItem from './ListItem/ListItem';

export default function MenuDrawer() {
    const [drawer, setDrawer] = useState(false);
    

    return (
        <div className="flex xl:hidden ml-auto cursor-pointer">
            <Button onClick={() => setDrawer(true)}>
                <MenuIcon />
            </Button>
            <Drawer anchor={'right'} open={drawer} onClose={() => setDrawer(false)}>
                <Box sx={{width: 150}}>
                    <List>
                        <ListItem text={"Feature"} childrenData={FEATURES} />
                        <ListItem text={"Company"} childrenData={COMPANY} />
                        <ListItem text={"Careers"} />
                        <ListItem text={"About"} />
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}