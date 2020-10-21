import { RouterContext } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.7.0/mod.ts";
import {answers , Answer} from "./answer.ts";


export const home = async (ctx: RouterContext) => {
    const currentUser = ctx.state.currentUser;
    const getValue = answers.find((a:Answer) => (a.check === 1));
    if(getValue){
        const que_ans_one = getValue.que_ans_one;
        const que_ans_two = getValue.que_ans_two;
        const que_ans_three = getValue.que_ans_three;
        const que_ans_four = getValue.que_ans_four;
        const que_ans_five = getValue.que_ans_five;
        const que_ans_six = getValue.que_ans_six;
        const que_ans_seven = getValue.que_ans_seven;
        const que_ans_eight = getValue.que_ans_eight;
        const que_ans_nine = getValue.que_ans_nine;
        const que_ans_ten = getValue.que_ans_ten;
        const check = getValue.check;
        const score = getValue.score;

        ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/quiz.ejs`, {
            error1 : "hello world",
            q1ans : que_ans_one,
            q2ans : que_ans_two,
            q3ans : que_ans_three,
            q4ans : que_ans_four,
            q5ans : que_ans_five,
            q6ans : que_ans_six,
            q7ans : que_ans_seven,
            q8ans : que_ans_eight,
            q9ans : que_ans_nine,
            q10ans : que_ans_ten,
            pressRadio : "checked",
            foundResponse : check,
            totalscore : ( score / 10 ) * 100,
            disButton : "disabled"
            
        },);
        //console.log(q1a1)
    }else{
        console.log("Home")
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/quiz.ejs`, {
            user: currentUser,
            q1a1: false,
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
}

export const quiz = async (ctx: RouterContext) => {
    console.log("quiz")
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/quiz.ejs`, {
    });
}

export const postquizresult = async (ctx: RouterContext) => {
    
    const check = 1;
    
    var score = 0
    
    const {value} = await ctx.request.body();

    const que_ans_one = value.get('question1')
    const que_ans_two = value.get('question2')
    const que_ans_three = value.get('question3')
    const que_ans_four = value.get('question4')
    const que_ans_five = value.get('question5')
    const que_ans_six = value.get('question6')
    const que_ans_seven = value.get('question7')
    const que_ans_eight = value.get('question8')
    const que_ans_nine = value.get('question9')
    const que_ans_ten = value.get('question10')
    
    if(que_ans_one == "correct1"){score++}
    if(que_ans_two == "correct1"){score++}
    if(que_ans_three == "correct1"){score++}
    if(que_ans_four == "correct1"){score++}
    if(que_ans_five == "correct1"){score++}
    if(que_ans_six == "correct1"){score++}
    if(que_ans_seven == "correct1"){score++}
    if(que_ans_eight == "correct1"){score++}
    if(que_ans_nine == "correct1"){score++}
    if(que_ans_ten == "correct1"){score++}

    const answer = {
        que_ans_one,
        que_ans_two,
        que_ans_three,
        que_ans_four,
        que_ans_five,
        que_ans_six,
        que_ans_seven,
        que_ans_eight,
        que_ans_nine,
        que_ans_ten,
        score,
        check
    }
    answers.push(answer)
    ctx.response.redirect('/');
    }