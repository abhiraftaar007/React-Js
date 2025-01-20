import { useEffect, useState } from "react";

/*
Example Explained 
We have created a new file called useFetch.js containing a function called useFetch which contains all of the logic needed to fetch our data.
We removed the hard-coded URL and replaced it with a url variable that can be passed to the custom Hook.
Lastly, we are returning our data from our Hook.

In index.js, we are importing our useFetch Hook and utilizing it like any other Hook. This is where we pass in the URL to fetch data from
Now we can reuse this custom Hook in any component to fetch data from any URL.
*/
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
