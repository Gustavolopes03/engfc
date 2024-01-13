import styled from "styled-components"

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
export const A = styled.a `
    float: right;
    margin-block: 6vh;
    margin-right: 4vw;
    background-color: #D53C37;
    padding: 2vh;
    border-radius: 100px;
    color: ghostwhite;
`

export const Content = styled.div `
    position: fixed;
    display: flex;
    top: 20vh;
    width: 100%;
    height: 100%;
`
export const ContentInfo = styled.div `
    width: 100%;
    overflow: auto;
`
export const ChalengesWrapper = styled.div `
    display: flex;
    flex-basis: auto;
`
export const ChalengesItens = styled.div `
    flex-basis: auto;
`
export const ChalengesItensImg = styled.img `
    width: 100%;
`
export const ChalengesItensTitle = styled.h3 `
    width: fit-content;
`

export const Options = styled.a `
    margin: 1vw;
    color: #000000;
`