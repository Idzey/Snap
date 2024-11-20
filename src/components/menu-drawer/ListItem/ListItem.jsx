import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

export default function ListItem({text, childrenData}) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <ListItemButton onClick={() => setOpen(prev => !prev)}>
                <ListItemText primary={text} />
                {childrenData ? (open ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItemButton>
            {childrenData && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    {childrenData.map(({text, icon}, index) => (
                        <ListItemButton sx={{pl: 4}} key={index}>
                        {icon}&ensp;
                        <ListItemText primary={text} />
                    </ListItemButton>
                    ))}
                    </List>
                </Collapse>
            )}
      </>
    )
}