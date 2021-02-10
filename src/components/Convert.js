import React, { useState, useEffect } from "react";
import axios from "axios";
import GOOGLE_API from "../api/api";

const Convert = ({ language, text }) => {
  const [translate, setTranslate] = useState("");

  useEffect(() => {
    const translation = async () => {
      const response = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: GOOGLE_API,
          },
        }
      );

      setTranslate(response.data.data.translations[0].translatedText);
    };

    translation();
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{translate}</h1>
    </div>
  );
};

export default Convert;
