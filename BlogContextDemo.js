import React,{useContext} from 'react';
import { BlogContext } from './App';
function BlogContextDemo(){
    const bloginfo=useContext(BlogContext);
    return(
        <div>
            <p><h2>Topic:{bloginfo.React.post}</h2></p>
            <p><h2>authour:{bloginfo.React.author}</h2></p>
        </div>
    )
}
export default BlogContextDemo;