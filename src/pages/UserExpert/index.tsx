import logo1 from "../../Assets/logo1.png"

import { Page, Content, Header, Logo1, OptionsWrapper, Options } from "./styles"

export const UserExpert = () => {
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
                <h1>Onde eu to?</h1>
            </Content>
        </Page>
    )
}