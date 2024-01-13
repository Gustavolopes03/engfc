import logo1 from "../../Assets/logo1.png"
import bg1 from "../../Assets/bg1.png"
import bg3 from "../../Assets/bg3.jpg"

import { Page, Content, Header, Logo1, A, ChalengesWrapper, ChalengesItens, ChalengesItensTitle, ContentInfo, ChalengesOptions } from "./styles"
import { OptionsWrapper, Options } from "../../Components/OpionsItens"

import Chalenges from "../../DatabasePH/Chalenges.json"
import styled from "styled-components"

export const UserChalenges = () => {
    function Chalenge (item: any) { 
        console.log(item)
    }
    return(
        <Page>
            <Header>
                <Logo1 src={logo1} />
                <A href="/home" >Log Out</A>
            </Header>
            <Content>
                <OptionsWrapper>
                    <Options href="/userArea" >Minhas Conquistas</Options>
                    <Options href="/userChalenges">Exercicios</Options>
                    <Options href="/userForum">Fórum</Options>
                    <Options href="/userExpert">Especialistas</Options>
                </OptionsWrapper>
                <ContentInfo>
                    <ChalengesWrapper>
                            {Chalenges.map((item)=>{
                                return (
                                    <div>
                                        <ChalengesItens type="button" onClick={Chalenge}>
                                            <ChalengesItensTitle>
                                                {item.title}
                                            </ChalengesItensTitle>
                                        </ChalengesItens>
                                        <ChalengesOptions>{item.q1.question}</ChalengesOptions>
                                    </div>
                                )
                            })}
                    </ChalengesWrapper>
                </ContentInfo>
            </Content>
        </Page>
    )
}