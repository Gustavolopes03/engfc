import styled, { keyframes } from "styled-components";

export const Page = styled.div `
    display: grid;
    width: 100%;
    position: fixed;
`

export const Header = styled.header `
    height: 10%;
`
export const Logo1 = styled.img `
    height: 15vh;
    display: flex;
    float: left;
    margin: 20px 25px;
`
export const Reg = styled.a `
    float: right;
    margin-block: 4vh;
    margin-right: 30px;
`

export const TopLink = styled.a `
    float: right;
    padding: 2vh;
    color: #181818;
`


export const Content = styled.div `
    background-image: url(http://www.prosctec.com.br/img/bg1.png);
    background-size: cover;
    height: 67vh;
    color: #ffffff;
`

export const InputWrapper = styled.div `
    padding-top: 2vh;
    padding-left: 5vh;
`

export const Title = styled.h1 `
    display: flex;
`

export const Tag = styled.h4 `
    position: relative;
    display: flex;
    height: 3vh;
    width: 45vh;
    margin: 3vh;
`

export const Input = styled.input `
    position: relative;
    display: flex;
    height: 5vh;
    width: 40vw;
    border-radius: 20px;
    margin: 3vh;
    padding-inline-start: 3vh;
`
export const Submit = styled.input `
    height: 10vh;
    border-radius: 20px;
    width: 40vw;
    margin: 3vh;
    background: #D53C37;
    color: #ffffff;
    font-size: 1.3em;
    font-weight: 600;
    letter-spacing: 3px;
    border: none;
`


export const Foot = styled.footer `
    width: 100%;
    height: 25vh;
    background-color: #81D5FA;
    display: flex;
    justify-content: space-around;
`
export const FIndex = styled.a `
    text-align: center;
    color: #ffffff;
    float: right;
`
export const Icons = styled.img `
    height: 3vh;
    padding: 1vh;
    margin-inline: 1vw;
    border-radius: 100px;
    background: #1976D3;
    overflow: visible;
`
export const FTitle = styled.h3 `
    margin-top: 2%;
    color: #181818;
`
export const FIcons = styled.a `
    padding: 10px;
    margin: 5px;
    border-radius: 100px;
    background: #1976D3;
    color: #ffffff;
`