import "./home.scss";
import Stories from './../../Components/stories/stories';
import Posts from './../../Components/posts/posts';

const home = () => {
    return (
        <div className="home">
            <Stories />
            <Posts /> 
        </div>
    )
}

export default home