import style from "./error.module.scss";
import WarningIcon from '@mui/icons-material/Warning';

const Error = ({text}) => {

    return (
        <div className={style.error}>
            <WarningIcon />
            {text}
        </div>
    )
}

export default Error;