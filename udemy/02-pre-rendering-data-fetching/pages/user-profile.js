function UserProfilePage(props) {
  return (
    <>
      <h1>{props.username}</h1>
    </>
  )
}


// 获得访问权限，例如：用户携带cookie和标题请求到服务端
// getServerSideProps 需要根据请求去进行预渲染

export async function getServerSideProps(context) {
  console.log(context)
  const {params, req, res} = context


  return {
    props: {
      username: 'Max'
    }
  }
}


export default UserProfilePage
