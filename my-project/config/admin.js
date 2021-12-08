module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cafcfd88f42e272f2320fb463eed1a64'),
  },
});
