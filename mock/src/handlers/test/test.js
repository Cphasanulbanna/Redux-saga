import { rest } from "msw"
import { API_URL } from "../../urls"

export default [
    rest.post(API_URL.TEST.HELLO, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                payload: {
                    text: "Hello World"
                },
                message: "Success"
            })
        )
    })
]
