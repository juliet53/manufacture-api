function Remise(prix, pourcentage) {
  if (pourcentage < 0 || pourcentage > 100) {
    throw new Error('Attention erreur de remise');
  }
  return Math.round(prix * (1 - pourcentage / 100) * 100) / 100;
}

module.exports = { Remise };
