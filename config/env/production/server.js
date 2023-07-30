module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  dirs: {
    public: "http://serumapi.sra-link.com:1337/uploads"
  },
});
