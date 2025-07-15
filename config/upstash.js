import { Ratelimit } from "@upstash/ratelimit";
import {Redis} from "@upstash/redis"
import dotenv from "dotenv"
dotenv.config()
//create a rate limiter 10 req per 20 seconds
const ratelimit= new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(10,"10s")
})
export default ratelimit