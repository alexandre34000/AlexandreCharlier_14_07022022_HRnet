import { useEffect, useState } from 'react';

const Modal = (props) => {

    const [isDataUpload, setIsDataUpload] = useState(false);
    const [def, setDef] = useState({
        closeIcon: true,
        closeButton: true,
        textButton: "Close",
        textTitle: "title text",
        modalClass: "modal-content",
        width: "auto",
        height: "auto"
    });
    
    const handleClick = () => {
        props.modal(false);
    }

    useEffect(() => {
        Object.entries(props).forEach(([key, value]) => {
            setDef((prevState) => ({
                ...prevState,
                [key]: value
            }))
        })
        setIsDataUpload(true)
    }, [])

    return (
        <div className="modal-container"  >
            {isDataUpload &&
                <div className={def.modalClass} style={{ height: `${def.height}`, width: `${def.width}` }}>
                    <input type="button" onClick={handleClick} className="modal-button__upper" data-buttonupper={def.closeIcon} />
                    <div className="modal-content__center">
                        <p>{def.textTitle}</p>
                        {props.children}
                        <button onClick={handleClick} className="modal-button__lower" data-buttonlower={def.closeButton}>{def.textButton}</button>
                    </div></div>
            }
        </div>
    )
}
export default Modal;