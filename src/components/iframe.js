import React from 'react';


const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source; 
    let iframeStyle = {width:'100%', height:'650px', border:'none'};
    return (
        <div>
            <div className="emdeb-responsive">
                <iframe style={iframeStyle} src={src}></iframe>
            </div>
        </div>
    );
};

export default Iframe;