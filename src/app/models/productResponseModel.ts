import {Product }from "./product";
import { ResponseModel } from "./responseModel";

export interface RroductResponseMoodel extends ResponseModel{
    data:Product[],
}