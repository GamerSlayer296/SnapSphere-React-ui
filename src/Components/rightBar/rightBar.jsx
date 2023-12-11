import './rightBar.scss'

const RightBar = () => {
    return(
        <div className='rightBar'>
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="" /> 
                            <span>Shuaib Jacobs</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="" /> 
                            <span>Ibrahim Parker</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>      
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activites</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="" /> 
                            <p>
                            <span>Ibrahim Parker</span> changed their cover picture.
                            </p>
                        </div> 
                        <span>1 min ago</span> 
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="" /> 
                            <p>
                            <span>Ibrahim Parker</span> changed their cover picture.
                            </p>
                        </div> 
                        <span>1 min ago</span> 
                    </div> 
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="" /> 
                            <p>
                            <span>Ibrahim Parker</span> changed their cover picture.
                            </p>
                        </div> 
                        <span>1 min ago</span> 
                    </div>   
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="" /> 
                            <p>
                            <span>Ibrahim Parker</span> changed their cover picture.
                            </p>
                        </div> 
                        <span>1 min ago</span> 
                    </div>   
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="" /> 
                            <p>
                            <span>Ibrahim Parker</span> changed their cover picture.
                            </p>
                        </div> 
                        <span>1 min ago</span> 
                    </div>        
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="" /> 
                            <div className='online' />
                            <span>Shuaib Jacobs</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="" /> 
                            <div className='online' />
                            <span>Shuaib Jacobs</span>
                        </div>
                    </div> 
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="" />
                            <div className='online' />
                            <span>Shuaib Jacobs</span>
                        </div>
                    </div> 
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                            alt="" />
                            <div className='online' />
                            <span>Shuaib Jacobs</span>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );

};

export default RightBar;