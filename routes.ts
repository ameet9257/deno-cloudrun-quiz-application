import { RouterContext } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.7.0/mod.ts";
import {answers , Answer} from "./answer.ts";


export let home = async (ctx: RouterContext) => {
        console.log("Home")
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/quiz.ejs`, {
            //user: currentUser,
            q1ans : false,
            q2ans : false,
            q3ans : false,
            q4ans : false,
            q5ans : false,
            q6ans : false,
            q7ans : false,
            q8ans : false,
            q9ans : false,
            q10ans : false,
            pressRadio : false,
            foundResponse : false,
            totalscore : 0,
            disButton : false
        });
}

export let quiz = async (ctx: RouterContext) => {
    console.log("quiz")
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/quiz.ejs`, {
    });
}

export let postquizresult = async (ctx: RouterContext) => {
    
    let check = 1;
    
    let score = 0
    
    let {value} = await ctx.request.body();

    let q1ans = value.get('question1')
    let q2ans = value.get('question2')
    let q3ans = value.get('question3')
    let q4ans = value.get('question4')
    let q5ans = value.get('question5')
    let q6ans = value.get('question6')
    let q7ans = value.get('question7')
    let q8ans = value.get('question8')
    let q9ans = value.get('question9')
    let q10ans = value.get('question10')
    
    if(q1ans == "correct1"){score++}
    if(q2ans == "correct1"){score++}
    if(q3ans == "correct1"){score++}
    if(q4ans == "correct1"){score++}
    if(q5ans == "correct1"){score++}
    if(q6ans == "correct1"){score++}
    if(q7ans == "correct1"){score++}
    if(q8ans == "correct1"){score++}
    if(q9ans == "correct1"){score++}
    if(q10ans == "correct1"){score++}

    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/quiz.ejs`, {
        error1 : "hello world",
        q1ans,
        q2ans,
        q3ans,
        q4ans,
        q5ans,
        q6ans,
        q7ans,
        q8ans,
        q9ans,
        q10ans,
        pressRadio : "checked",
        foundResponse : check,
        totalscore : ( score / 10 ) * 100,
        disButton : "disabled"
        
    },);

    //ctx.response.redirect('/');
    }