const math = require('mathjs');

exports.calculate = (req, res, next) => {
  try {
    const { expression } = req.body;
    
    if (!expression) {
      return res.status(400).json({ error: 'Expression is required' });
    }

    const result = math.evaluate(expression);
    res.json({ result });
  } catch (error) {
    next(error);
  }
};