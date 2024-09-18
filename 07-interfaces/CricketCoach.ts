import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyWorkOut(): string {
        return "Practice Cover drive and ON drive";
    }   
}