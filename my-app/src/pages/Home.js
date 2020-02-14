import React, { useState, useEffect } from "react";


function Search() {
//   const [name, setName] = useState('');
 

//   // When the component mounts, update the title to be Wikipedia Searcher
//   useEffect(() => {
//     API.searchTerms(search)
//       .then(res => {
//         if (res.data.length === 0) {
//           throw new Error("No results found.");
//         }
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         setTitle(res.data[1]);
//         setDescription(res.data[2][0]);
//         setUrl(res.data[3][0]);
//       })
//       .catch(err => setError(err));
//   }, [search]);
//   const handleInputChange = event => {
//     setSearch(event.target.value);
//   };

//   return (
//     <div>
//       <Container style={{ minHeight: "100vh" }}>
//         <h1 className="text-center">Search For Anything on Wikipedia</h1>
//         <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
//           {error}
//         </Alert>
//         <SearchForm
//           handleInputChange={handleInputChange}
//           results={search}
//         />
//         <SearchResults
//           title={title}
//           description={description}
//           url={url}
//         />
//       </Container>
//     </div>
//   );
// }
export default Search;