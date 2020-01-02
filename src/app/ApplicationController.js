class ApplicationController {
  async index(req, res) {
    return res.status(200).json({
      msg: "Hello from Express!"
    });
  }
}

export default new ApplicationController();
