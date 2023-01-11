export default function Post({ post, setArticle }) {
  return (
    <>
      <a
        href="#"
        onClick={() => {
          setArticle({ display: post.id, object: post });
        }}
        className="m-2 "
        data-aos="fade"
      >
        <div class="max-w-sm w-full h-full lg:max-w-full lg:flex">
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url(${post.img})`,
              backgroundSize: `cover`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            title={post.title}
          ></div>
          <div class="md:h-full sm:h-4/6 h-5/6 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal hover:bg-cyan-50">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">
                {post.title}
              </div>
              <p>By MJ Shelton</p>
              <p class="text-gray-700 text-base">{post.description}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
