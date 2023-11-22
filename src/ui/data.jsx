const randomNum = parseInt(Math.random()*1)+35;
alert(randomNum)
const data = [{
    title:'Specific Image',
    desc:'Get a specific image by adding /number/ to the start of the url.',
    link:'https://museum-api-mocha.vercel.app/{specific number}',
    img_link:'ie. https://museum-api-mocha.vercel.app/1',
    image:'https://github.com/Niteshkumar13/museum_api/blob/main/images/42.webp?raw=true'

},
{
    title:'Static Random Image',
    desc:'Get the same random image every time based on a seed, by adding /{random} to the start of the url.',
    link:'https://museum-api-mocha.vercel.app/random',
    img_link:'ie. https://museum-api-mocha.vercel.app/random',
    image:`https://github.com/Niteshkumar13/museum_api/blob/main/images/${randomNum}.jpg?raw=true`
 
}
]
export default data