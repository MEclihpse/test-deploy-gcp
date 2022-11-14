import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readMovie } from "../store/Actions/movieActions";
import CardMovie from "./CardMovie";
import LoadingCard from "./LoadingCard";

export default function HomeSection() {
    const { movies, loading, error } = useSelector((state) => state.movieReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(readMovie());
    }, []);
  

    return (
    <section className="container mx-auto py-4 grid grid-cols-4 grid-flow-row gap-4 md:container md:mx-auto">
      {
        movies.map(el => {
            if (loading) {
                return (
                    <LoadingCard/>
                )
            } else {
                return (
                    <CardMovie data={el} key={el.id} />
                )
            }
        })
      }   
    </section>
  );
}
