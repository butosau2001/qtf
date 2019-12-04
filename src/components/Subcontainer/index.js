import React, { useState, useEffect } from "react";

import { Container } from "./styles";

export default function Subcontainer(props) {
    const [show, setShow] = useState(true);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(props.animate);
    }, [props.animate]);

    return (
        <Container
            animate={animate}
            show={show}
            onAnimationStart={() => setShow(true)}
            onAnimationEnd={() => setShow(animate)}
        >
            <div className="subcontainer">{props.children}</div>
        </Container>
    );
}
