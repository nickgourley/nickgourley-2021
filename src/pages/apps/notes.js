import React from "react";
import SEO from "../../components/seo";
import NotesApp from "../../components/web-apps/notes-app";

const Notes = () => {
    return (
        <>
            <SEO title="Notes" />
            <h1>Notes App</h1>
            <hr />
            <NotesApp />
        </>
    );
}

export default Notes;