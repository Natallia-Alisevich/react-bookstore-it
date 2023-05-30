import { ReactNode } from "react";
import { createPortal } from "react-dom";

export enum PortalTarget {
    ROOT = "root",
    MODAL = "modal",
}

interface PortalProps {
    children: ReactNode;
    target: PortalTarget;
}

export const Portal = ({ children, target }: PortalProps) => {

    const root = document.getElementById(target) as HTMLElement;
    return root ? createPortal(children, root) : null;
};