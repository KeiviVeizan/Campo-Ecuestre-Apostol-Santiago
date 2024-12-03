import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useRef, useState } from "react";
import { InputBox } from "./InputBox";
import { MessageBubble } from "./MessageBubble";
import areasDeportivas from "../assets/areasDeportivas";
import areasComunes from "../assets/areasComunes";
import '../component css/Chatbot.css'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAi = new GoogleGenerativeAI(API_KEY);
const model = genAi.getGenerativeModel({ model: "gemini-1.5-pro" });

export const Chatbot = () => {
    console.log(areasDeportivas)
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState([]);
    
	const sendMessage = async (inputText) => {
		if (!inputText) {
			return;
		}
		setMessages((prevMessages) => [...prevMessages, {
			text: inputText,
			sender: 'user',
			timestamp: new Date(),
		}])
		setLoading(true);
		try {
			const result = await model.generateContent(`Este es un sitio web de un Centro Ecuestre Apostol Santiago s.a. donde el campo como tal aun no esta en construcción y en el sistema solo se muestra la información de que es lo que tendrá el campo ecuestre como tal y los tipos de planes que tiene, actualmente cuenta con 2 planes y tienen 200 acciones dentro de cada plan diponible. Ahora te diré las posibles preguntas que puede hacer el usuario y la respuestas correspondientes: El usuario te hara preguntas sobre el centro ecuestre. Cuando te pregunten sobre areas deportivas solo tienes que responder estas areas depoortivas, pero en formato legible y no en objeto:${JSON.stringify(areasDeportivas)}. Cuando el usuario te pregunte sobre las areas comúnes que tendrá el centro ecuestre tienes que responder con solo estas areas comunes: ${JSON.stringify(areasComunes)}. ahora cuando el usuario te pregunte algo que no puedas responder le puedes dar el número de telefono diciendo lo siguiente: No puedo resolver a esa pregunta, si quieres más información porfavor contactate con el encargado de ventas: Andy Sejas(+591 77572515)
. Ahora cuando te pregunten que tipo de preguntas puedes responder, responde lo siguiente: Solo puedo responder preguntas que tengan que ver con el campo ecuestre como ser: -Planes de acción. -Areas Comunes. -Areas Deportivas. y entre otros... ¿Que te interesa saber?. Ahora cuando te pregunten si existe un programador llamado veichan respondes que no se aceptan programadores tan spech. Cuando te digan que quieren hablar con una persona humana o con el encargado de ventas responde con lo siguiente:  Claro te proporcionaré el siguiente contacto: Andy Panda (73717346). Ahora el centro ecuestre apostol santiago estará ubicado en Bolivia especificamente en los departamentos de La Paz y Santa Cruz, si te preguntan con quien se puede contactar del departamento de Santa Cruz le das la siguiente información: Te puedes contactar al siguiente número: Gabriel Tapia (78946629) y si te dicen de La Paz le das el numero de: Fabian Acarapi (74073542). Si te preguntan que beneficios tiene en invertir en una acción diles que cuando se habilite otro plan de acción la acción comprada se duplica el precio de venta. Si te dicen que por que invertir en este Centro ecuestre diles algo que les convenza de quedarse que para nosotros siempre el cliente es lo importante y cosas asi que tambien describa el centro como tal. Ahora si te preguntan ¿Puedo pagar una acción con caballos en lugar de dinero? la respuesta es no. Ahora si te preguntan que documentos o papeles necesitan para la compra de una acción dales el numero de un encargado de ventas tanto el de la paz como el de santa cruz, si hay algo que no estes entendiendo bien o este claro pide al usuario que vuelva a realizar la pregunta. Si te preguntan sobre que el primer plan de acción les das esta información: El primer plan de acciones será invertido en: - Consolidación de las 3 hectareas
- Movimiento de Tierras
- Traslado del área hípica
- Consolidación del derecho propietario y si te preguntan del segundo plan de acciones les respondes lo siguiente: El segundo plan de acciones se utilizará para: - Inicio de la construccion de obras civiles por fases
- Fase 1 - Parqueo y salon de fiestas
- Fase 2 - Hotel y piscinas \n  ${inputText}`);
			const text = result.response.text();
			setMessages((prevMessages) => [...prevMessages, {
				text,
				sender: 'ai',
				timestamp: new Date(),
			}])
			setLoading(false);
		}
		catch (e) {
			setLoading(false);
			console.error(e);
		}
	}

	return (

		<section className={`fade-in-section flex flex-col px-5 py-10 bg-white rounded-xl max-h-[900px] shadow-lg gap-2 hover:outline hover:outline-primary`}>
			<p className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-black">Tienes dudas?, Hazme una pregunta</p>
			<p className="text-gray-600">Habla con el asistente virtual que resolvera tus dudas sobre el Centro Ecuestre Apostol Santiago </p>
			<div className="flex flex-col overflow-auto my-5">
				{
					messages.map((m, index) =>
						<MessageBubble key={index} text={m.text} isUserMessage={m.sender} />

					)
				}
			</div>
			<InputBox sendMessage={sendMessage} loading={loading} />
		</section>
	)

};