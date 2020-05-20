const UserList = () => (
    <h2>我是用户列表页123</h2>
);
UserList.getInitialProps = async (props) => {
  console.log(props)
  return {props}
}
export default UserList;