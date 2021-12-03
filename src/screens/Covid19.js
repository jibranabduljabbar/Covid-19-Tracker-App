import '../App.css';
import React, { useEffect, useState } from 'react';

function Covid19App() {
      const [country, setCountry] = useState(null);
      const [search, setSearch] = useState("Pakistan");  



function Search(){
    const search = document.getElementById('search').value;
    setSearch(search)
    setCountry(null);
    
}

    useEffect(() => {
        const fetchApi = async () => {
          const url = `https://corona.lmao.ninja/v2/countries/${search}`
          const response = await fetch(url);
          const resJson = await response.json();
          setCountry(resJson)
        }
        fetchApi()
      }, [search])
  return (
    <>

      <div className="mainn">

<br />
<br/>
        <div className="inputdata">
          <input
            className="input"
            placeholder="Enter Country Name..."
            type="search"
            id="search"
          />
          <br />
          <button onClick={() => Search()} className={"btn"}>Search</button>
        </div>
        <br/>
        {!country ? (
          <p className="temp" error>No Data Found</p>
        ) : (
            <div className="hy">
              <br />
              <h1 className="temp">
                {search}
              </h1>
              <br />
              <h3 className="temp">
                Total Cases : {country.cases}
              </h3>
              <br />
              <h3 className="temp">Deaths :  {country.deaths}</h3>
              <br />
              <h3 className="temp">Recovered : {country.recovered}</h3>
              <br />
              <h3 className="temp">Critical Condition : {country.critical}</h3>
              <br />
              <h3 className="temp">Cases Reported Today : {country.todayCases}</h3>
              <br />

            </div>
          )}

      </div>

    </>


  );
}

export default Covid19App;
