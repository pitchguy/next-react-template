import './index.less';

export default (props) => {
    const getYear = new Date().getFullYear();
    
    return (
        <div className="nextFooter">
            <b>©Copyright </b>
            {getYear} 杭州XX科技有限公司 浙ICP备15044486号-1
        </div>
    )
}