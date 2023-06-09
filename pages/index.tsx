import axios from "axios";
import { useState, useEffect } from "react";
import Next from "./api/Next";
import { paginates } from "./api/utils";

const Home = () => {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res)
    }
    getPosts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatePosts = paginates(posts, currentPage, pageSize);


  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Delete</th>
           
          </tr>
        </thead>

        <tbody>
          {paginatePosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              
              <td>
                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}


        </tbody>

      </table>

      <Next items={posts.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}></Next>
  

    </div>
   

   
  )
}
export default Home;