module.exports = {
  user          : process.env.NODE_ORACLEDB_USER || "tannp",
  password      : process.env.NODE_ORACLEDB_PASSWORD || "Abcd1234",
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "padserver.npt//orcl"
};