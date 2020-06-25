module.exports = (app) => {
  app.get('/api/reports', (req, res) => {
    res.json({
      data: {},
    });
  });
};
