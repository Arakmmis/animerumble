function energyManagement(energy, skill) {
  if (skill.a > 0) {
    energy.a -= skill.a;
  }
  if (skill.i > 0) {
    energy.i -= skill.i;
  }
  if (skill.s > 0) {
    energy.s -= skill.s;
  }
  if (skill.w > 0) {
    energy.w -= skill.w;
  }
}

module.exports = energyManagement;