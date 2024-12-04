import React from 'react'
import Section1 from '../../Components/Section1'
import Section2 from '../../Components/Section2'
import { Section3 } from '../../Components/Section3'
import { Section4 } from '../../Components/Section4'
import Section5 from '../../Components/Section5'
import { Section6 } from '../../Components/Section6'
import { MessageBubble } from '../../Components/MessageBubble'
// import { Chatbot } from '../../Components/Chatbot'
import { Chatbot } from '../../Components/ChatBot'
export const HomeScreen = () => {
  return (
    <>
    <Section1/>
    <Section3/>
    <Section2/>
    <Section5/>
    
    <Section6/>
    <Chatbot/>
    </>
    

)
}
