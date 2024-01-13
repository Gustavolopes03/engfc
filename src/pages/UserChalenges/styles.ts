import styled from "styled-components"

import Chalenges from "../../DatabasePH/Chalenges.json"

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
export const ChalengesItens = styled.button `
    color: black;
    flex-basis: auto;
    background-color: white;
    margin: 20px;
    border-radius: 100px;
    border: solid;'
`
export const ChalengesItensTitle = styled.h3 `
    width: fit-content;
    margin: 20px;
`

export const ChalengesOptions = styled.a `
    margin: 1vw;
    color: #000000;
    display: none;
`