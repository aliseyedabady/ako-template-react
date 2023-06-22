import { useMutation, useQuery, useQueryClient } from "react-query";
import "./Assets/styles/index.scss";
import { Login } from "./Components/Auth";
import FormV1 from "./Components/Form-v1";
import Routing from "./Components/Routing";
import { authRouter } from "./Router";
const wait = duration => {
  return new Promise(res => setTimeout(res, duration));
};
const POSTS = [{ name: "ali" }, { name: "reza" }, { name: "javad" }];
function App() {
  const queryClient = useQueryClient();

  // انقدر تکرار میشه بعد از خطا تا ب نتیجه درست برسه
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  const newPost = useMutation({
    mutationFn: name => {
      return wait(1000).then(() => {
        POSTS.push({ name });
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
  console.log("d", postsQuery.isFetching);
  if (postsQuery.isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (postsQuery.isError) {
    return <h1>Error ...</h1>;
  }
  return (
    <div>
      {postsQuery.data.map(item => {
        return (
          <div key={item.key}>
            <p>{item.name}</p>
          </div>
        );
      })}
      <button onClick={() => newPost.mutate("new Post")}>
        {newPost.isLoading ? <>Loading ...</> : <>Add New</>}
      </button>
    </div>
  );
}

export default App;
