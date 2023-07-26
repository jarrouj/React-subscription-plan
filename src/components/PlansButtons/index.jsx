import './planb.styles.css';
import PLANS from '../../data/monthlyPlan.json'
import { useState } from 'react';


export const PlansButtons = () => {
  const [ischecked, setIschecked] = useState(false);
  const [ischeckedBox, setIscheckedBox] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  


  const handleClick = () => {
    setIschecked(!ischecked);
    setSelectedPlan(!selectedPlan);
    const buttons = document.querySelectorAll(".plans > button");

    if (ischecked) {

      buttons.disabled = false;


    } else {

      buttons.disabled = true;

    }
  };

  const handleButton = (name,event) => {
    // setIscheckedBox(true)

    setSelectedPlan(name);
    const buttons = document.querySelectorAll(".plans > button");

    buttons.checked = true;

    

    document.addEventListener("click", (event) => {
      if (event.target.tagName === "SPACE") {
        setIschecked(false)      }
    });

  };
  const HandleSubmit=()=>{
  
    var modal = document.getElementById("myModal");
    
    var btn = document.getElementById("myBtn");
    
    var span = document.getElementsByClassName("close")[0];
        btn.onclick = function() {
      modal.style.display = "block";
    }
        span.onclick = function() {
      modal.style.display = "none";
    }
        window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    
   
      }
      

  return (
    <div>
      <div class="container">
        <label class="switch" for="checkbox">
          <input
            id='checkbox'
            type="checkbox"
            className="checkmark-green"
            checked={ischecked}
            onClick={handleClick}
          />
          <div class="slider round"></div>
        </label>
        <h3 className="ml-96 mt-[-1.7rem] font-bold text-sm">Monthly Plan</h3>

      </div>
      <div className="plans">
        {
          PLANS.map((plans) => (
            <div className="flex flex-wrap ml-80 mt-4">
              <button
                key={plans.name}
                className={`bg-${plans.name === selectedPlan ? 'green-color' : 'white'} rounded-xl text-blue-900 font-bold py-2 px-4 border-2 border-green-color focus:bg-green-color w-5/12 h-16  ${plans.name === selectedPlan
                  ? 'shadow-md shadow-gray-500'
                  : ''} `}
                style={{ display: "inline-block", marginBottom: 10, }}
                disabled={!ischecked}
                onClick={() => handleButton(plans.name)}

              >
                <div className="flex items-center justify-between">
                  <input
                    id='checkBox'
                    type="checkbox"
                    className="checkmark-green"
                    disabled
                    checked={ischeckedBox}
                  />
                  <h3
                    className={"text-2xl mb-1 text-center right-20 text-right" + (plans.name === selectedPlan ? " text-white" : " text-blue-900")
                    }
                    id="plans-name"
                    style={{ position: "relative" }}
                  >
                    {plans.name}
                  </h3>

                  <div
                    className={`border rounded-md text-xs w-20 h-5 left-16 ${plans.name === selectedPlan
                        ? 'bg-light-green text-white border-green-color'
                        : 'bg-red-300 text-red-700 border-red-300'
                      }`}
                    style={{ position: 'relative' }}
                  >
                    Save {plans.save}%
                  </div>

                  <span className={(plans.name === selectedPlan ? " text-white" : " text-blue-900")}><span className='text-2xl font-bold'>${plans.price}</span><span className='text-xs'> /Month</span></span>
                </div>
              </button>
            </div>
          ))
        }
      </div>

      <div className="ml-16 flex justify-center">
        <div className="w-[35rem] rounded-lg h-[21.5rem] border border-light-green mt-[-22rem] ml-[40rem]">
          <div className="border border-green-700 rounded-t-lg bg-green-color h-16">
            <p className="text-white text-left mt-5 ml-16 text-sm">Details</p>
            <h1 className="text-white text-right mt-[-1.4rem] mr-10 text-lg font-bold">{selectedPlan || ''}</h1>
          </div>
          <div className="ml-16 space-y-7 mt-6">
            <h4 className={`first font-bold ${selectedPlan === 'Base Plan' || selectedPlan === 'Fuse Plan' || selectedPlan === 'Extro Plan' || selectedPlan === 'Universe Plan' ? 'text-blue-900' : 'text-gray-300'}`}>All Limited Links
            <span className='ml-64'>{selectedPlan === 'Base Plan' || selectedPlan === 'Fuse Plan' || selectedPlan === 'Extro Plan' || selectedPlan === 'Universe Plan' ? '✅' : ''}</span></h4>
            
            <h4 className={`second font-bold ${selectedPlan === 'Base Plan' || selectedPlan === 'Fuse Plan' || selectedPlan === 'Extro Plan' || selectedPlan === 'Universe Plan' ? 'text-blue-900' : 'text-gray-300'}`}>Own Analytic Platform 
            <span className='ml-[13.2rem]'>{selectedPlan === 'Base Plan' || selectedPlan === 'Fuse Plan' || selectedPlan === 'Extro Plan' || selectedPlan === 'Universe Plan' ? '✅' : ''}</span></h4>
            

            <h4 className={`third font-bold ${selectedPlan === 'Fuse Plan' || selectedPlan === 'Extro Plan' || selectedPlan === 'Universe Plan' ? 'text-blue-900' : 'text-gray-300'}`}>Chat Suport
            <span className='ml-[18.3rem]'>{selectedPlan === 'Fuse Plan' || selectedPlan === 'Extro Plan' || selectedPlan === 'Universe Plan' ? '✅' : ''}</span></h4>
            

            <h4 className={`fourth font-bold ${selectedPlan === 'Extro Plan' || selectedPlan === 'Universe Plan' ? 'text-blue-900' : 'text-gray-300'}`}>Optimize Hashtag
            <span className='ml-[15.5rem]'>{selectedPlan === 'Extro Plan' || selectedPlan === 'Universe Plan' ? '✅' : ''}</span></h4>
            

            <h4 className={`fifth font-bold ${selectedPlan === 'Universe Plan' ? 'text-blue-900' : 'text-gray-300'}`}>Unlimited User
            <span className='ml-[16.9rem]'>{selectedPlan === 'Universe Plan' ? '✅' : ''}</span></h4>
            

          </div>

        </div>
      </div>


      <div>
        
        <button
          
          disabled={!ischecked}
          id="myBtn"
          onClick={HandleSubmit}
          className='border border-red-700 bg-red-700 w-40 h-9 rounded-md text-white text-sm ml-[89.5rem] mt-3 shadow-lg shadow-gray-500	'
        >Choose Plan</button>
        
      </div>


<div id="myModal" class="modal">


<div class="modal-content">
    <span class="close">&times;</span>
    <h1>You have chosen: {selectedPlan}</h1>
    <h2>
      The Plan includes:
        {PLANS.find((plan) => plan.name === selectedPlan)
            ? `
                ${PLANS.find((plan) => plan.name === selectedPlan).details.map((detail) => `${detail}`).join('')}
            `
            : `Plan details not found for ${selectedPlan}`}
    </h2>
</div>


</div>

      <div className="my-[-2rem] ">
  <button className="ml-80 text-gray-500">&lt;-- Back</button>
</div>

    </div>
  );
};
