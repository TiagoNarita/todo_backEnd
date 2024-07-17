import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/detailUserService";

class DetailUserController {
  async handle(req: Request, resp: Response) {
    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute();

    //eazy way
    return resp.json(user);
  }
}

export { DetailUserController };
