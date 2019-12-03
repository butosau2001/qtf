import React, { useState } from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import { TextField } from "@material-ui/core";

import { Container } from "./styles";

function TextMask(props) {
    const { inputRef, focused, id, ...other } = props;

    return (
        <MaskedInput
            {...other}
            id={id}
            ref={ref => inputRef(ref ? ref.inputElement : null)}
            mask={[/\d/, /\d/, ":", /\d/, /\d/]}
            placeholderChar={"\u2000"}
            showMask={focused}
        />
    );
}

TextMask.propTypes = {
    inputRef: PropTypes.func.isRequired
};

export default function Input(props) {
    const [focused, setFocused] = useState(false);

    function handleFocus(value) {
        setFocused(value);
        setTimeout(() => {
            document.getElementById("input" + props.id).selectionEnd = 0;
            document.getElementById("input" + props.id).selectionStart = 0;
        }, 10);
    }
    return (
        <Container>
            <TextField
                className="input"
                id={props.id}
                label={props.label}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
                variant="outlined"
                InputProps={{
                    inputComponent: TextMask,
                    inputProps: { id: "input" + props.id, focused }
                }}
            />
        </Container>
    );
}
