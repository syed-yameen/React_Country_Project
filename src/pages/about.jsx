import countryFacts from "../api/CountryData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">Here are the Interesting Facts
        <br />
        We're proud of
      </h2>

      <div className="gradient-cards">
        {
          countryFacts.map((curcountry) => {
            const { id, country, capital, population, facts } = curcountry;
            return (
              <div className="card" key={id}>
                <div className="container-card" bg-blue-box>
                  <p className="card-title">{country}</p>
                  <p><span className="card-description">Capital:</span>{capital}
                  </p>

                  <p> <span className="card-description"> Population:</span>{population}</p>

                  <p><span className="card-description">Interesting Facts:</span>{facts[0]} also {facts[1]}</p>
                  {/* or {facts} */}

                </div>
              </div>
            );

          })
        }
      </div>

    </section>

  );
};
