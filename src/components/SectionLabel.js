import React from "react";
import "../App.css";

export const SectionLabel = React.forwardRef(({
    children,
    ...props
}, ref) => {
    return <div
        {...props}
        ref = {ref}
    >
        Section Label
        {children}
    </div>
});
