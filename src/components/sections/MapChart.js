import React, { memo } from "react";
import {
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const data = [
    { id: "VEN", name: "Venezuela"},
    { id: "ABW", name: "Aruba"},
    { id: "CRI", name: "Costa Rica"},
    { id: "DOM", name: "Dominican Republic"},
    { id: "MEX", name: "Mexico"},
    { id: "PRI", name: "Puerto Rico"},
    { id: "BHS", name: "The Bahamas"},
    { id: "USA", name: "United States of America"},
]

const MapChart = ({ setTooltipContent }) => {
    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                <Geographies geography={geoUrl}>

                    {({ geographies }) =>
                        geographies.map(geo => {
                            const country = data.find(d => d.id === geo.properties.ISO_A3)
                        return(
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() => {
                                    const { NAME } = geo.properties;
                                    setTooltipContent(`${NAME}`);
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
