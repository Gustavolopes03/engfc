import logo1 from "../../Assets/logo1.png"
import logo2 from "../../Assets/logo2.png"

import { Mid, Pq, Top, Logo1, Page, TopTitle, TopText, TopInfo, TopTextP, TopInputWrapper, TopInputTitle, TopInputForm, TopInputTag, TopInput, TopSubmit, MidItem, MidIcon, MidWrapper, MidTitle, P, PqImage, PqText, PqTextP, PqTitle, PqListItem, FTitle, FLink, Foot, FItem, FLogo, FIcons, Header, Login } from "./style"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faEnvelope, faLineChart, faStar, faHandshake  } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

import { useState } from "react"

export const Home = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ cel, setCel ] = useState('')
    const [ city, setCity ] = useState('')
    
    return(
        <Page>
            <Header>
                <Logo1 src={logo1}/>
                <Login href="/Login"><h2>Login</h2></Login>
            </Header>
            <Top>
                <TopTitle>Transforme seu imóvel irregular em um ativo valorizado!</TopTitle>   
                <TopInfo>
                    <TopText>
                        <h2>Regularize seu imóvel com a ajuda de engenheiros especializados e aumente seu patrimônio.</h2>
                    
                        <h3>Você sabia?</h3>
                        <TopTextP>
                                50% dos imóveis no Brasil estão irregulares, o que pode desvalorizar seu patrimônio em até 30% e gerar incertezas jurídicas.
                                Regularizar seu imóvel não só traz segurança jurídica, mas também aumenta seu valor de mercado, tornando-o um investimento ainda mais valioso.
                        </TopTextP>
                    </TopText>
                        <TopInputWrapper>
                            <TopInputTitle>
                                <h2>Quero regularizar meu imóvel!</h2>
                            </TopInputTitle>
                            
                            <TopInputForm>      
                                <TopInputTag>*Nome Completo</TopInputTag>
                                <TopInput type="text" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                
                                <TopInputTag>*E-mail</TopInputTag>
                                <TopInput type="email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                                <TopInputTag>*Senha</TopInputTag>
                                <TopInput type="password" required name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                
                                <TopInputTag>Telefone</TopInputTag>
                                <TopInput type="text" name="cel" value={cel} onChange={(e) => setCel(e.target.value)}/>
                                
                                <TopInputTag>Cidade</TopInputTag>
                                <TopInput type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                                
                                <a href="/userArea"><TopSubmit id='cadastrar' type="submit" value="CADASTRAR"></TopSubmit></a>
                            </TopInputForm>  
                        </TopInputWrapper>
                    </TopInfo>   
            </Top>
   
            <Mid>
                
                <MidWrapper>

                    <MidItem>
                        <MidTitle>Transparência</MidTitle>
                        <MidIcon><FontAwesomeIcon icon={faHandshake} /></MidIcon>
                        <P>Regemo-nos pelos valores e princípios da transparência e integridade entre todos. </P>
                    </MidItem>
                    
                    <MidItem>
                        <MidTitle>Valorização</MidTitle>
                        <MidIcon><FontAwesomeIcon icon={faLineChart} /></MidIcon>
                        <P>O imóvel regularizado é sinônimo de imóvel valorizado.</P>
                    </MidItem>
                    
                    <MidItem>
                        <MidTitle>Inovação</MidTitle>
                        <MidIcon><FontAwesomeIcon icon={faStar} /></MidIcon>
                        <P>Nossos engenheiros são especialistas, trazendo inovação e conhecimento atualizado para o processo de regularização.</P>
                    </MidItem>

                </MidWrapper>

   </Mid>
   
   <Pq>
           <PqImage/>
           <PqText>
                <PqTitle>Por que nós?</PqTitle>
                    <PqListItem>
                        <FontAwesomeIcon icon={faCircle} />
                        <PqTextP>Experiência descomplicada</PqTextP>
                    </PqListItem>
                    <PqListItem>
                        <FontAwesomeIcon icon={faCircle} />
                        <PqTextP>Conexão qualificada</PqTextP>
                    </PqListItem>
                    <PqListItem>
                        <FontAwesomeIcon icon={faCircle} />
                        <PqTextP>Negociação direta com o especialista</PqTextP>
                    </PqListItem>
                    <PqListItem>
                        <FontAwesomeIcon icon={faCircle} />
                        <PqTextP>Valorização garantida</PqTextP>
                    </PqListItem>

           </PqText>
   </Pq>
   
   <Foot>     
                <FLogo src={logo2} alt=""/>
                <FItem>
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
                </FItem>
                <FItem>
                    <FTitle>Email</FTitle>
                    <a>prosctecnologia@gmail.com</a>
                </FItem>
       
   </Foot>
        </Page>
    )
}

