import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function MenuItem({ text = "", selected, setSelected, children }) {
    return (
        <div className='relative'>
            <div className="flex gap-2 cursor-pointer items-center" onClick={() => setSelected(prev => prev != text ? text : "")}>
                <span className="text-medium-gray hover:text-almost-black relative border-b-2 border-transparent xl:hover:border-almost-black"
                >{text}</span>
                {children && selected != text && <ExpandMoreIcon />}
                {children && selected == text && <ExpandLessIcon />}
            </div>
            {selected == text && children}
        </div>
    )
}