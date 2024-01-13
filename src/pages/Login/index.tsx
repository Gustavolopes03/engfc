import logo1 from "../../Assets/logo1.png"


import { Header, Logo1, Icons, Title, Foot, Content, FIndex, FTitle , Input, Tag, InputWrapper, TopLink, Submit, Page, Reg, FIcons } from './style';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

        function handleMenu() {
            console.log("foi")
        }
export const Login = () => {    

    return(
        <Page>
            <Header>
                <a href="/Home">
                    <Logo1 src={logo1}/>
                </a>
                <Reg href="/Home"><h2>Cadastro</h2></Reg>
            </Header>
            <Content>
                <InputWrapper>
                    <Title>Login</Title>
                    <Tag>Username</Tag>
                    <Input/>
                    <Tag>Password</Tag>
                    <Input type="password" />
                    <Submit type="submit" value="Login" />
                </InputWrapper>
            </Content>
            <Foot>
                <FTitle>
                    <a href="/home" >Mais Informações</a>
                </FTitle>
                <FIndex>
                    <FTitle>Redes</FTitle>
                    <FIcons href="">
                        <FontAwesomeIcon icon={faInstagram} />
                    </FIcons>
                    <FIcons href="">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </FIcons>
                    <FIcons href="">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </FIcons>
                </FIndex>
                <FIndex>
                    <FTitle>Email</FTitle>
                    <a>prosctecnologia@gmail.com</a>
                </FIndex>
            </Foot>
        </Page>
    )
}