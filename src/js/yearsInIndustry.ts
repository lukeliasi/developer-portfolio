import { differenceInYears } from "./differenceInYears";
import globalData from "../data/global.json";

export const yearsInIndustry = differenceInYears(new Date(globalData.careerStartDate), new Date());