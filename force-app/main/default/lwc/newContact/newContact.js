import { LightningElement ,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class NewContact extends LightningElement {
    @api 
    recordId;

    handleSuccess(event){
        this.recordId= event.detail.Id;
        console.log("success contact inserted successfully"+ this.recordId);
        this.dispatchEvent(
            new ShowToastEvent({
                      title: 'Success',
                      message: 'Record inserted.',
                      variant: 'success'
                  })
         );

        const myCustomEvent= new CustomEvent('insert',{detail: this.recordId});
        this.dispatchEvent(myCustomEvent);


    }
}