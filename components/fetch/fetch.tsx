import axios from "axios";
import { useState } from "react";
const Fetch = () => {
  const [data, setData] = useState<string>("");
  const [error, setError] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.get<string>("/info");
      setData(response.data);
    } catch (error) {
      setError("Oops, failed to fetch!");
    }
  };

  return (
    <div>
      {data && <span role="heading">{data}</span>}
      <button disabled={Boolean(data)} onClick={handleClick} role="button">
        Load Greeting
      </button>
      {error && <span role="alert">{error}</span>}
    </div>
  );
};

export { Fetch };
