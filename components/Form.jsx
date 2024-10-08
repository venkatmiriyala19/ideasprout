import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} </span>
      </h1>
      <p className="desc text-left max-w-md">
        Join a vibrant community of thinkers and creators, and help nurture
        ideas that can transform concepts into reality.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl fkex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Idea
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Contribute your thoughts here..."
            required
            className="form_textarea mb-5"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700 ">
            Tag
            <span className="font-normal ">
              (#product, #improvethis, #innovative)
            </span>
          </span>

          <textarea
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          ></textarea>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4 mt-5">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
