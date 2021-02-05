import React, { useState, useEffect } from "react";
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState("");
  const [ results, setResults ] = useState([]);

  const onChangeTerm = (event) => setTerm(event.target.value);

  useEffect(() => {
      const searchWiki = async() => {
          await axios.get("https://en.wikipedia.org/w/api.php", {
              params: {
                  action: 'query',
                  list: 'search',
                  origin: '*',
                  format: 'json',
                  srsearch: term,
              }
          }).then(response => {
              setResults(response.data.query.search);
          });
      }

      if(term && !results.length) {
        searchWiki();
      } else {
        const timeOutId = setTimeout(() => {
          if(term) {
            searchWiki();
          }
        }, 1000);
  
        return () => {
          clearTimeout(timeOutId);
        }
      }   
      
  }, [term])

  const arrayOfResults = results.map(result => {
      return (
          <div key={result.pageid} className="item">
            <div className="right floated content">
              <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank">Go</a>
            </div>
              <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
              </div>
          </div>
      )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search term</label>
          <input className="input" value={term} onChange={onChangeTerm} />
        </div>
      </div>
      <div className="ui celled list">
            {arrayOfResults}
      </div>
    </div>
  );
};

export default Search;
