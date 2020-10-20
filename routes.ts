import { RouterContext } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.7.0/mod.ts";


export const home = async (ctx: RouterContext) => {
    const currentUser = ctx.state.currentUser;
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/quiz.ejs`, {
        user: currentUser
    });
}

export const quizresult = async (ctx: RouterContext) => {
    const currentUser = ctx.state.currentUser;
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/quizresult.ejs`, {
    });
}

export const postquizresult = async (ctx: RouterContext) => {
    var count = 0
    const {value} = await ctx.request.body();
    const q1a1 = value.get('question1')
    const q1a2 = value.get('question2')
    const q1a3 = value.get('question3')
    
    if(q1a3 == "true"){count++}
    if(q1a2 == "true"){count++}
    if(q1a3 == "true"){count++}
    console.log(q1a1, q1a2, q1a3 , count);
    }
