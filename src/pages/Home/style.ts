import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


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
export const Login = styled.a `
    float: right;
    margin-block: 4vh;
    margin-right: 30px;
`

export const Top = styled.div `
    background-image: url(http://www.prosctec.com.br/img/bg1.png);
    background-size: cover;
    color: #ffffff;
    padding-bottom: 7vh;
`
export const TopTitle = styled.h1 `
    text-align: center;
    padding: 50px 30px;
    color: #81D5FA;
`
export const TopInfo = styled.div `
    color: #f1f1f1;
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: baseline;
    justify-content: center;
`
export const TopText = styled.div `
    flex-basis: 30vw;
    margin-inline: 2vw;
`
export const TopTextP = styled.p `
    color: #81D5FA;
`
export const TopInputWrapper = styled.div `
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
`
export const TopInputTitle = styled.div `
    height: 5vh;
    display: inline-table;
    margin-inline: 2vw;
    padding-inline: 1vw;
    text-align: center;
    color: #000000;
    background: #81D5FA;
    border-radius: 10px;
`
export const TopInputForm = styled.div `
`
export const TopInputTag = styled.h4 `
    margin-inline: 1vw;
    margin-block: 2vh 1vh;
    text-align: left;
    color: #ffffff;
`
export const TopInput = styled.input `
    width: -webkit-fill-available;
    height: 5vh;
    border-radius: 10px;
    border: none;
    margin-inline: 1vw;
    padding: 1vh 1vw;
    font-size: medium;
`
export const TopSubmit = styled.input `
    width: -webkit-fill-available;
    height: 65px;
    border-radius: 10px;
    border: none;
    margin: 1vw;
    padding: 1vh 1vw;
    background: #D53C37;
    color: #ffffff;
    letter-spacing: 3px;
    font-size: medium;
`


export const Mid = styled.div `
    background-image: url(http://www.prosctec.com.br/img/bg2.png);
    background-size: cover;
    background-position: top left;
    padding-bottom: 7vh;
`
export const MidWrapper = styled.form `
    width: 95%;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin: auto;
`
export const MidItem = styled.div `
    display: flex;
    flex-basis: 44vw;
    flex-wrap: wrap;
    color: #ffffff;
    text-align: center;
    justify-content: center;
    padding: 10px;
`
export const MidIcon = styled.div `
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 2px solid #81D5FA;
    font-size: 45px;
    color: #ffffff;
`
export const MidTitle = styled.h4 `
    width: 100%
`
export const P = styled.p `
    width: 100%;
`

export const Pq = styled.div `
    width: 100%;
    display: flex;
`
export const PqImage = styled.div `
    background-image: url(http://www.prosctec.com.br/img/bg3.jpg);
    background-position: right top;
    background-size: cover;
    background-repeat: no-repeat;
    height: 412px;
    width: 500px;
`
export const PqText = styled.div `
    margin: auto;
    color: #1976D3;
    margin-left: 2vw;
`
export const PqListItem = styled.div `
    display: flex;
    align-items: center;
`

export const PqTitle = styled.h2 `
    width: 100%;
    color: black;
    text-align: center;
    align-self: center;
`
export const PqTextP = styled.p `
    margin-left: 10px;
    color: black;
`


export const Foot = styled.footer `
    width: 100%;
    height: 17vh;
    background-color: #81D5FA;
    display: flex;
    justify-content: space-around;
`
export const FLogo = styled.img `
    align-self: center;
    height: 10vh;
`
export const FItem = styled.div `
    align-self: center;
    text-align: center;
`
export const FLink = styled.a `
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