export const MessageBubble = ({ text, isUserMessage }) => {
	return (

		<div
			className={`flex items-center p-4 my-2 rounded-lg ${isUserMessage === 'ai' ? "bg-gray-700 text-black self-end mr-auto" : "bg-green-700 text-gray-800 self-start ml-auto"
				}`}
		>
			<p>
				{text}
			</p>
		</div>

	)


}