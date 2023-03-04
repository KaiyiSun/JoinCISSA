export const getUser = async (req, res) => {
  const user = { email: "123@123.com", name: "James Xu" };
  const result = { email: user?.email, name: user?.name };
  res.json({ user: result });
};
