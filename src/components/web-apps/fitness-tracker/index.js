import React, { useEffect } from "react";
import Chart from "chart.js";

const FitnessTrackerApp = () => {
    useEffect(() => {
        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
            type: "pie",
            data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "Red",
                    "Blue",
                    "Yellow",
                    "Green",
                    "Purple",
                    "Orange"
                ],
                borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                borderWidth: 1
                }
            ]
            }
        });
    });

    return (
        <div style={{width: "300px"}}>
            <div>Fitness Tracker</div>
            <canvas id="myChart"></canvas>
        </div>
    );
}

export default FitnessTrackerApp;