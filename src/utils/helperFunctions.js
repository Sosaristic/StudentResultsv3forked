export const classOfDegreeCalculator = (gp) => {
      const CGPA =
        gp >= 4.5
          ? "First Class"
          : gp >= 3.5 && gp < 4.49
          ? "2nd Class Upper"
          : gp >= 2.4 && gp < 3.5
          ? "2nd Class Lower"
          : gp >= 1.5 && gp < 2.4
          ? "3rd Class"
          : gp >= 1.0 && gp < 1.5
          ? "pass"
          :"fail"
          
      return CGPA;
    };