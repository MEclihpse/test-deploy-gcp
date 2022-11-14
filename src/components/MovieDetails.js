import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MovieDetails() {
  const {loading, error, singleMovie} = useSelector(state => state.movieReducer)
  
    return (
    <section className="container mx-auto py-4 grid grid-cols-4 grid-flow-row gap-4 md:container md:mx-auto">
      <img
        className="object-cover rounded-lg w-96"
        src={singleMovie.imgUrl}
        alt=""
      />
      <div className="p-5 col-span-2">
        <h4 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {singleMovie.title}
        </h4>
        <h5 className="mb-2 text-xl font-normal tracking-tight text-gray-900 dark:text-white">
          Genre: {singleMovie.Genre.name}
        </h5>
        <p className="text-xl mb-3 font-normal text-gray-700 dark:text-gray-400">
          {singleMovie.synopsis}
        </p>
        <a
          href={singleMovie.trailerUrl}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Trailer
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div>
        <h5 className="mb-2 text-xl font-normal tracking-tight text-gray-900 dark:text-white">
          List Casts
        </h5>
        <ul>
            {singleMovie.Casts.map((el, i) => {
                return (
                <li>
                    {i + 1}. <Link>{el.name}</Link>
                </li>)
            })}
        </ul>
      </div>
    </section>
  );
}