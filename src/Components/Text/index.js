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
    margin: 0 auto;
    padding: 1rem 0;
    width: 100%;
    font-size: 0.7rem;
    font-weight: light;
    font-family: 'Nunito', sans-serif;
`