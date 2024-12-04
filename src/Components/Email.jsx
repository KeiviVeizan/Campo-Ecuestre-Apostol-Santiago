import React from 'react'
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Img } from "@react-email/img";
import { Preview } from "@react-email/preview";
import { Container } from "@react-email/container";
import { Html } from "@react-email/html";
import { Button } from "@react-email/button";


export default function Email() {
    return(
        <>
            <Template/>
            <form method="post">
                <button type="submit"> Enviar correo de prueba </button>
            </form>
        </>
    );
}

const Template = () => (
    <Html>
        <Preview>El email a sido enviado con exito total!</Preview>
        <Section style={{fontFamily: "sans-serif", background: "#fff"}} >
            <Container
                style ={{ background: "#ccdddd",margin: "0 auto",padding: "20px 48px",}}
            >
                <Text Style={{color: "red",fontSize: "2rem",}}>
                    CampoEcuestre.com
                </Text>
                <Text style={{ textTransform: "uppercase", color:"darkgray" }} >
                    Es momento de comprar acciones
                </Text>
                <Text style={{width:"100%", borderRadius: 9}}> 
                    
                </Text>
                <Img 
                    style={{width:"100%", borderRadius: 9}}
                    src="/public/images/logo.svg" alt="Logo del Campo Ecuestre"
                />
                <Section style={{fontFamily:"sans-serif"}} >
                    <Container style={{background: "#fff", margin:"24px auto", padding:"24px 48px", borderRadius:9, marginBotton:0}} >
                        <Text style={{fontSize:"1.2rem", fontWeight:"bold", color:"black"}}>
                            El Campo Ecuestre te da la vienvenida, estamos anciosos de que te unas
                        </Text>
                        <Text style={{color:"black"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro nihil ipsa veritatis officia alias aliquid rem est. Quaerat possimus nam libero necessitatibus consequuntur, cupiditate ipsum quis numquam architecto dicta.
                        </Text>
                        <Button href="http://192.168.100.42:5173/"
                                style={{background:"red", color:"white", padding:"12px 16px", borderRadius: 9,}}
                        >
                            Ver mas inofrmacion
                        </Button>
                    </Container>
                </Section>
            </Container>
            <Container 
                style={{background:"#fff", margin:"0 auto", padding:"0 48px", borderRadius:9,}}
            >
                <Text style={{color:"gray"}}>
                    Campo Ecuestre Apostol Santiago, av Aroma 6969
                </Text>
            </Container>
        </Section>      
    </Html>
);