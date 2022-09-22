import Link from "next/link";

function Client() {

  const clients = [
    {id: 'max', name: 'maximilian'},
    {id: 'min', name: 'minNum'}
  ]

  return (
    <>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Client
