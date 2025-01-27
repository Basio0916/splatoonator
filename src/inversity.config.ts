import { Container } from "inversify";
import MainWeaponRepository from "./domain/repository/MainWeaponRepository";
import SubWeaponRepository from "./domain/repository/SubWeaponRepository";
import SpecialWeaponRepository from "./domain/repository/SpecialWeaponRepository";
import JsonMainWeaponRepository from "./infrastructure/persistence/json/JsonMainWeaponRepository";
import JsonSubWeaponRepository from "./infrastructure/persistence/json/JsonSubWeaponRepository";
import JsonSpecialWeaponRepository from "./infrastructure/persistence/json/JsonSpecialWeaponRepository";
import WeaponRepository from "./domain/repository/WeaponRepository";
import JsonWeaponRepository from "./infrastructure/persistence/json/JsonWeaponRepository";
import TYPES from "./type/types";
import GameStartUsecase from "./usecase/GameStartUsecase";
import GetAnswerUsecase from "./usecase/GetAnswerUsecase";
import QuestionUsecase from "./usecase/QuestionUsecase";
import SubmitUsecase from "./usecase/SubmitUsecase";

const container = new Container();

container
  .bind<MainWeaponRepository>(TYPES.MainWeaponRepository)
  .to(JsonMainWeaponRepository)
  .inSingletonScope();
container
  .bind<SubWeaponRepository>(TYPES.SubWeaponRepository)
  .to(JsonSubWeaponRepository)
  .inSingletonScope();
container
  .bind<SpecialWeaponRepository>(TYPES.SpecialWeaponRepository)
  .to(JsonSpecialWeaponRepository)
  .inSingletonScope();
container
  .bind<WeaponRepository>(TYPES.WeaponRepository)
  .to(JsonWeaponRepository)
  .inSingletonScope();
container
  .bind<GameStartUsecase>(TYPES.GameStartUsecase)
  .toSelf()
  .inSingletonScope();
container
  .bind<GetAnswerUsecase>(TYPES.GetAnswerUsecase)
  .toSelf()
  .inSingletonScope();
container
  .bind<QuestionUsecase>(TYPES.QuestionUsecase)
  .toSelf()
  .inSingletonScope();
container.bind<SubmitUsecase>(TYPES.SubmitUsecase).toSelf().inSingletonScope();

export default container;
