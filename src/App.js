import React from "react";

function App() {
  return (
    <div className="">
      <div className="flex flex-col h-[700px] bg-white w-[500px]  mx-auto rounded-2xl mt-5 ">
        <h1 className="text-4xl mx-12 mt-10 mb-5 font-serif ">Choose a trail plan</h1>
        <div className="flex flex-row px-4 justify-between mx-12 my-4 py-4 bg-[#f4fafa] border rounded-2xl hover:scale-105 ">
          <div className="display:block position:relative py-6 mr-2 h-full rounded-full mx-auto">
          <input className="w-6 h-6 rounded-full text-black accent-black focus:accent-black checked:after:circle" type="checkbox"  id="checkbox"/>
          </div>
          <div className="pl-1">
            <h1 className="text-xl font-semibold">Standard</h1>
            <p className="text-sm mt-2">5 TB of space with easy-to-use team management and collaboration tools.</p>
          </div>
        </div>        
        <div className="flex flex-row px-4 justify-between mx-12 my-4 py-4 bg-[#f4fafa] border rounded-2xl hover:scale-105">
          <div className="display:block position:relative py-8 mr-2 h-full rounded-full mx-auto">
          <input className="w-6 h-6 rounded-full" type="checkbox"  id="checkbox"/>
          </div>
          <div className="pl-1">
            <h1 className="text-xl font-semibold">Advanced</h1>
            <p className="text-sm mt-2">As much space as your team needs with sophisticated admin, audit, security and intergration capabilities.</p>
          </div>
        </div>
        <div className="flex flex-row px-4 justify-between mx-12 py-2 ">
          <div className="display:block position:relative pt-4 mr-2 h-full rounded-full mx-auto">
          <input className="w-6 h-6 rounded-full" type="checkbox"  id="checkbox"/>
          </div>
          <div className="mx-auto">
            <p className="text-sm">I agree to the <a className="underline" href="/">Agreement and Terms. </a>Find out more about how we use and protect your data in our <a className="underline" href="/">Privacy Policy.</a></p>
          </div>
        </div>
        <div className="flex flex-row px-4 justify-between mx-12 py-2 ">
          <div className="display:block position:relative pt-2 mr-2 h-full rounded-full mx-auto ">
          <input className="w-6 h-6 rounded-full" type="checkbox"  id="checkbox"/>
          </div>
          <div className="mx-auto ml-[-1px]">
            <p  className="text-sm">I'd like to recieve direct marketing email updates.</p>
          </div>
        </div>
        <div className="flex flex-col px-4 justify-between mx-12 py-2 ">
          <div className="h-[50px] mt-2  "><button className="text-white bg-black hover:bg-slate-600 hover:scale-105 align-center w-full h-full items-center. mx-auto justify-center text-sm">Start free trail</button></div>
          <div className="mx-auto my-4"><p className="text-[10px]">No credit card needed</p></div>
        </div>

        
      </div>

    </div>
  );
}

export default App;
