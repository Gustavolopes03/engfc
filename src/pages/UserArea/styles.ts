import styled, { keyframes } from "styled-components"

import UserArea from "../../DatabasePH/UserArea.json"

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
    background-color: #9c9c9c;
`

export const ContentInfo = styled.div `
    width: 100%;
    overflow: auto;
`
export const UserLevelItem = styled.div `
    width: 80px;
    height: 80px;
    margin: auto;
    margin-top: 4vh;
    border: floralwhite;
    border-style: solid;
    border-width: 4px;
    border-radius: 100px;
    background-color: ${UserArea.UserData.levelcolor};
    text-align: center;
`
export const UserLevel = styled.h1 `
    height: 100%;
    width: fit-content;
    display: flex;
    margin: auto;
    align-items: center;
`
export const UserRank = styled.h2 `
`
export const UserHistory = styled.div `
    height: 100%;
    background-color: white;
    margin-top: 10vh;
`
export const UserHistoryItem = styled.div `
    width: -webkit-fill-available;
`
export const UserHistoryTop = styled.div `
    display: flex;
    justify-content: space-evenly;
    background-color: #A6E1FA;
`
export const UserHistoryTopTitles = styled.h4 `
    position: relative;
    display: flex;
    margin-inline: 5vw;
`
export const UserHistoryInfo = styled.div `
    display: flex;
    flex-flow: column;
`
export const UserHistoryInfoItem = styled.div `
    display: flex;
    margin-block-start: 4px;
    justify-content: space-evenly;
    background-color: lavender;
`