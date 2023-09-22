import { useEffect, useState } from "react";
import Search from "../components/Search";

import Loyout from "../components/loyout/Loyout";
import Axios from "../utils/httpClinet";
import BeerCard from "../components/BeerCard";
import { HomeStyles } from "../styles/HomeStyle";
import Loader from "../components/loyout/Loader";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [beers, setBeers] = useState([]);
  const [basket, setBasket] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("beer_name") ? searchParams.get("beer_name") : ""
  );

  useEffect(() => {
    getBeers();
    // getSearch()

    if (!beers?.length || search === "") {
      setPage(1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchParams, search, basket]);

  const getBeers = () => {
    // setLoading(true)
    let s = "";
    if (search || search !== "") {
      s = "?beer_name=" + search;
    }

    Axios()
      .get(
        search?.length > 0 || search !== ""
          ? `/v2/beers/${s}`
          : `/v2/beers?page=${page}&per_page=24&`
      )
      .then((res) => {
        if (search?.length > 0 || search !== "") {
          setBeers(res?.data);
        } else {
          setBeers((prev) => [...prev, ...res.data]);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const addFavourites = (items) => {
    let sbaskets = localStorage.getItem("sbaskets");
    sbaskets = JSON.parse(sbaskets?.length ? sbaskets : "[]");

    if (
      sbaskets
        ?.map(({ id }) => {
          return id;
        })
        .includes(items?.id)
    ) {
      const b = sbaskets;
      let l = [];
      b.forEach((obj) => {
        if (obj?.id !== items?.id) {
          l.push(obj);
        }
      });

      sbaskets = l;
      localStorage.setItem("sbaskets", JSON.stringify(sbaskets));
      setBasket(l);
    } else {
      sbaskets = [...sbaskets, items];
      localStorage.setItem("sbaskets", JSON.stringify(sbaskets));
      setBasket(sbaskets);
    }

    {
      console.log(sbaskets, "s");
    }
  };

  // const getSearch = () =>{
  //     setLoading(true)

  //     let s = '';
  //     if(search){

  //       s = '?beer_name=' + search
  //     }

  //   Axios()
  //     .get(`/v2/beers` + s)
  //   .then((res)=>{
  //        setBeers(res?.data)
  //   }).catch((err)=>{
  //        console.log(err)
  //   }).finally(()=>{
  //        setLoading(false)
  //   })
  // }

  const handleScroll = async () => {
    try {
      if (
        window?.innerHeight + document?.documentElement?.scrollTop + 1 >=
        document?.documentElement?.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const HandleChange = (e) => {
    if (e.target.value === null) {
      setSearch(null);
    } else {
      setSearch(e.target.value);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (search !== "") {
      setSearchParams({
        // ...searchParams,
        beer_name: search,
      });
    } else {
      setSearchParams({});
    }
  };

  return (
    <HomeStyles>
      <Loyout>
        {/* <Loader/> */}
        <Search
          HandleChange={HandleChange}
          search={search}
          handleSearch={handleSearch}
        />

        <div className={beers?.length > 0 ? "beersC" : ""}>
          {beers?.length > 0 ? (
            beers?.map((items) => {
              return (
                <>
                  <BeerCard
                    addFavourites={addFavourites}
                    // sbaskets={sbaskets}
                    items={items}
                  />
                </>
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img style={{ width: "300px" }} src="/5203299.jpg" alt="" />
            </div>
          )}
        </div>

        {loading === true && <Loader />}
      </Loyout>
    </HomeStyles>
  );
}
