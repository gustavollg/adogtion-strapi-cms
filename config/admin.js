module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '560730a301ad55c6b8751257e317eac7'),
  },
});
