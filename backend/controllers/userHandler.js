const dashboardUser = (req, res) => {
  console.log(req.user);
  res.status(200).json({ message: 'Dashboard' });
};

module.exports = dashboardUser;
