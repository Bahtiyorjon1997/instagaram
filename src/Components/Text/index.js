import React from "react";
import styled from "styled-components";

const Text = () => {
    return (
        <TextWrapper>
            <h2>Sugessions for you</h2>
        </TextWrapper>
    )

}
export default Text;

const TextWrapper = styled.div`
    margin: 0;
    padding: 1rem 1rem;
    width: calc(100% - 80rem);
    margin-left: 40rem !important;
    font-size: 0.7rem;
    font-weight: light;
    font-family: 'Nunito', sans-serif;
`