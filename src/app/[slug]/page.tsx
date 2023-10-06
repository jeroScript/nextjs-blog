import MarkdownPreview from "@/components/markdownPreview";
import getPost from "@/services/getPost";

const PostPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const post = getPost(slug);

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-xl font-semibold align-middle flex-row text-center">
        {post.title}
      </h2>
      <div className="flex flex-row align-middle space-x-10 justify-between">
        <h3>{post.category}</h3>
        <span> {post.author}</span>
        <span> {post.date}</span>
      </div>
      <MarkdownPreview source={post.content} />
    </div>
  );
};

export default PostPage;
