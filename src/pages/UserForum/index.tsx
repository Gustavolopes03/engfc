import logo1 from "../../Assets/logo1.png"
import { OptionsWrapper, Options } from "../../Components/OpionsItens"

import { Page, Content, Header, Logo1 } from "./styles"

export const UserForum = () => {
    function Menu () {
        }
    return(
        <Page>
            <Header>
                <Logo1 src={logo1} />
            </Header>
            <Content>
                <OptionsWrapper >
                    <Options href="/userArea" >Minhas Conquistas</Options>
                    <Options href="/userChalenges">Exercicios</Options>
                    <Options href="/userForum">Fórum</Options>
                    <Options href="/userExpert">Especialistas</Options>
                </OptionsWrapper>
                <h1>Forum</h1>
            </Content>
        </Page>
    )
}