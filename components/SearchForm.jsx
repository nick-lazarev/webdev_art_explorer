"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SearchForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submit({ keyword, isTitleOnly }) {
    // console.log("Search form:", data); /* TODO: navigate to /artwork?q=... */

    router.push(`/artwork?q=${keyword}&title=${isTitleOnly}`)
  }

  return (
    <form className="searchForm" onSubmit={handleSubmit(submit)}>
        <div>
        <label>
          Keyword{" "}
          <input
            className="field"
            {...register("keyword", {
              required: "Keyword required",
              minLength: {
                value: 3,
                message: "Keyword must be at least 3 characters long"
              }
            })}
          />
        </label>
        </div>
        <div>
        <label>
          <input
            type="checkbox"
            {...register("isTitleOnly", )}
          />
          {" "}search title only
        </label>
        </div>
        <div>
          {errors.keyword && <p className="error">{errors.keyword.message}</p>}
          <button className="button" type="submit">
            Search
          </button>
        </div>
    </form>
  );
}
