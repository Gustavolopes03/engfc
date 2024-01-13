import logo1 from "../../Assets/logo1.png"
import bg1 from "../../Assets/bg1.png"
import bg3 from "../../Assets/bg3.jpg"

import { Page, Content, Header, Logo1, A, ChalengesWrapper, ChalengesItens, ChalengesItensTitle, ChalengesItensImg, ContentInfo } from "./styles"
import { OptionsWrapper, Options } from "../../Components/OpionsItens"

import Chalenges from "../../DatabasePH/Chalenges.json"

export const UserChalenges = () => {
    function Menu () {
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
                                    <ChalengesItens>
                                        <ChalengesItensTitle>
                                            {item.title}
                                        </ChalengesItensTitle>
                                        <ChalengesItensImg src={item.img} />
                                    </ChalengesItens>
                                )
                            })}
                    </ChalengesWrapper>
                </ContentInfo>
            </Content>
        </Page>
    )
}