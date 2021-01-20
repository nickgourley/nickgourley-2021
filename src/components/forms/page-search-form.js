import React, { useState } from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";

const PageSearchForm = () => {
    const [query, setQuery] = useState('');

    const data = useStaticQuery(graphql`
    query NewPagesQuery {
      site {
        siteMetadata {
          pages {
              title
              link
          } 
        }
      }
    }
    `)

    const pages = data.site.siteMetadata.pages;

    const handleSearchQuery = (e) => {
        e.preventDefault();
        const foundPages = pages.filter(page => page.title.toLowerCase() === query.toLowerCase())
        if(foundPages.length > 0) {
            const link = foundPages[0].link;
            navigate(link);
            e.target.searchQuery.value = "";
        }
        else {
            // notify user the search has no match
            // better to notify on the same page than send to 404
            // try tooltip
        }
        
    }
    
    return (
        <>
            <form onSubmit={handleSearchQuery}>
                <input
                    placeholder="Search"
                    type="text"

                    name="searchQuery"
                    onChange={(e) => {setQuery(e.target.value)}} 
                />
                <button type="submit">Go</button>
            </form>

            {/* <p>Pages</p>
            {pages.map((element, id) => <p key={id} >{element.title}</p>)} */}
        </>
    );
}

export default PageSearchForm;