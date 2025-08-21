import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loaders } from "../components/UI/Loaders";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  //1.
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      //  console.log(res.data);
      setCountries(res.data);

    });
  }, [])

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country //else
  }
  //jo countries, country filter hoke aare, har ek country k name me agar search jo search letters hai  to usku filter kardo

  // 7. func for filter as per region
  const filterRegion = (country) => {
    if (filter === "All") { return country };  //jab filter me"All" hai,do nothing
    return country.region === filter;  //else country k region === filter me jo hai uske
  };

  //5. here is the main logic for search and filter based on regions
  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country))


  // const searchCountry = (country) => {

  //   if (search) {
  //     return country.name.common.toLowerCase().includes(search.toLowerCase())   //return 
  //   }
  //   return country;
  // }

  // const filterCountry = (country) => {
  //   if (filter === "All") return country;    // return
  //   return country.region === filter;
  // }

  // const filterCountries = countries.filter((country) => { return searchCountry(country) && filterCountry(country) })   //return


  if (isPending) return <h1><Loaders /></h1>  //comp in UI
  return (
    <>
      <section className="country-section">
        {/* 2. */}
        <SearchFilter search={search} setSearch={setSearch}
          filter={filter} setFilter={setFilter} countries={countries}
          setCountries={setCountries} />

        <ul className="grid grid-four-cols">
          {
            filterCountries.map((curCountry, index) => {   //6. replace countries with filterCountries

              return <CountryCard country={curCountry}
                key={index} />
            })
          }
        </ul>
      </section>
    </>
  );

};
