import styled, { keyframes } from "styled-components"

const animate = 0;

export const Page = styled.div `
    display: grid;
`

export const Header = styled.header `
    display: flow;
`
export const Logo1 = styled.img `
    height: 15vh;
    display: flex;
    float: left;
    margin: 20px 25px;
`

export const Content = styled.div `
`
const close = keyframes`
left: -20vw;
`
const open = keyframes`
    left: 0vw;
`
export const OptionsWrapper = styled.div `
    height: 100%;
    width: fit-content;
    position: fixed;
    padding: 1vw;
    background-color: #81D5FA;
    display: grid;
    grid-auto-rows: min-content;
` 

export const Options = styled.a `
    margin: 1vw;
    color: #000000;
`