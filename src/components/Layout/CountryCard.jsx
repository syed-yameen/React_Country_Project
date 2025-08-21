import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country;
    return (
        <li className="country-card" >
            <div className="container-card bg-white-box">
                <img src={flags.svg} alt={flags.alt} />

                <div className="countryInfo">
                    <p className="card-title">
                        {name.common.length > 10 ?
                            name.common.slice(0, 12) + "..." : name.common}</p>

                    <p><span className="card-description">Population:</span> {population}</p>

                    <p><span className="card-description">Region:</span>{region}</p>

                    <p><span className="card-description"> Capital</span> {capital[0]}</p>

{/* when u click the button, it should navigate to the country details page, with the country name in the URL because the country name is dynamic. and the URL will be /country/${name.common} where ${name.common} is the dynamic part */}
                   <NavLink to={ `/country/${name.common}`} ><button> Read more..</button></NavLink>

                </div>
            </div>
        </li>
    )
}