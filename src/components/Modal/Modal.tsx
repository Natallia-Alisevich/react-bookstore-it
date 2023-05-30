import { Portal, PortalTarget } from "components/Portal/Portal";
import React from "react";

interface ModalProps {
    handleClose: () => void;
}


export const Modal = ({ handleClose }: ModalProps) => {
    return (
        <Portal target={PortalTarget.MODAL}>
            <div className="modal" style={{ display: "block" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-primary" onClick={handleClose}>
                                Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}
