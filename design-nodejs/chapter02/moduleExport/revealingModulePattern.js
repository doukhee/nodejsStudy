/** revealing module pattern */
const modules = (()=>{
    /** not export private things */
    const privateFoo = () =>{};
    const privateBar = [];

    const exported = {
        publicFoo:()=>{},
        publicBar:()=>{}
    };
    return exported;
})();
console.log(modules);

//module.exports = modules;