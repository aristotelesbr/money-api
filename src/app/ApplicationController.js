class ApplicationController {
  async index(req, res) {
    return res.json({ msg: 'Hello from Express!!!' });
  }
}

export default new ApplicationController();
