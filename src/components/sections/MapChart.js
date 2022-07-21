import React, { memo } from "react";
import {
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

const data = [
    { id: "VEN", name: "Venezuela"},
    { id: "ABW", name: "Aruba"},
    { id: "CRI", name: "Costa Rica"},
    { id: "DOM", name: "Dominican Republic"},
    { id: "MEX", name: "Mexico"},
    { id: "PRI", name: "Puerto Rico"},
    { id: "BHS", name: "The Bahamas"},
    { id: "USA", name: "United States of America"},
    { id: "AUT", name: "Austria"},
    { id: "GBR", name: "England"},
    { id: "FRA", name: "France"},
    { id: "DEU", name: "Germany"},
    { id: "ITA", name: "Italy"},
    { id: "CHE", name: "Switzerland"},
    { id: "NLD", name: "The Netherlands"},
]

const MapChart = ({ setTooltipContent }) => {
    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 190 }}>
                <Geographies geography="/features.json">
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const country = data.find(d => d.id === geo.id)
                        return(
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() => {
                                    setTooltipContent(`${geo.properties.name}`);
                                }}
                                onMouseLeave={() => {
                                    setTooltipContent("");
                                }}
                                style={{
                                    default: {
                                        fill: country ? "#ef4caa" : "#D6D6DA",
                                        outline: "none"
                                    },
                                    hover: {
                                        fill: "#ef4caa",
                                        outline: "none"
                                    },
                                    pressed: {
                                        fill: "#ef4caa",
                                        outline: "none"
                                    }
                                }}
                            />)}
                        )
                    }
                </Geographies>
            </ComposableMap>
        </>
    );
};

export default memo(MapChart);
