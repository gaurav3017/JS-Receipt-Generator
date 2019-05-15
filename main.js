class Receipt {
    constructor(rent, address, tenantName, ownerName, ownerPan, startMonth, endMonth) {
      this.rent = rent;
      this.address = address;
      this.tenantName = tenantName;
      this.ownerName = ownerName;
      this.ownerPan = ownerPan;
      this.startMonth = startMonth;
      this.endMonth = endMonth;
    }
    
  }
//   document.getElementById('print-receipt').addEventListener('click',() => {

//   })

  var counter = 0;

  class UI{
      static displayReceipt(receipt){
        const op = document.getElementById('receipt-display');
        const data = document.createElement('div');
        counter++;

        data.innerHTML = `
            <h1>Rent Receipt</h1>
            <div style="float: right;">
                <p>Receipt Number: ${counter}</p>
                <p>Date:  ${receipt.startMonth}</p>
            </div>
            <h5>Generated on ClearTax(cleartax.in/save/rent)</h5><br /><br />
            <p>Received a sum of INR ${receipt.rent} from ${receipt.tenantName} towards the rent of property located at ${receipt.address} for the period from ${receipt.startMonth} to ${receipt.endMonth}.
            <br /><br />
            <b><p>${receipt.ownerName}</p></b>
            <p>PAN: ${receipt.ownerPan}</p><br />
        `;

        op.appendChild(data);
      }

      static clearInputFields(){
        document.querySelector('#rent').value = '';
        document.querySelector('#address').value = '';
        document.querySelector('#tenant-name').value = '';
        document.querySelector('#owner-name').value = '';
        document.querySelector('#end-month').value = '';
        document.querySelector('#start-month').value = '';
        document.querySelector('#owner-pan').value = '';
      }
  }
//   document.addEventListener('DOMContentLoaded', UI.displayReceipt);


  document.getElementById('input-data-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const rent = document.querySelector('#rent').value;
    const address = document.querySelector('#address').value;
    const tenantName = document.querySelector('#tenant-name').value;
    const ownerName = document.querySelector('#owner-name').value;
    const startMonth = document.querySelector('#end-month').value;
    const endMonth = document.querySelector('#start-month').value;
    const ownerPan = document.querySelector('#owner-pan').value;

  
    if(rent === '' || address === '' || tenantName === '' || ownerName === '' || startMonth === '' || endMonth === '' || ownerPan === '') {
        alert('All feilds are mandatory');
    } 
    else if(ownerPan.length < 6){
        alert('PAN should be of 6 characters');
    }
    else {
      const receipt = new Receipt(rent, address, tenantName, ownerName, ownerPan, startMonth, endMonth);
  
      UI.displayReceipt(receipt);
      document.getElementById("receipt-display").style.border = "thick solid #D3D3D3";
    }

    UI.clearInputFields();
  });