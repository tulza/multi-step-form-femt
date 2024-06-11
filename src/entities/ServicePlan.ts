class SurvicePlan {
  static singleton = new SurvicePlan();
  static name = "";

  private constructor() {}

  public static getService() {
    if (this.singleton == null) {
      this.singleton = new SurvicePlan();
    }
    return this.singleton;
  }
}
