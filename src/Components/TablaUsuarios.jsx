function TablaUsuarios() {
  return (
    <>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-6xl">
        <h3 className="text-lg font-medium mb-4 text-black text-center">
          Los interesados son:
        </h3>
        <div className="space-y-4 overflow-x-auto">
          <div className="grid grid-cols-4 gap-6 bg-gray-200 p-4 rounded-t-md font-bold text-black text-center">
            <span>Nombre</span>
            <span>Número</span>
            <span>Email</span>
            <span>Plan</span>
          </div>
          {interested.map((person, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-4 gap-6 bg-white p-4 rounded-md shadow-sm border-b"
            >
              <span className="text-black font-medium">{person.username}</span>
              <a
                href={`https://wa.me/${person.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {person.phone}
              </a>
              <span className="text-black">{person.email}</span>
              <span className="text-black font-medium">{person.plan}</span>
            </div>
          ))}
        </div>
      </div>
      <table>
        <thead>
            <th>Nombre</th>
            <th>numero</th>
            <th></th>
            <th></th>
        </thead>
      </table>
      </>
  )
}

export default TablaUsuarios