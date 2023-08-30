const isAdmin = (email) => {
  if (email === process.env.ADMIN_EMAIL) {
    return true;
  } else {
    return false;
  }
};

module.exports = { isAdmin };
