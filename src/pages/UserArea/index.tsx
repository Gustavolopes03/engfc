import logo1 from "../../Assets/logo1.png"

import { Page, Content, Header, Logo1,  ContentInfo, UserLevelItem, UserLevel, UserRank, UserHistory, UserHistoryTopTitles, UserHistoryTop, UserHistoryItem, UserHistoryInfo, UserHistoryInfoItem, A } from "./styles"
import { OptionsWrapper, Options } from "../../Components/OpionsItens"

import UserData from "../../DatabasePH/UserArea.json"

export const UserArea = () => {

    return(
        <Page className="page" >
            <Header>
                <Logo1 src={logo1} />
                <A href="/home" >Log Out</A>
            </Header>
            <Content>
                <OptionsWrapper >
                    <Options href="/userArea" >Minhas Conquistas</Options>
                    <Options href="/userChalenges">Exercicios</Options>
                    <Options href="/userForum">Fórum</Options>
                    <Options href="/userExpert">Especialistas</Options>
                </OptionsWrapper>
                <ContentInfo>
                    <UserLevelItem>
                        <UserLevel>
                            {UserData.UserData.level}
                        </UserLevel>
                        <UserRank>
                            {UserData.UserData.levelrank}
                        </UserRank>
                    </UserLevelItem>
                    <UserHistory>
                        <UserHistoryItem>
                            <UserHistoryTop>
                                <UserHistoryTopTitles>Data</UserHistoryTopTitles>
                                <UserHistoryTopTitles>Título</UserHistoryTopTitles>
                                <UserHistoryTopTitles>Pontuação</UserHistoryTopTitles>
                            </UserHistoryTop>
                        </UserHistoryItem>  
                        <UserHistoryInfo>
                            {UserData.UserData.userClasses.map((item)=>{
                                return(
                                <UserHistoryInfoItem>
                                    <p>{item.date}</p>
                                    <p>{item.title}</p>
                                    <p>{item.points}</p>
                                </UserHistoryInfoItem>
                                )
                            })}
                        </UserHistoryInfo>
                    </UserHistory>
                </ContentInfo>
            </Content>
        </Page>
    )
}