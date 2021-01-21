import React, { useState } from "react";
import { Link, useStaticQuery, graphql, navigate } from "gatsby";
import PageSearchFormStyles from "./page-search-form.module.css";

const PageSearchForm = () => {
    const [query, setQuery] = useState('');
    const [focusOnSearchBox, setFocusOnSearchBox] = useState(false);

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
        const newQuery = document.getElementById('pageSearchInput').value
        const foundPages = pages.filter(page => page.title.toLowerCase() === newQuery.toLowerCase())
        if(foundPages.length > 0) {
            const link = foundPages[0].link;
            navigate(link);
            
        }
        else {
            // notify user the search has no match
            // better to notify on the same page than send to 404
            // try tooltip
        }
        
    }

    const handleSearchFocusOut = () => {

        setFocusOnSearchBox(false);
    }

    const handleSearchFocus = (e) => {
        setFocusOnSearchBox(true);
    }

    const handleLinkClick = (e) => {
        const pageSearchInput = document.getElementById('pageSearchInput');
        pageSearchInput.value = e.target.innerHTML;
        setQuery(e.target.innerHTML);
        handleSearchQuery(e);
        handleSearchFocusOut();
    }
    
    return (
        <>
            <form id="pageSearchForm" onSubmit={handleSearchQuery}>
                <div className={PageSearchFormStyles.container}>
                <input
                    id="pageSearchInput"
                    className={PageSearchFormStyles.pageSearchInput}
                    placeholder="Search"
                    type="text"
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchFocusOut}
                    name="searchQuery"
                    onChange={(e) => {
                        setQuery(e.target.value)
                        handleSearchFocus()
                    }} 
                />
                
                <div className={PageSearchFormStyles.suggestions}>
                    {/** If query is blank or focus is not on search box, do nothing.
                     *  Otherwise filter pages based on query and map the results to jsx and render.
                     */}
                    {query === '' 
                        || !focusOnSearchBox 
                        || pages.filter(page => page.title.toLowerCase().startsWith(query.toLowerCase()))
                        .map((element, id) => ( 
                                <Link to={element.link} onMouseDown={handleLinkClick} key={id}>
                                    <div>
                                        {element.title}
                                    </div>
                                </Link>
                        ))
                    }
                </div>
                
                </div>
                
            </form>
        </>
    );
}

export default PageSearchForm;