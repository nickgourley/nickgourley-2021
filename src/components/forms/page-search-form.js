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
              displayTitle
              link
          } 
        }
      }
    }
    `)

    const pages = data.site.siteMetadata.pages;

    const handleSearchQuery = (e, element) => {
        e.preventDefault();
        if(element) {
            navigate(element.link);
        }
    }

    const handleSearchFocusOut = () => {

        setFocusOnSearchBox(false);
    }

    const handleSearchFocus = (e) => {
        setFocusOnSearchBox(true);
    }

    const handleLinkClick = (e, element) => {
        const pageSearchInput = document.getElementById('pageSearchInput');
        pageSearchInput.value = e.target.innerHTML;
        setQuery(e.target.innerHTML);
        handleSearchQuery(e, element);
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
                    type="search"
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
                                <Link className={PageSearchFormStyles.link} to={element.link} onMouseDown={(e) => handleLinkClick(e, element)} key={id}>
                                    <div title={element.title}>
                                        {element.displayTitle}
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