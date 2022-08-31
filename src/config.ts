const missingSetting = "Warning: No value set for this envrironment variable";

const config = {
    PORT: process.env.PORT || missingSetting,
};

export default config;
