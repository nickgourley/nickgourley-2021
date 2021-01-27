import React from "react";
import SEO from "../../components/seo";
import FitnessTrackerApp from "../../components/web-apps/fitness-tracker";

const FitnessTracker = () => {
    return (
        <>
            <SEO title="Fitness Tracker" />
            <h1>Fitness Tracker</h1>
            <hr />
            <FitnessTrackerApp />
        </>
    );
}

export default FitnessTracker;