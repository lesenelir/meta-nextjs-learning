function UserIdPage(props) {
  return (
    <>
      <h1>{props.id}</h1>
    </>
  )
}

// SSR 会根据用户的每一次请求，来进行预渲染生成HTML返回给前台
export async function getServerSideProps(context) {
  const {params} = context
  const userId = params.uid

  return {
    props: {
      id: 'userid-' + userId
    }
  }
}

export default UserIdPage
