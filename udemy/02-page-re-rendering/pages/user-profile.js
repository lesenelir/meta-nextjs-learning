// 此处不能预先知道是哪个用户来请求页面

function UserProfilePage(props) {
  return (
      <h1>{props.username}</h1>
  )
}

export default UserProfilePage


// 只在部署后的服务器 or 开发的服务器上执行，不是静态生成的
// 不需要 getStaticPaths
export async function getServerSideProps(context) {
  // const {params, req, res} = context

  return {
    props: {
      username: 'Max'
    }
  }
}

