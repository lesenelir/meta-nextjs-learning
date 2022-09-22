import {useRouter} from "next/router"

function ClientProjectsPage() {
  const router = useRouter()

  const loadProjectHandler = () => {
    router.push(`/clients/max/projecta`)
  }

  return (
    <>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </>
  )
}

export default ClientProjectsPage
