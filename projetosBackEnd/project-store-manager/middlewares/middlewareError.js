const middlewareError = ({ message }, _req, res, _next) => {
  if (message.includes('required')) {
    res.status(400).json({ message });
  }

  if (message.includes('length')) {
    res.status(422).json({ message });
  }

  if (message.includes('greater')) {
    res.status(422).json({ message });
  }

   if (message.includes('found')) {
    res.status(404).json({ message });
  }
};

module.exports = middlewareError;