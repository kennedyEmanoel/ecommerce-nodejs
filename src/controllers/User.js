class User {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new User();
